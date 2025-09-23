# DNS Settings Reference - GoDaddy Configuration

## 🎯 **Quick Reference for GoDaddy DNS Setup**

### **Domain**: `reniboediarti.com`
### **GitHub Repository**: `leo3852/reniboediarti`

---

## 📋 **DNS Records to Add in GoDaddy**

### **A Records** (4 records needed)
```
Record 1:
Type: A
Name: @
Value: 185.199.108.153
TTL: 600

Record 2:
Type: A
Name: @
Value: 185.199.109.153
TTL: 600

Record 3:
Type: A
Name: @
Value: 185.199.110.153
TTL: 600

Record 4:
Type: A
Name: @
Value: 185.199.111.153
TTL: 600
```

### **CNAME Record** (1 record needed)
```
Type: CNAME
Name: www
Value: leo3852.github.io
TTL: 600
```

---

## 🚫 **Records to Remove/Delete**

- Any existing A records pointing to GoDaddy's parking page
- Any conflicting CNAME records
- Any MX records (unless you need email)

---

## ✅ **GitHub Pages Settings**

### **Custom Domain**: `reniboediarti.com`
### **Enforce HTTPS**: ✅ Enabled
### **Source**: Deploy from a branch
### **Branch**: `main` / `root`

---

## 🔍 **Verification URLs**

After setup, these URLs should work:
- `https://reniboediarti.com` ✅
- `https://www.reniboediarti.com` ✅
- `http://reniboediarti.com` (redirects to HTTPS) ✅

---

## ⏱️ **Expected Timeline**

- **Immediate**: GitHub Pages configuration
- **5-30 minutes**: DNS propagation begins
- **24-48 hours**: Full global propagation

---

## 🛠️ **Troubleshooting Commands**

### **Check DNS Propagation**
```bash
# Check A records
nslookup reniboediarti.com

# Check CNAME record
nslookup www.reniboediarti.com
```

### **Online DNS Checkers**
- `https://dnschecker.org`
- `https://whatsmydns.net`
- `https://dns.google`

---

## 📞 **Support Contacts**

### **GitHub Pages Issues**
- GitHub Documentation: `https://docs.github.com/en/pages`
- GitHub Support: Through repository issues

### **GoDaddy DNS Issues**
- GoDaddy Help: `https://www.godaddy.com/help`
- GoDaddy Support: 1-480-505-8877

---

## 🎯 **Success Indicators**

✅ **GitHub Pages shows green checkmark**
✅ **Custom domain shows as "Verified"**
✅ **HTTPS certificate is active**
✅ **Site loads at reniboediarti.com**
✅ **No SSL warnings in browser**

---

## 🔄 **Rollback Plan**

If something goes wrong:
1. Remove custom domain from GitHub Pages
2. Revert to GitHub Pages URL temporarily
3. Fix DNS issues in GoDaddy
4. Re-enable custom domain

**Temporary GitHub Pages URL**: `https://leo3852.github.io/reniboediarti/`
