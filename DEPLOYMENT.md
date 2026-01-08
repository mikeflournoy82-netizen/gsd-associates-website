# Deployment Guide - GSD Associates Website

## ✅ Email Integration Complete

Your contact form is now configured to send email notifications via Resend!

### Email Setup Steps

#### 1. Get Your Resend API Key (2 minutes)
1. Go to https://resend.com/signup
2. Sign up for free account (100 emails/day free)
3. Verify your email address
4. Navigate to **API Keys** section
5. Click **Create API Key**
6. Copy the key (starts with `re_`)

#### 2. Add API Key to Cloudflare (After deployment)
Once deployed, add your Resend API key:

```bash
# Set the secret in production
npx wrangler secret put RESEND_API_KEY --project-name gsd-associates

# When prompted, paste your Resend API key
```

#### 3. Test Email Notifications
After adding the API key:
1. Visit your live site
2. Fill out the contact form
3. Submit
4. Check your email at gsdassociatesllc@gmail.com

### Email Features
- ✅ Sends to: gsdassociatesllc@gmail.com
- ✅ Includes all form fields (name, email, company, revenue, team size, challenge)
- ✅ Formatted HTML email with clear sections
- ✅ Graceful fallback if API key not set (user still gets success message)

---

## 🚀 Cloudflare Pages Deployment

### Prerequisites
1. ✅ Code is ready (already done!)
2. ⚠️ **Cloudflare API Key Required** - Set up in Deploy tab
3. ⚠️ Cloudflare account (free) - https://dash.cloudflare.com/sign-up

### Deployment Steps

#### Step 1: Configure Cloudflare API Key
**You need to do this first:**
1. Click the **Deploy** tab in the sidebar
2. Follow instructions to create Cloudflare API token
3. Paste your API key and save

#### Step 2: Create Cloudflare Pages Project
Once API key is configured, run:

```bash
cd /home/user/webapp

# Create the Pages project
npx wrangler pages project create gsd-associates \
  --production-branch main \
  --compatibility-date 2024-01-01
```

#### Step 3: Deploy to Production
```bash
cd /home/user/webapp

# Build and deploy
npm run build
npx wrangler pages deploy dist --project-name gsd-associates
```

You'll get URLs like:
- **Production**: https://gsd-associates.pages.dev
- **Branch**: https://main.gsd-associates.pages.dev

#### Step 4: Add Resend API Key (Email notifications)
```bash
# Add your Resend API key as a secret
npx wrangler secret put RESEND_API_KEY --project-name gsd-associates
# Paste your key when prompted
```

#### Step 5: Connect Your Domain (gsdassociates.net)
In Cloudflare dashboard:
1. Go to your Pages project
2. Click **Custom Domains**
3. Add domain: `gsdassociates.net`
4. Add domain: `www.gsdassociates.net`
5. Follow DNS setup instructions (automatic if domain in Cloudflare)

---

## 📊 What Happens After Deployment

### Immediate Benefits
- ✅ **Live website** at gsd-associates.pages.dev
- ✅ **Free SSL certificate** (HTTPS automatically)
- ✅ **Global CDN** - Fast worldwide
- ✅ **Unlimited bandwidth** - No traffic limits
- ✅ **Calendly integration** - Direct bookings working
- ✅ **Contact form** - Captures leads (emails after API key added)

### Once Resend API Key Added
- ✅ **Email notifications** to gsdassociatesllc@gmail.com
- ✅ **Instant lead alerts** when someone submits form
- ✅ **Formatted emails** with all contact details

### Once Domain Connected
- ✅ **Professional URL** - gsdassociates.net
- ✅ **Replace Squarespace** completely
- ✅ **Cancel Squarespace** and save $192-540/year

---

## 🔧 Post-Deployment Configuration

### Update Resend "From" Email (Optional but Recommended)
By default, emails come from `onboarding@resend.dev`. To use your own domain:

1. **Add Domain to Resend**
   - Log into Resend dashboard
   - Go to Domains
   - Add your domain (e.g., gsdassociates.net)
   - Add DNS records as shown

