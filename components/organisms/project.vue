<template>
  <div>
    <!-- New Navbar -->
    <header
      class="fixed top-0 left-0 w-full z-[9999] bg-black/20 backdrop-blur-sm"
      @mouseenter="isNavbarHovered = true"
      @mouseleave="isNavbarHovered = false"
    >
      <div class="max-w-[90rem] mx-auto flex items-center justify-between h-16 px-6 relative">
        <!-- Left Links -->
        <div class="flex items-center gap-6">
          <!-- Services Dropdown -->
          <div class="relative" @mouseenter="openDropdown" @mouseleave="closeDropdown">
            <button class="text-white font-semibold hover:underline">Services</button>
            <div
              v-show="dropdownOpen"
              class="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-50"
            >
              <a
                v-for="service in services"
                :key="service.to"
                :href="service.to"
                class="block px-4 py-2 text-black hover:bg-gray-100"
              >
                {{ service.label }}
              </a>
            </div>
          </div>
          <a href="/about" class="text-white font-semibold hover:underline">About</a>
          <a href="/blog" class="text-white font-semibold hover:underline">Blog</a>
        </div>

        <!-- Center Logo -->
        <div
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl cursor-pointer"
        >
          <a href="/">Modernice.Design</a>
        </div>

        <!-- Right Links / Icons -->
        <div class="flex items-center gap-4">
          <a
            href="/contact"
            class="px-4 py-2 rounded-lg bg-white/20 text-white font-semibold hover:bg-white/30"
          >
            Contact
          </a>
          <nuxt-icon name="globe" class="w-6 h-6 text-white" />
        </div>
      </div>
    </header>

    <!-- Canvas Background -->
    <div class="custom-scrollbar"></div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as THREE from 'three'
import gsap from 'gsap'

// Dropdown
const dropdownOpen = ref(false)
const services = [
  { label: 'App Development', to: '/services/appdevelopment' },
  { label: 'AI Consulting', to: '/services/aiconsulting' },
  { label: 'E-commerce', to: '/services/ecs' },
  { label: 'Website Strategy', to: '/services/website-strategy' },
  { label: 'SEO', to: '/services/seo' },
]
let dropdownTimeout = null

const openDropdown = () => {
  clearTimeout(dropdownTimeout)
  dropdownOpen.value = true
}

const closeDropdown = () => {
  dropdownTimeout = setTimeout(() => {
    dropdownOpen.value = false
  }, 150) // adjust delay as needed
}

// Track if navbar is hovered
const isNavbarHovered = ref(false)

// Canvas
const canvas = ref(null)

