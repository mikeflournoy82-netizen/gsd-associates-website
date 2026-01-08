# URGENT: Connect gsdassociates.net to Cloudflare Pages

## Current Status
- ✅ Website is live at: https://gsd-associates.pages.dev
- ❌ gsdassociates.net shows "expired" (Squarespace cancelled)
- 🔄 Need to connect custom domain

## STEP-BY-STEP INSTRUCTIONS

### Step 1: Add Domain to Cloudflare (DO THIS NOW - 3 minutes)

1. Go to: https://dash.cloudflare.com
2. Log in with: gsdassociatesllc@gmail.com
3. Click **"Add a site"** button
4. Enter: `gsdassociates.net`
5. Click **"Continue"**
6. Select **"Free"** plan
7. Click **"Continue"**
8. Cloudflare will scan DNS (might find nothing - that's OK)
9. Click **"Continue"** 
10. You'll see TWO nameservers like:
    ```
    nameserver1.ns.cloudflare.com
    nameserver2.ns.cloudflare.com
    ```
11. **COPY THESE DOWN** or leave this tab open

### Step 2: Find Your Domain Registrar

Check these places:

**A) Squarespace Domains**
- Go to: https://account.squarespace.com/domains
- Log in with your Squarespace account
- Look for gsdassociates.net
- Even if you cancelled the website, domain should still be there

**B) Check Your Email**
- Search email for: "gsdassociates.net"
- Look for domain registration or renewal emails
- Common senders: GoDaddy, Namecheap, Google, Hover, Squarespace

**C) WHOIS Lookup**
- Go to: https://lookup.icann.org/en/lookup
- Enter: gsdassociates.net
- Look at "Registrar" field
- This tells you who manages the domain

### Step 3: Update Nameservers at Registrar

Once you find the registrar:

**For Squarespace Domains:**
1. Go to https://account.squarespace.com/domains
2. Click on gsdassociates.net
3. Click "Advanced Settings" or "DNS Settings"
4. Find "Nameservers" section
5. Click "Use custom nameservers"
6. Enter the Cloudflare nameservers from Step 1
7. Save changes

**For GoDaddy:**
1. Log into GoDaddy
2. Go to "My Products" → "Domains"
3. Click gsdassociates.net
4. Scroll to "Nameservers"
5. Click "Change"
6. Select "I'll use my own nameservers"
7. Enter Cloudflare nameservers
8. Save

**For Namecheap:**
1. Log into Namecheap
2. Go to Domain List
3. Click "Manage" next to gsdassociates.net
4. Find "Nameservers" section
5. Select "Custom DNS"
6. Enter Cloudflare nameservers
7. Save

**For Other Registrars:**
- Look for "DNS Settings" or "Nameservers"
- Change from registrar's nameservers to Cloudflare's
- Save

### Step 4: Connect to Pages Project (After nameservers update)

In Cloudflare Dashboard:

1. Go to https://dash.cloudflare.com
2. Click "Websites" → select gsdassociates.net
3. Wait for status to show "Active" (can take 5 mins - 48 hours)
4. Once active, go to "DNS" → "Records"
5. Click "Add record"
6. Add these records:

**Record 1:**
```
Type: CNAME
Name: @
Target: gsd-associates.pages.dev
Proxy status: Proxied (orange cloud icon)
TTL: Auto
```

**Record 2:**
```
Type: CNAME
Name: www
Target: gsd-associates.pages.dev
Proxy status: Proxied (orange cloud icon)
TTL: Auto
```

7. Click "Save" for each

### Step 5: Connect to Pages Project

1. Click "Workers & Pages" (left sidebar)
2. Click "gsd-associates" project
3. Go to "Custom domains" tab
4. Click "Set up a custom domain"
5. Enter: `gsdassociates.net`
6. Click "Continue"
7. Cloudflare will automatically configure
8. Repeat for `www.gsdassociates.net`

## Timeline

- Nameserver update: 5 minutes - 48 hours (usually 1-2 hours)
- DNS records: Instant once nameservers active
- SSL certificate: Automatic (5-15 minutes)

## Testing

Check if it's working:
```
https://gsdassociates.net
https://www.gsdassociates.net
```

Both should show your new website!

## If You're Stuck

1. Check email for domain registration confirmation
2. Try logging into common registrars:
   - https://sso.godaddy.com
   - https://www.namecheap.com/myaccount/login
   - https://domains.google.com
   - https://account.squarespace.com/domains

3. Use ICANN lookup: https://lookup.icann.org/en/lookup

## Need Help?

Tell me:
1. Did you find the registrar?
2. Can you access the account?
3. Do you see nameserver options?

I'll guide you through the exact steps!
