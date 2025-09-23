import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';
  errorMessage = '';
  lastUsedMethod: 'formspree' | 'emailjs' | 'mailto' | null = null;

  // EmailJS configuration - Ready for production fallback
  // To enable EmailJS fallback, replace these with your actual credentials from emailjs.com
  private readonly EMAILJS_SERVICE_ID = 'service_xxxxxxx'; // Replace with your service ID
  private readonly EMAILJS_TEMPLATE_ID = 'template_xxxxxxx'; // Replace with your template ID
  private readonly EMAILJS_PUBLIC_KEY = 'your_public_key'; // Replace with your public key
  
  // Production email configuration
  private readonly PRODUCTION_EMAIL = 'renisudjono@gmail.com';
  
  // Formspree configuration - Primary method (free tier)
  private readonly FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqaykead'; // Replace with your Formspree form ID
  
  // Fallback system: Formspree (primary) -> EmailJS (fallback) -> Mailto (final fallback)
  private readonly EMAILJS_ENABLED = false; // Set to true when EmailJS is configured for fallback

  async onSubmit() {
    if (this.isSubmitting) return;
    
    // Basic validation
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.message) {
      this.submitStatus = 'error';
      this.errorMessage = 'Please fill in all required fields.';
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.contactForm.email)) {
      this.submitStatus = 'error';
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }

    this.isSubmitting = true;
    this.submitStatus = 'idle';

    try {
      // Try Formspree first (primary method)
      try {
        await this.sendEmailWithFormspree();
        this.lastUsedMethod = 'formspree';
        this.submitStatus = 'success';
        this.resetForm();
        return; // Success, exit early
      } catch (formspreeError) {
        console.warn('Formspree failed, trying EmailJS fallback:', formspreeError);
        
        // Try EmailJS fallback if enabled
        if (this.EMAILJS_ENABLED) {
          try {
            await this.sendEmailWithEmailJS();
            this.lastUsedMethod = 'emailjs';
            this.submitStatus = 'success';
            this.resetForm();
            return; // Success, exit early
          } catch (emailjsError) {
            console.warn('EmailJS fallback failed, using mailto:', emailjsError);
          }
        }
        
        // Final fallback: mailto
        await this.sendEmailWithMailto();
        this.lastUsedMethod = 'mailto';
        this.submitStatus = 'success';
        this.resetForm();
      }
    } catch (error) {
      console.error('All email methods failed:', error);
      this.submitStatus = 'error';
      this.errorMessage = 'Failed to send message. Please try again or contact us directly.';
    } finally {
      this.isSubmitting = false;
    }
  }

  private async sendEmailWithEmailJS() {
    const templateParams = {
      from_name: this.contactForm.name,
      from_email: this.contactForm.email,
      subject: this.contactForm.subject || 'Contact Form Message',
      message: this.contactForm.message,
      to_email: this.PRODUCTION_EMAIL
    };

    await emailjs.send(
      this.EMAILJS_SERVICE_ID,
      this.EMAILJS_TEMPLATE_ID,
      templateParams,
      this.EMAILJS_PUBLIC_KEY
    );
  }

  private async sendEmailWithFormspree() {
    const formData = new FormData();
    formData.append('name', this.contactForm.name);
    formData.append('email', this.contactForm.email);
    formData.append('subject', this.contactForm.subject || 'Contact Form Message');
    formData.append('message', this.contactForm.message);
    formData.append('_replyto', this.contactForm.email);
    formData.append('_subject', `New message from ${this.contactForm.name}`);

    const response = await fetch(this.FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      // Check if it's a rate limit or quota exceeded error
      if (response.status === 429 || response.status === 403) {
        throw new Error('FORMSPREE_LIMIT_EXCEEDED');
      }
      throw new Error(`Formspree failed with status: ${response.status}`);
    }

    const result = await response.json();
    if (result.errors && result.errors.length > 0) {
      throw new Error(`Formspree validation error: ${result.errors[0].message}`);
    }
  }

  private async sendEmailWithMailto() {
    // Create mailto link with pre-filled content
    const subject = encodeURIComponent(this.contactForm.subject || 'Contact Form Message');
    const body = encodeURIComponent(
      `Name: ${this.contactForm.name}\n` +
      `Email: ${this.contactForm.email}\n\n` +
      `Message:\n${this.contactForm.message}`
    );
    
    const mailtoLink = `mailto:${this.PRODUCTION_EMAIL}?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Simulate network delay for UX
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  private resetForm() {
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  dismissMessage() {
    this.submitStatus = 'idle';
    this.errorMessage = '';
  }
}
