#!/bin/bash

# Production Build Test Script
# This script builds and previews your production build locally

set -e

echo "🧪 GSAP Production Build Test"
echo "================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf .output
rm -rf .nuxt
echo -e "${GREEN}✅ Cleaned${NC}"
echo ""

# Step 2: Build for production
echo "📦 Building for production..."
echo "   This may take a few minutes..."
npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Build successful!${NC}"
    echo ""
    
    # Show build info
    if [ -d ".output/public/_nuxt" ]; then
        echo "📊 Bundle Size Info:"
        echo "   GSAP related bundles:"
        ls -lh .output/public/_nuxt/*.js 2>/dev/null | grep -i gsap | awk '{print "   - " $9 " (" $5 ")"}' || echo "   - No GSAP-specific chunks found"
        echo ""
    fi
    
    # Step 3: Start preview
    echo "🚀 Starting preview server..."
    echo ""
    echo -e "${YELLOW}================================${NC}"
    echo -e "${GREEN}✅ Preview server starting!${NC}"
    echo -e "${YELLOW}================================${NC}"
    echo ""
    echo "📍 Open your browser at: http://localhost:3000"
    echo ""
    echo "📋 Testing Checklist:"
    echo "   ☐ Open browser DevTools (F12)"
    echo "   ☐ Check Console for errors"
    echo "   ☐ Test scroll animations"
    echo "   ☐ Navigate between routes"
    echo "   ☐ Check Performance tab (60fps)"
    echo "   ☐ Run Lighthouse audit"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    
    npm run preview
else
    echo -e "${RED}❌ Build failed!${NC}"
    exit 1
fi

