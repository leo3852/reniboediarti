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

  // EmailJS configuration - Ready for production
  // To enable EmailJS, replace these with your actual credentials from emailjs.com
  private readonly EMAILJS_SERVICE_ID = 'service_xxxxxxx'; // Replace with your service ID
  private readonly EMAILJS_TEMPLATE_ID = 'template_xxxxxxx'; // Replace with your template ID
  private readonly EMAILJS_PUBLIC_KEY = 'your_public_key'; // Replace with your public key
  
  // Production email configuration
  private readonly PRODUCTION_EMAIL = 'lauretha.sudjono@gmail.com';
  readonly USE_EMAILJS = false; // Set to true when EmailJS is configured
  readonly USE_FORMSPREE = true; // Set to true to use Formspree (free direct email sending)
  
  // Formspree configuration - Replace with your Formspree endpoint
  private readonly FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'; // Replace with your Formspree form ID

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
      if (this.USE_FORMSPREE) {
        // Use Formspree for direct email sending
        await this.sendEmailWithFormspree();
      } else if (this.USE_EMAILJS) {
        // Use EmailJS for production
        await this.sendEmailWithEmailJS();
      } else {
        // Use mailto fallback for immediate production deployment
        await this.sendEmailWithMailto();
      }
      
      this.submitStatus = 'success';
      this.resetForm();
    } catch (error) {
      console.error('Error sending email:', error);
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
      throw new Error('Failed to send message');
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