onMounted(() => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    30,
    window.innerWidth / window.innerHeight,
    0.1,
    10000
  )
  camera.position.set(850, 830, 3200)
  camera.lookAt(-100, -100, 1550)

  const renderer = new THREE.WebGLRenderer({ canvas: canvas.value, antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)

  const group = new THREE.Group()
  const textureLoader = new THREE.TextureLoader()
  const spacingZ = 200

  const imageLinks = [
    { name: 'adobelino.png', url: 'https://adobelino.com' },
    { name: 'crovillas.png', url: 'https://crovillas.com/' },
    { name: 'cube.expert.png', url: 'https://cubee.expert/en' },
    { name: 'depositdirect.png', url: 'https://depositdirect.net' },
    { name: 'epass.png', url: 'https://Epass.gg' },
    { name: 'prestige.png', url: 'https://prestige.cars' },
    { name: 'tzone.png', url: 'https://T.zone' },
    { name: 'wiresoft.png', url: 'https://www.wiresoft.com' },
    { name: 'adobelino.png', url: 'https://adobelino.com' },
    { name: 'crovillas.png', url: 'https://crovillas.com/' },
    { name: 'cube.expert.png', url: 'https://cubee.expert/en' },
    { name: 'depositdirect.png', url: 'https://depositdirect.net' },
    { name: 'epass.png', url: 'https://Epass.gg' },
    { name: 'prestige.png', url: 'https://prestige.cars' },
    { name: 'tzone.png', url: 'https://T.zone' },
    { name: 'wiresoft.png', url: 'https://www.wiresoft.com' },
    { name: 'adobelino.png', url: 'https://adobelino.com' },
    { name: 'crovillas.png', url: 'https://crovillas.com/' },
    { name: 'cube.expert.png', url: 'https://cubee.expert/en' },
    { name: 'depositdirect.png', url: 'https://depositdirect.net' },
    { name: 'epass.png', url: 'https://Epass.gg' },
    { name: 'prestige.png', url: 'https://prestige.cars' },
    { name: 'tzone.png', url: 'https://T.zone' },
    { name: 'wiresoft.png', url: 'https://www.wiresoft.com' },
    { name: 'adobelino.png', url: 'https://adobelino.com' },
    { name: 'crovillas.png', url: 'https://crovillas.com/' },
    { name: 'cube.expert.png', url: 'https://cubee.expert/en' },
    { name: 'depositdirect.png', url: 'https://depositdirect.net' },
    { name: 'epass.png', url: 'https://Epass.gg' },
    { name: 'prestige.png', url: 'https://prestige.cars' },
    { name: 'tzone.png', url: 'https://T.zone' },
    { name: 'wiresoft.png', url: 'https://www.wiresoft.com' },
  ]

  const planes = []
  const hoverTriggers = []
  const clickablePlanes = new Map()

  imageLinks.forEach(({ name, url }, i) => {
    const imageUrl = '/work/' + name
    textureLoader.load(imageUrl, (texture) => {
      const scaleFactor = 0.5
      const geometry = new THREE.PlaneGeometry(
        texture.image.width * scaleFactor,
        texture.image.height * scaleFactor
      )

      const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.9,
      })

      const plane = new THREE.Mesh(geometry, material)
      plane.position.set(0, 0, -i * spacingZ)
      group.add(plane)
      planes.push(plane)
      clickablePlanes.set(plane, url)

      const hoverMaterial = new THREE.MeshBasicMaterial({ visible: false, side: THREE.DoubleSide })
      const hoverPlane = new THREE.Mesh(geometry.clone(), hoverMaterial)
      hoverPlane.position.set(0, 0, -i * spacingZ)
      group.add(hoverPlane)
      hoverTriggers.push({ plane, hoverPlane })
    })
  })

  scene.add(group)

  const raycaster = new THREE.Raycaster()
  const mouse = new THREE.Vector2()
  let currentHoveredPlane = null
  let isAnimating = false
  let scrollSpeed = 1000
  const scrollDamp = 0.95

  window.addEventListener('wheel', (event) => {
    scrollSpeed -= event.deltaY * 0.02
  })

  window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
  })

  window.addEventListener('click', () => {
    if (isNavbarHovered.value) return // Don't open links if hovering navbar

    raycaster.setFromCamera(mouse, camera)
    const intersects = raycaster.intersectObjects(planes, false)
    if (intersects.length > 0) {
      const url = clickablePlanes.get(intersects[0].object)
      if (url) window.open(url, '_blank')
    }
  })

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })

  function animate() {
    requestAnimationFrame(animate)

    group.position.z += scrollSpeed
    scrollSpeed *= scrollDamp

    const cameraZ = camera.position.z

    hoverTriggers.forEach(({ plane, hoverPlane }) => {
      const worldZ = group.position.z + plane.position.z
      if (worldZ > cameraZ + spacingZ) {
        plane.position.z -= planes.length * spacingZ
        hoverPlane.position.z -= planes.length * spacingZ
      } else if (worldZ < cameraZ - planes.length * spacingZ) {
        plane.position.z += planes.length * spacingZ
        hoverPlane.position.z += planes.length * spacingZ
      }
    })

    if (!isNavbarHovered.value) {
      raycaster.setFromCamera(mouse, camera)
      const intersectPlanes = raycaster.intersectObjects(planes, false)
      const intersectHoverPlanes = raycaster.intersectObjects(
        hoverTriggers.map((ht) => ht.hoverPlane),
        false
      )

      const anyHovered = intersectPlanes.length > 0 || intersectHoverPlanes.length > 0

      if (anyHovered && !isAnimating) {
        let intersectedPlane =
          intersectPlanes[0]?.object ||
          hoverTriggers.find((ht) => ht.hoverPlane === intersectHoverPlanes[0]?.object)?.plane

        if (intersectedPlane && intersectedPlane !== currentHoveredPlane) {
          if (currentHoveredPlane) gsap.to(currentHoveredPlane.position, { x: 0, duration: 0.3 })
          currentHoveredPlane = intersectedPlane
          isAnimating = true
          gsap.to(currentHoveredPlane.position, {
            x: 400,
            duration: 0.9,
            onComplete: () => {
              isAnimating = false
            },
          })
        }
      } else if (!anyHovered && currentHoveredPlane && !isAnimating) {
        isAnimating = true
        gsap.to(currentHoveredPlane.position, {
          x: 0,
          duration: 0.3,
          onComplete: () => {
            currentHoveredPlane = null
            isAnimating = false
          },
        })
      }
    } else if (currentHoveredPlane && !isAnimating) {
      // Reset any hovered plane if navbar is hovered
      isAnimating = true
      gsap.to(currentHoveredPlane.position, {
        x: 0,
        duration: 0.3,
        onComplete: () => {
          currentHoveredPlane = null
          isAnimating = false
        },
      })
    }

    renderer.render(scene, camera)
  }

  animate()
})
</script>

<style scoped>
canvas {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
}

.custom-scrollbar {
  position: fixed;
  top: 50%;
  right: 20px;
  width: 4px;
  height: 60px;
  background-color: #00ff99;
  transform: translateY(-50%);
  border-radius: 2px;
  opacity: 0.7;
  z-index: 10;
}

/* Hide dropdown content before mount */
[v-cloak] {
  display: none;
}
</style>
