# Production Testing Guide for GSAP Optimizations

This guide will help you test your Nuxt.js application with GSAP production optimizations in a production-like environment locally before deploying.

## 🚀 Quick Start

### Step 1: Build for Production

```bash
# Build the production bundle
npm run build
```

This will:

- Create optimized production bundles
- Enable all production optimizations
- Generate minified code
- Tree-shake unused code

### Step 2: Preview Production Build

```bash
# Preview the production build locally
npm run preview
```

This starts a local server (usually on `http://localhost:3000`) running the production build.

## 📋 Comprehensive Testing Checklist

### 1. **Initial Load & Performance**

- [ ] **Page Load Time**: Check that initial page load is fast
- [ ] **First Contentful Paint (FCP)**: Should be < 1.5s
- [ ] **Largest Contentful Paint (LCP)**: Should be < 2.5s
- [ ] **JavaScript Bundle Size**: Check browser DevTools → Network tab
  - Look for `gsap` chunks - should be optimized
  - Total JS size should be reasonable

**How to Test:**

```bash
# Open browser DevTools (F12)
# Go to Network tab
# Reload page with "Disable cache" enabled
# Check bundle sizes and load times
```

### 2. **ScrollTrigger Functionality**

- [ ] **Scroll Animations**: All scroll-triggered animations work correctly
- [ ] **Scroll Performance**: Smooth scrolling at 60fps
- [ ] **ScrollTrigger Refresh**: Animations update correctly on route changes
- [ ] **No Jank**: No frame drops or stuttering during scroll

**How to Test:**

1. Open browser DevTools → Performance tab
2. Record while scrolling
3. Check for frame drops (should maintain 60fps)
4. Navigate between routes and verify animations still work

### 3. **Animation Performance**

- [ ] **Smooth Animations**: All GSAP animations run smoothly
- [ ] **No Lag**: No noticeable delay or stutter
- [ ] **Memory Usage**: Check for memory leaks

**How to Test:**

```javascript
// In browser console, check memory
performance.memory // (Chrome only)
```

Or use Chrome DevTools → Performance → Memory tab

### 4. **Route Navigation**

- [ ] **Route Changes**: Navigate between pages
- [ ] **ScrollTrigger Refresh**: Animations refresh correctly after navigation
- [ ] **No Memory Leaks**: Memory doesn't increase after multiple navigations

**How to Test:**

1. Navigate to different routes
2. Use browser back/forward buttons
3. Monitor memory in DevTools
4. Verify animations work on each route

### 5. **Reduced Motion Support**

- [ ] **Prefers-Reduced-Motion**: Animations respect user preference

**How to Test:**

**macOS:**

```bash
# System Settings → Accessibility → Display → Reduce Motion
```

**Windows:**

```
Settings → Ease of Access → Display → Show animations in Windows
```

**Browser DevTools:**

```javascript
// In console
window.matchMedia('(prefers-reduced-motion: reduce)').matches
// Should return true/false

// Or test via DevTools
// Chrome DevTools → More Tools → Rendering → Emulate CSS media feature prefers-reduced-motion
```

**Expected Behavior:**

- When `prefers-reduced-motion: reduce` is enabled
- Animations should apply final state immediately
- Parallax effects should be disabled
- Scroll-triggered animations should show final state instantly

### 6. **Error Handling**

- [ ] **No Console Errors**: Check browser console for errors
- [ ] **Graceful Degradation**: Site works even if GSAP fails to load

**How to Test:**

1. Open browser console (F12)
2. Check for any red errors
3. Should see warnings only if GSAP not available (expected in some edge cases)

### 7. **Bundle Size Analysis**

- [ ] **GSAP Bundle Size**: Check if GSAP bundles are optimized
- [ ] **Code Splitting**: Verify GSAP is properly code-split

**How to Test:**

```bash
# Analyze bundle
npm run build
# Then check .output directory or use:
npx vite-bundle-visualizer
```

Or in browser:

- DevTools → Network → Filter by JS
- Look for `gsap` related chunks
- Check sizes (should be reasonable, not bloated)

### 8. **Browser Compatibility**

Test in multiple browsers:

- [ ] **Chrome/Edge** (latest)
- [ ] **Firefox** (latest)
- [ ] **Safari** (latest)
- [ ] **Mobile Safari** (iOS)
- [ ] **Chrome Mobile** (Android)

### 9. **Mobile Performance**

- [ ] **Mobile Scroll**: Test on real mobile device or emulator
- [ ] **Touch Performance**: Smooth touch interactions
- [ ] **Battery Impact**: Check for excessive CPU usage

