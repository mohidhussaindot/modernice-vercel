# GSAP Configuration Guide for Nuxt.js

## Overview

This project uses GSAP (GreenSock Animation Platform) with optimized configuration for smooth animations in a Nuxt.js environment.

## Configuration Files

### 1. Plugin Configuration (`/plugins/gsap.client.ts`)

- **Client-side only**: Prevents SSR issues
- **Centralized plugin registration**: All GSAP plugins registered in one place
- **Performance optimizations**: Global settings for better performance
- **Auto-refresh**: ScrollTrigger refreshes on route changes

### 2. Composable (`/composables/useGSAP.ts`)

- **Automatic cleanup**: Animations are cleaned up on component unmount
- **Reusable patterns**: Common animation functions
- **Type safety**: Full TypeScript support

### 3. Nuxt Configuration (`/nuxt.config.ts`)

- **Vite optimization**: GSAP plugins included in optimizeDeps
- **Build transpilation**: GSAP properly transpiled for production

## Best Practices

### ✅ DO:

1. **Use the composable**: Always use `useGSAP()` instead of direct imports
2. **Cleanup animations**: The composable handles cleanup automatically
3. **Use global defaults**: Leverage the global ease and duration settings
4. **Batch animations**: Use `batchAnimate()` for multiple elements
5. **ScrollTrigger refresh**: Automatically handled on route changes

### ❌ DON'T:

1. **Direct GSAP imports**: Don't import GSAP directly in components
2. **Manual plugin registration**: Don't register plugins in components
3. **Forget cleanup**: Don't leave animations running after unmount
4. **Heavy animations on mobile**: Use `ScrollTrigger.config({ ignoreMobileResize: true })`

## Usage Examples

### Basic Animation

```vue
<script setup>
import { useGSAP } from "~/composables/useGSAP";

const { gsap, createAnimation } = useGSAP();

onMounted(() => {
  createAnimation(() => {
    return gsap.to(".my-element", {
      x: 100,
      duration: 1,
      ease: "power2.out",
    });
  });
});
</script>
```

### ScrollTrigger Animation

```vue
<script setup>
import { useGSAPAnimations } from "~/composables/useGSAP";

const { fadeIn, onScroll } = useGSAPAnimations();

onMounted(() => {
  // Fade in on scroll
  onScroll(".my-element", {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
  });
});
</script>
```

### Batch Animations

```vue
<script setup>
import { useGSAP } from "~/composables/useGSAP";

const { batchAnimate } = useGSAP();

onMounted(() => {
  const elements = document.querySelectorAll(".stagger-item");
  batchAnimate(elements, {
    opacity: 1,
    y: 0,
    stagger: 0.1,
  });
});
</script>
```

## Performance Optimizations

### 1. Global Settings

- **Default ease**: `power2.out` for smooth animations
- **Default duration**: `0.6s` for quick, responsive feel
- **Null target warnings**: Disabled to reduce console noise

### 2. ScrollTrigger Optimizations

- **Mobile resize**: Ignored for better mobile performance
- **Auto refresh**: Handles visibility changes and DOM updates
- **Route changes**: Automatically refreshes on navigation

### 3. Vite Optimizations

- **Pre-bundling**: GSAP plugins included in optimizeDeps
- **Tree shaking**: Only used plugins are included in build

## Common Animation Patterns

### 1. Fade In

```javascript
const { fadeIn } = useGSAPAnimations();
fadeIn(".element", { duration: 0.8 });
```

### 2. Slide In

```javascript
const { slideInLeft, slideInRight } = useGSAPAnimations();
slideInLeft(".element", { duration: 1 });
```

### 3. Scale In

```javascript
const { scaleIn } = useGSAPAnimations();
scaleIn(".element", { duration: 0.6 });
```

### 4. Parallax

```javascript
const { parallax } = useGSAPAnimations();
parallax(".element", 0.5); // 50% parallax speed
```

## Troubleshooting

### Common Issues:

1. **Animations not working**: Check if component is client-side only
2. **ScrollTrigger not refreshing**: Ensure route changes trigger refresh
3. **Performance issues**: Use `will-change` CSS property for animated elements
4. **Memory leaks**: Always use the composable for automatic cleanup

### Debug Mode:

```javascript
// Enable ScrollTrigger markers for debugging
ScrollTrigger.config({
  markers: true,
});
```

## Migration Guide

### From Direct Imports:

```javascript
// ❌ Old way
import gsap from "gsap";
gsap.to(".element", { x: 100 });

// ✅ New way
const { gsap, createAnimation } = useGSAP();
createAnimation(() => gsap.to(".element", { x: 100 }));
```

### From Manual Plugin Registration:

```javascript
// ❌ Old way
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// ✅ New way - handled automatically by plugin
const { ScrollTrigger } = useGSAP();
```

## Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [Vue.js Animation Guide](https://vuejs.org/guide/extras/animation.html)
- [Nuxt.js Plugins](https://nuxt.com/docs/guide/directory-structure/plugins)
