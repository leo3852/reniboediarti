# Custom Domain Setup Guide - reniboediarti.com

## 🎯 **Overview**

This guide will help you connect your GoDaddy domain `reniboediarti.com` to your GitHub Pages portfolio. Once set up, your website will be accessible at `https://reniboediarti.com` instead of the GitHub Pages URL.

## ✅ **What I've Already Configured**

### **1. Angular Build Configuration**
- ✅ Added `custom-domain` configuration in `angular.json`
- ✅ Created `build:custom-domain` script in `package.json`
- ✅ Updated GitHub Actions workflow to use custom domain build

### **2. GitHub Pages Configuration**
- ✅ Created `CNAME` file with your domain
- ✅ Updated deployment workflow for custom domain

## 🔧 **Step-by-Step Setup**

### **Step 1: Configure GitHub Pages (GitHub.com)**

1. **Go to your repository**: `https://github.com/leo3852/reniboediarti`

2. **Navigate to Settings**:
   - Click on "Settings" tab in your repository
   - Scroll down to "Pages" section in the left sidebar

3. **Configure Custom Domain**:
   - In the "Custom domain" field, enter: `reniboediarti.com`
   - Click "Save"
   - ✅ GitHub will automatically create a CNAME file (we already have one)

4. **Enable HTTPS** (Important!):
   - Check the "Enforce HTTPS" checkbox
   - This ensures your site uses SSL encryption

### **Step 2: Configure DNS in GoDaddy**

1. **Log into GoDaddy**:
   - Go to `https://godaddy.com`
   - Sign in to your account

2. **Access DNS Management**:
   - Go to "My Products" or "Domain Manager"
   - Find `reniboediarti.com` and click "DNS" or "Manage DNS"

3. **Add DNS Records**:
   
   **A Records** (Point to GitHub Pages IPs):
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   TTL: 600 (or default)
   
   Type: A
   Name: @
   Value: 185.199.109.153
   TTL: 600 (or default)
   
   Type: A
   Name: @
   Value: 185.199.110.153
   TTL: 600 (or default)
   
   Type: A
   Name: @
   Value: 185.199.111.153
   TTL: 600 (or default)
   ```

   **CNAME Record** (For www subdomain):
   ```
   Type: CNAME
   Name: www
   Value: leo3852.github.io
   TTL: 600 (or default)
   ```

4. **Remove Conflicting Records**:
   - Delete any existing A records pointing to GoDaddy's parking page
   - Remove any conflicting CNAME records

### **Step 3: Deploy Your Changes**

1. **Commit and Push Changes**:
   ```bash
   git add .
   git commit -m "Configure custom domain reniboediarti.com"
   git push origin main
   ```

2. **Monitor Deployment**:
   - Go to your repository's "Actions" tab
   - Watch the deployment workflow run
   - Wait for it to complete successfully

### **Step 4: Verify Setup**

1. **Check GitHub Pages Status**:
   - Go to repository Settings → Pages
   - Verify "Custom domain" shows `reniboediarti.com`
   - Check that "Enforce HTTPS" is enabled

2. **Test Domain Access**:
   - Wait 5-10 minutes for DNS propagation
   - Visit `https://reniboediarti.com`
   - Visit `https://www.reniboediarti.com`
   - Both should show your portfolio

## ⏱️ **Timeline & Expectations**

### **Immediate (0-5 minutes)**
- ✅ GitHub Pages configuration
- ✅ Deployment workflow starts

### **Short Term (5-30 minutes)**
- ✅ DNS propagation begins
- ✅ Site accessible via custom domain

### **Full Propagation (24-48 hours)**
- ✅ All DNS servers worldwide updated
- ✅ Consistent access from all locations

## 🔍 **Troubleshooting**

### **Common Issues & Solutions**

#### **1. "Site Not Found" Error**
- **Cause**: DNS not propagated yet
- **Solution**: Wait 10-30 minutes, then try again

#### **2. "Not Secure" Warning**
- **Cause**: HTTPS not enforced
- **Solution**: Enable "Enforce HTTPS" in GitHub Pages settings

#### **3. "CNAME Already Exists" Error**
- **Cause**: Conflicting DNS records
- **Solution**: Remove old A/CNAME records in GoDaddy

#### **4. Site Shows GitHub 404**
- **Cause**: Wrong build configuration
- **Solution**: Verify GitHub Actions used `custom-domain` build

### **DNS Propagation Check**
Use these tools to check DNS propagation:
- `https://dnschecker.org`
- `https://whatsmydns.net`
- Enter `reniboediarti.com` and check A records

## 📋 **Verification Checklist**

- [ ] GitHub Pages custom domain configured
- [ ] HTTPS enforced in GitHub settings
- [ ] DNS A records added in GoDaddy (4 records)
- [ ] CNAME record added for www subdomain
- [ ] Old conflicting DNS records removed
- [ ] Changes committed and pushed to GitHub
- [ ] Deployment workflow completed successfully
- [ ] Site accessible at `https://reniboediarti.com`
- [ ] Site accessible at `https://www.reniboediarti.com`
- [ ] SSL certificate shows as valid

## 🚀 **Benefits of Custom Domain**

### **Professional Benefits**
- ✅ **Brand Recognition**: Professional domain name
- ✅ **SEO Benefits**: Better search engine ranking
- ✅ **Trust Building**: Custom domain builds credibility
- ✅ **Email Integration**: Can set up professional email later

### **Technical Benefits**
- ✅ **SSL Certificate**: Free HTTPS from GitHub
- ✅ **CDN**: Fast global content delivery
- ✅ **Reliability**: GitHub's infrastructure
- ✅ **Analytics**: Can integrate Google Analytics

## 📞 **Support Resources**

### **GitHub Pages Documentation**
- `https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site`

### **GoDaddy DNS Help**
- `https://www.godaddy.com/help/manage-dns-records-680`

### **DNS Propagation Tools**
- `https://dnschecker.org`
- `https://whatsmydns.net`

## 🎯 **Next Steps After Setup**

1. **Set up Google Analytics** (optional)
2. **Configure professional email** (optional)
3. **Set up SSL monitoring** (optional)
4. **Update any hardcoded URLs** in your code
5. **Test all functionality** on the new domain

Your professional portfolio will be live at `https://reniboediarti.com` once DNS propagation is complete!