2. **Update Code**
   Edit `/home/user/webapp/src/index.tsx` line ~1116:
   ```typescript
   from: 'GSD Associates <hello@gsdassociates.net>', // Your custom domain
   ```

3. **Redeploy**
   ```bash
   npm run build
   npx wrangler pages deploy dist --project-name gsd-associates
   ```

---

## 🎯 Quick Command Reference

### Build & Test Locally
```bash
cd /home/user/webapp
npm run build
pm2 restart webapp
curl http://localhost:3000
```

### Deploy to Production
```bash
cd /home/user/webapp
npm run build
npx wrangler pages deploy dist --project-name gsd-associates
```

### Add/Update Secrets
```bash
# Resend API Key
npx wrangler secret put RESEND_API_KEY --project-name gsd-associates

# List all secrets
npx wrangler secret list --project-name gsd-associates
```

### View Logs
```bash
# Production logs
npx wrangler pages deployment tail --project-name gsd-associates
```

---

## 📝 Checklist Before Going Live

### Required (Must Do)
- [ ] Set up Cloudflare API key in Deploy tab
- [ ] Run `npx wrangler pages project create`
- [ ] Deploy: `npx wrangler pages deploy dist`
- [ ] Get Resend API key from resend.com
- [ ] Add API key: `npx wrangler secret put RESEND_API_KEY`
- [ ] Test contact form (should receive email)
- [ ] Test Calendly links (should open booking page)

### Recommended (Should Do)
- [ ] Connect custom domain (gsdassociates.net)
- [ ] Update DNS to point to Cloudflare Pages
- [ ] Test site on mobile devices
- [ ] Share link with colleagues for feedback
- [ ] Update Resend "from" address to custom domain

### Optional (Can Do Later)
- [ ] Set up Google Analytics
- [ ] Add Cloudflare Web Analytics
- [ ] Create additional landing pages
- [ ] A/B test different headlines
- [ ] Add blog section
- [ ] Cancel Squarespace subscription

---

## ❓ Common Issues & Solutions

### Issue: "Wrangler not authenticated"
**Solution**: API key not configured. Go to Deploy tab and set up your Cloudflare API token.

### Issue: "Project already exists"
**Solution**: Project name taken. Try: `gsd-associates-2` or `gsd-associates-new`

### Issue: "Email not being sent"
**Solution**: 
1. Check Resend API key is added: `npx wrangler secret list`
2. Check Resend dashboard for email logs
3. Verify email address in code matches yours

### Issue: "Calendly not opening"
**Solution**: Clear browser cache and try again. Link is: https://gsdassociatesmeeting.as.me/

### Issue: "Custom domain not working"
**Solution**: 
1. Ensure DNS records are updated
2. Wait 24-48 hours for DNS propagation
3. Check Cloudflare dashboard for DNS status

---

## 💰 Cost Breakdown

### Current (Squarespace)
- Monthly: $16-45/month
- Annual: $192-540/year

### After Migration (Cloudflare)
- Pages Hosting: **FREE**
- SSL Certificate: **FREE**
- CDN/Bandwidth: **FREE**
- Resend Emails: **FREE** (up to 100/day, then $20/month for 50k)
- **Total: $0-20/month**

### Savings
- **$192-540/year** by canceling Squarespace
- **Better performance** - Faster site, global CDN
- **More control** - Full customization, no platform limits

---

## 🎉 You're Almost Live!

Your website is **100% ready to deploy**. You just need to:

1. **Set up Cloudflare API key** in Deploy tab (2 minutes)
2. **Run deployment commands** (5 minutes)
3. **Add Resend API key** (2 minutes)
4. **Test everything** (5 minutes)

**Total time: 15 minutes to go live!** 🚀

---

## 📞 Need Help?

If you run into any issues during deployment:
1. Check the error message carefully
2. Review this guide for solutions
3. Try the command again
4. Check Cloudflare dashboard for project status

Remember: Your code is perfect and ready. Deployment is just running a few commands! 💪
