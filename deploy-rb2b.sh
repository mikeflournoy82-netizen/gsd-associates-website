#!/bin/bash

# Deployment script for GSD Associates with Rb2B integration
# This script deploys the latest changes to Cloudflare Pages

echo "🚀 Deploying GSD Associates website with Rb2B script..."
echo ""

# Step 1: Build the project
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"
echo ""

# Step 2: Deploy to Cloudflare Pages
echo "☁️  Deploying to Cloudflare Pages..."
echo ""
echo "Please run the following command manually:"
echo ""
echo "npx wrangler pages deploy dist --project-name gsd-associates"
echo ""
echo "Or deploy via Cloudflare Dashboard:"
echo "1. Go to https://dash.cloudflare.com"
echo "2. Navigate to Workers & Pages > gsd-associates"
echo "3. Click 'Create deployment'"
echo "4. Upload the 'dist' folder"
echo ""
echo "✅ Code is ready to deploy!"
echo ""
echo "📍 Your changes include:"
echo "   - Rb2B identification script (Key: GNLKQHPL136Q)"
echo "   - Script is loaded in the <head> section"
echo "   - Will track B2B visitors on your site"