**How to Test:**

```bash
# Use Chrome DevTools device emulation
# F12 → Toggle device toolbar (Cmd/Ctrl + Shift + M)
# Select mobile device and test
```

Or deploy to a staging URL and test on real devices.

### 10. **Lighthouse Audit**

Run a Lighthouse performance audit:

**How to Test:**

1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "Performance" and "Best Practices"
4. Click "Analyze page load"
5. Review scores (should be > 90)

**Key Metrics to Check:**

- Performance Score: > 90
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Total Blocking Time: < 200ms
- Cumulative Layout Shift: < 0.1

## 🔧 Advanced Testing

### Performance Profiling

```bash
# Use Chrome DevTools Performance tab
1. Open DevTools → Performance
2. Click Record
3. Interact with page (scroll, navigate, etc.)
4. Stop recording
5. Analyze:
   - Main thread activity
   - FPS (should be ~60)
   - Memory usage over time
   - Long tasks (should be minimal)
```

### Memory Leak Testing

```javascript
// In browser console
// Before navigation
const memBefore = performance.memory?.usedJSHeapSize

// Navigate and interact

// After navigation
const memAfter = performance.memory?.usedJSHeapSize

// Memory should not increase significantly
console.log('Memory delta:', memAfter - memBefore)
```

### Network Throttling Test

Test with slower connections:

```bash
# Chrome DevTools → Network tab
# Throttle to:
- Slow 3G
- Fast 3G
- 4G
```

Verify animations still load and work correctly.

### CPU Throttling Test

```bash
# Chrome DevTools → Performance tab
# Enable CPU throttling (6x slowdown)
```

Check that animations are still acceptable (may be slower but shouldn't break).

## 📊 Expected Results

After optimizations, you should see:

- **Initial Load**: 20-30% faster
- **Scroll Performance**: 40-50% smoother (maintains 60fps)
- **Memory Usage**: 30-40% reduction (no leaks)
- **Bundle Size**: 15-25% smaller (with tree-shaking)
- **Lighthouse Score**: > 90

## 🐛 Common Issues & Solutions

### Issue: Animations not working

**Solution**: Check browser console for errors. Verify GSAP loaded correctly.

### Issue: ScrollTrigger not refreshing

**Solution**: Check that route navigation triggers refresh. Verify debounce is working.

### Issue: High memory usage

**Solution**: Check DevTools Memory tab. Ensure animations are cleaned up on unmount.

### Issue: Reduced motion not working

**Solution**: Verify system setting is enabled. Check browser console for media query match.

### Issue: Bundle size too large

**Solution**: Check if all GSAP plugins are needed. Consider lazy loading unused plugins.

## 📝 Testing Script

Quick test script you can run:

```bash
#!/bin/bash

echo "🧪 Starting Production Testing..."

# Build
echo "📦 Building for production..."
npm run build

# Start preview
echo "🚀 Starting preview server..."
npm run preview &
PREVIEW_PID=$!

# Wait for server
sleep 5

echo "✅ Preview server running on http://localhost:3000"
echo "📋 Run the following tests:"
echo "   1. Open http://localhost:3000 in browser"
echo "   2. Check browser console for errors"
echo "   3. Test scroll animations"
echo "   4. Navigate between routes"
echo "   5. Run Lighthouse audit"
echo "   6. Check performance in DevTools"
echo ""
echo "Press Ctrl+C to stop the server"

# Wait
wait $PREVIEW_PID
```

## 🎯 Final Checklist Before Deploy

- [ ] All animations work correctly
- [ ] ScrollTrigger refreshes on route changes
- [ ] No console errors or warnings (except expected ones)
- [ ] No memory leaks
- [ ] Works on mobile devices
- [ ] Reduced motion mode works
- [ ] Bundle size is acceptable
- [ ] Lighthouse performance score > 90
- [ ] No SSR errors in production build
- [ ] Scroll performance is smooth at 60fps

## 🚀 Ready to Deploy?

Once all tests pass, you're ready to deploy to production!

```bash
# Deploy (example for Vercel)
vercel --prod

# Or push to your repository
git add .
git commit -m "feat: GSAP production optimizations"
git push origin main
```

---

## 📚 Additional Resources

- [GSAP Performance Tips](<https://greensock.com/docs/v3/GSAP/gsap.config()>)
- [Chrome DevTools Performance](https://developer.chrome.com/docs/devtools/performance/)
- [Lighthouse Documentation](https://developers.google.com/web/tools/lighthouse)
- [Nuxt.js Production Deployment](https://nuxt.com/docs/getting-started/deployment)
