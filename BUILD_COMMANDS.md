# 🚀 Production Build Commands

Quick reference for building and testing your production build locally.

## 📦 Standard Build Process

### Step 1: Build for Production

```bash
npm run build
```

This creates an optimized production build in `.output/` directory with:

- Minified code
- Tree-shaking
- Code splitting
- Production optimizations

### Step 2: Preview Production Build

```bash
npm run preview
```

Starts a local server (usually `http://localhost:3000`) serving the production build.

---

## ⚡ Quick Commands

### Build and Preview (One Command)

```bash
npm run build && npm run preview
```

### Using the Test Script

```bash
# Make sure script is executable
chmod +x scripts/test-prod.sh

# Run the test script
./scripts/test-prod.sh
```

Or if using npm:

```bash
npm run test:prod
```

_(Add to package.json scripts if needed)_

---

## 🔍 Build Analysis

### Check Bundle Sizes

```bash
# After building, check GSAP bundle sizes
ls -lh .output/public/_nuxt/*.js | grep -i gsap

# Or see all chunks
du -sh .output/public/_nuxt/*.js | sort -h
```

### Analyze Build Output

```bash
# View build output directory
ls -la .output/public/

# Check server bundle
ls -la .output/server/
```

---

## 🧹 Clean Build

### Clean Previous Build

```bash
# Remove build artifacts
rm -rf .output
rm -rf .nuxt

# Then rebuild
npm run build
```

### Full Clean (including node_modules)

```bash
rm -rf .output .nuxt node_modules
npm install
npm run build
```

---

## 📊 Production Environment Variables

### Build with Specific Environment

```bash
# Development
NODE_ENV=development npm run build

# Production (default)
NODE_ENV=production npm run build
```

---

## 🎯 Common Build Commands

| Command            | Description                   |
| ------------------ | ----------------------------- |
| `npm run build`    | Build for production          |
| `npm run preview`  | Preview production build      |
| `npm run dev`      | Development mode (hot reload) |
| `npm run generate` | Generate static site (SSG)    |

---

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .nuxt .output node_modules/.cache
npm run build
```

### Preview Not Starting

```bash
# Check if port 3000 is in use
lsof -ti:3000

# Kill process if needed
kill -9 $(lsof -ti:3000)

# Then preview again
npm run preview
```

### Check Build Logs

```bash
# Build with verbose output
npm run build -- --verbose

# Or check for specific errors
npm run build 2>&1 | tee build.log
```

---

## ✅ Pre-Deployment Checklist

Before deploying, ensure:

- [ ] `npm run build` completes without errors
- [ ] `npm run preview` starts successfully
- [ ] Site loads at `http://localhost:3000`
- [ ] No console errors in browser
- [ ] All animations work correctly
- [ ] ScrollTrigger refreshes on navigation
- [ ] Bundle sizes are reasonable

---

## 🚀 Deploy to Production

### Vercel (Recommended)

```bash
# Install Vercel CLI if not installed
npm i -g vercel

# Deploy
vercel --prod
```

### Manual Deployment

```bash
# Build
npm run build

# Output directory for static hosting
.output/public/

# For Node.js hosting
.output/server/
```

---

## 📚 Additional Resources

- [Nuxt Build Documentation](https://nuxt.com/docs/getting-started/deployment)
- [Production Testing Guide](./docs/PRODUCTION_TESTING_GUIDE.md)
- [GSAP Setup Guide](./docs/GSAP_SETUP.md)
