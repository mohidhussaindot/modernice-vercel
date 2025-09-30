<template>
  <div>
    <!-- Loading Screen -->
    <div
      v-if="loading"
      class="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]"
    >
      <div class="w-96 h-2 bg-gray-800 rounded overflow-hidden mb-4">
        <div
          class="h-full bg-green-400"
          ref="loadingBar"
          :style="{ width: loadingProgress + '%' }"
        ></div>
      </div>
      <p class="text-white text-lg animate-pulse">Loading...</p>
    </div>

    <!-- Navbar -->
    <header
      v-if="!loading"
      class="fixed top-0 left-0 w-full z-[9999] bg-black/20 backdrop-blur-sm"
      @mouseenter="isNavbarHovered = true"
      @mouseleave="isNavbarHovered = false"
    >
      <div class="max-w-[90rem] mx-auto flex items-center justify-between h-16 px-6 relative">
        <!-- Left Links -->
        <div class="flex items-center gap-6">
          <div class="relative" @mouseenter="openDropdown" @mouseleave="closeDropdown">
            <button class="text-white font-semibold hover:cursor-pointer hover:underline">Services</button>
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
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl cursor-pointer">
          <a href="/">Modernice.Design</a>
        </div>

        <!-- Right Links / Icons -->
        <div class="flex items-center gap-4">
          <a href="/contact" class="px-4 py-2 rounded-lg bg-white/20 text-white font-semibold hover:bg-white/30">
            Contact
          </a>
          <nuxt-icon name="globe" class="w-6 h-6 text-white" />
        </div>
      </div>
    </header>



    <!-- Canvas -->
    <canvas
      ref="canvas"
      :style="{ pointerEvents: loading ? 'none' : 'auto' }"
    ></canvas>

    <!-- Hover Label -->
    <div
      v-if="hoveredLabel && !loading"
      :style="{
        position: 'fixed',
        top: hoveredPosition.y + 'px',
        left: hoveredPosition.x + 60 + 'px',
      }"
      class="bg-black/80 shadow shadow-white/50 text-white px-3 w-[250px]  py-1 rounded-md text-sm pointer-events-none z-[9999]"
    >
    <h1 class="font-bold">
      {{ topLeftText.info }}
    </h1> 
      <p ref="topLeftDesc" class="my-2 opacity-0">{{ topLeftText.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
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
const openDropdown = () => { clearTimeout(dropdownTimeout); dropdownOpen.value = true }
const closeDropdown = () => { dropdownTimeout = setTimeout(() => { dropdownOpen.value = false }, 150) }

// Navbar hover
const isNavbarHovered = ref(false)

// Canvas & Hover
const canvas = ref(null)
const hoveredLabel = ref(null)
const hoveredPosition = ref({ x: 0, y: 0 })
const topLeftText = ref({ info: '', description: '' })
const topLeftDiv = ref(null)
const topLeftTitle = ref(null)
const topLeftDesc = ref(null)

// Loading
const loading = ref(true)
const loadingBar = ref(null)
const loadingProgress = ref(0)

onMounted(() => {
  // Smooth loading bar animation
  gsap.to(loadingProgress, {
    value: 100,
    duration: 3,
    ease: 'power1.inOut',
    onUpdate: () => { loadingBar.value.style.width = loadingProgress.value + '%' },
    onComplete: () => { loading.value = false }
  })

  // Three.js scene setup
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 10000)
  camera.position.set(850, 830, 3200)
  camera.lookAt(-100, -100, 1550)
  const renderer = new THREE.WebGLRenderer({ canvas: canvas.value, antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)

  const group = new THREE.Group()
  scene.add(group)
  const textureLoader = new THREE.TextureLoader()
  const spacingZ = 200

  // Images with URLs and top-left info
  const imageLinks = [
    { name: 'adobelino.png', url: 'https://adobelino.com', info: 'Adobe Lino Project', description: 'A digital store for purchasing original software & licenses' },
    { name: 'crovillas.png', url: 'https://crovillas.com/', info: 'Crovillas Site', description: 'Offers luxury villa rentals, often with pool and sea views.' },
    { name: 'cube.expert.png', url: 'https://cubee.expert/en', info: 'Cube Expert', description: 'A service for independent vehicle appraisals and damage assessments' },
    { name: 'depositdirect.png', url: 'https://depositdirect.net', info: 'Deposit Direct', description: 'Lets tenants rent without paying a cash deposit by issuing a rental deposit guarantee' },
    { name: 'epass.png', url: 'https://Epass.gg', info: 'Epass Game', description: 'Platform for identity verification and digital KYC services.' },
    { name: 'prestige-cars.png', url: 'https://prestige.cars', info: 'Prestige Cars', description: 'A luxury and exotic car rental platform offering elite sports and supercars.' },
    { name: 'tzone.png', url: 'https://T.zone', info: 'T.Zone Platform', description: 'Organize your tournament and earn money' },
      { name: 'adobelino.png', url: 'https://adobelino.com', info: 'Adobe Lino Project', description: 'A digital store for purchasing original software & licenses' },
    { name: 'crovillas.png', url: 'https://crovillas.com/', info: 'Crovillas Site', description: 'Offers luxury villa rentals, often with pool and sea views.' },
    { name: 'cube.expert.png', url: 'https://cubee.expert/en', info: 'Cube Expert', description: 'A service for independent vehicle appraisals and damage assessments' },
    { name: 'depositdirect.png', url: 'https://depositdirect.net', info: 'Deposit Direct', description: 'Lets tenants rent without paying a cash deposit by issuing a rental deposit guarantee' },
    { name: 'epass.png', url: 'https://Epass.gg', info: 'Epass Game', description: 'Platform for identity verification and digital KYC services.' },
    { name: 'prestige-cars.png', url: 'https://prestige.cars', info: 'Prestige Cars', description: 'A luxury and exotic car rental platform offering elite sports and supercars.' },
    { name: 'tzone.png', url: 'https://T.zone', info: 'T.Zone Platform', description: 'Organize your tournament and earn money' },
      { name: 'adobelino.png', url: 'https://adobelino.com', info: 'Adobe Lino Project', description: 'A digital store for purchasing original software & licenses' },
    { name: 'crovillas.png', url: 'https://crovillas.com/', info: 'Crovillas Site', description: 'Offers luxury villa rentals, often with pool and sea views.' },
    { name: 'cube.expert.png', url: 'https://cubee.expert/en', info: 'Cube Expert', description: 'A service for independent vehicle appraisals and damage assessments' },
    { name: 'depositdirect.png', url: 'https://depositdirect.net', info: 'Deposit Direct', description: 'Lets tenants rent without paying a cash deposit by issuing a rental deposit guarantee' },
    { name: 'epass.png', url: 'https://Epass.gg', info: 'Epass Game', description: 'Platform for identity verification and digital KYC services.' },
    { name: 'prestige-cars.png', url: 'https://prestige.cars', info: 'Prestige Cars', description: 'A luxury and exotic car rental platform offering elite sports and supercars.' },
    { name: 'tzone.png', url: 'https://T.zone', info: 'T.Zone Platform', description: 'Organize your tournament and earn money' },
    
  ]

  const planes = []
  const clickablePlanes = new Map()
  const shadowPlanes = new Map()
  const planeLabels = new Map()
  const planeInfos = new Map()
  const hoverTriggers = []

  // Preload textures
  const loadTexture = (image) =>
    new Promise((resolve) => {
      textureLoader.load('/work/' + image.name, (texture) => resolve(texture))
    })

  Promise.all(imageLinks.map(loadTexture)).then((textures) => {
    textures.forEach((texture, i) => {
      const scaleFactor = 0.5
      const geometry = new THREE.PlaneGeometry(texture.image.width * scaleFactor, texture.image.height * scaleFactor)
      const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, transparent: true, opacity: 0.9 })
      const plane = new THREE.Mesh(geometry, material)
      plane.position.set(0, 0, -i * spacingZ)
      group.add(plane)
      planes.push(plane)
      clickablePlanes.set(plane, imageLinks[i].url)
      planeLabels.set(plane, imageLinks[i].name.replace('.png', ''))
      planeInfos.set(plane, { info: imageLinks[i].info, description: imageLinks[i].description })

      const hoverMaterial = new THREE.MeshBasicMaterial({ visible: false, side: THREE.DoubleSide })
      const hoverPlane = new THREE.Mesh(geometry.clone(), hoverMaterial)
      hoverPlane.position.set(0, 0, -i * spacingZ)
      group.add(hoverPlane)
      hoverTriggers.push({ plane, hoverPlane })

      const shadowMaterial = new THREE.MeshBasicMaterial({ visible: false, side: THREE.DoubleSide })
      const shadowPlane = new THREE.Mesh(geometry.clone(), shadowMaterial)
      shadowPlane.position.set(0, 0, -i * spacingZ)
      group.add(shadowPlane)
      shadowPlanes.set(plane, shadowPlane)
    })
    animate()
  })

  const raycaster = new THREE.Raycaster()
  const mouse = new THREE.Vector2()
  let currentHoveredPlane = null
  let isAnimating = false
  let scrollSpeed = 1000
  const scrollDamp = 0.95

  window.addEventListener('wheel', (event) => { if (!loading.value) scrollSpeed -= event.deltaY * 0.02 })
  window.addEventListener('mousemove', (event) => { if (!loading.value) { mouse.x = (event.clientX / window.innerWidth) * 2 - 1; mouse.y = -(event.clientY / window.innerHeight) * 2 + 1 } })
  window.addEventListener('click', () => {
    if (isNavbarHovered.value || loading.value) return
    raycaster.setFromCamera(mouse, camera)
    const intersects = raycaster.intersectObjects(planes, false)
    if (intersects.length > 0) {
      const url = clickablePlanes.get(intersects[0].object)
      if (url) window.open(url, '_blank')
    }
  })
  window.addEventListener('resize', () => { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight) })

  function animate() {
    requestAnimationFrame(animate)
    if (loading.value) return

    group.position.z += scrollSpeed
    scrollSpeed *= scrollDamp
    const cameraZ = camera.position.z

    hoverTriggers.forEach(({ plane, hoverPlane }) => {
      const worldZ = group.position.z + plane.position.z
      if (worldZ > cameraZ + spacingZ) {
        plane.position.z -= planes.length * spacingZ
        hoverPlane.position.z -= planes.length * spacingZ
        shadowPlanes.get(plane).position.z -= planes.length * spacingZ
      } else if (worldZ < cameraZ - planes.length * spacingZ) {
        plane.position.z += planes.length * spacingZ
        hoverPlane.position.z += planes.length * spacingZ
        shadowPlanes.get(plane).position.z += planes.length * spacingZ
      }
    })

    if (!isNavbarHovered.value) {
      raycaster.setFromCamera(mouse, camera)
      const intersectPlanes = raycaster.intersectObjects([...planes, ...shadowPlanes.values()], false)
      const intersectHoverPlanes = raycaster.intersectObjects(hoverTriggers.map((ht) => ht.hoverPlane), false)
      const anyHovered = intersectPlanes.length > 0 || intersectHoverPlanes.length > 0

      if (anyHovered && !isAnimating) {
        let intersectedPlane =
          intersectPlanes[0]?.object instanceof THREE.Mesh && planes.includes(intersectPlanes[0].object)
            ? intersectPlanes[0].object
            : hoverTriggers.find((ht) => ht.hoverPlane === intersectHoverPlanes[0]?.object)?.plane

        if (intersectedPlane && intersectedPlane !== currentHoveredPlane) {
          if (currentHoveredPlane) {
            gsap.to(currentHoveredPlane.position, { x: 0, duration: 0.3 })
            gsap.to(shadowPlanes.get(currentHoveredPlane).scale, { x: 1, duration: 0.3 })
          }
          currentHoveredPlane = intersectedPlane
          isAnimating = true

          gsap.to(currentHoveredPlane.position, { x: 400, duration: 0.9, onComplete: () => { isAnimating = false } })
          gsap.to(shadowPlanes.get(currentHoveredPlane).scale, { x: 1.01, duration: 0.9 })

          hoveredLabel.value = planeLabels.get(currentHoveredPlane)
          topLeftText.value = planeInfos.get(currentHoveredPlane) || { info: '', description: '' }

          nextTick(() => {
            // Animate top-left div
            gsap.fromTo(topLeftDiv.value, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' })
            gsap.fromTo(topLeftTitle.value, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.1 })
            gsap.fromTo(topLeftDesc.value, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.2 })
          })

          const pos = new THREE.Vector3()
          currentHoveredPlane.getWorldPosition(pos)
          const offset = new THREE.Vector3(1, 0, 0)
          offset.applyQuaternion(currentHoveredPlane.quaternion)
          pos.add(offset.multiplyScalar(currentHoveredPlane.geometry.parameters.width / 2 + 60))
          pos.project(camera)
          hoveredPosition.value = { x: (pos.x * 0.5 + 0.5) * window.innerWidth, y: (-pos.y * 0.5 + 0.5) * window.innerHeight }

          document.body.style.cursor = 'pointer'
        }
      } else if (!anyHovered && currentHoveredPlane && !isAnimating) {
        isAnimating = true
        gsap.to(currentHoveredPlane.position, { x: 0, duration: 0.3, onComplete: () => { gsap.to(shadowPlanes.get(currentHoveredPlane).scale, { x: 1, duration: 0.3 }); currentHoveredPlane = null; isAnimating = false } })
        hoveredLabel.value = null
        topLeftText.value = { info: '', description: '' }
        gsap.to(topLeftDiv.value, { opacity: 0, x: -50, duration: 0.3 })
        document.body.style.cursor = 'default'
      }
    } else if (currentHoveredPlane && !isAnimating) {
      isAnimating = true
      gsap.to(currentHoveredPlane.position, { x: 0, duration: 0.3, onComplete: () => { gsap.to(shadowPlanes.get(currentHoveredPlane).scale, { x: 1, duration: 0.3 }); currentHoveredPlane = null; isAnimating = false } })
      hoveredLabel.value = null
      topLeftText.value = { info: '', description: '' }
      gsap.to(topLeftDiv.value, { opacity: 0, x: -50, duration: 0.3 })
      document.body.style.cursor = 'default'
    }

    renderer.render(scene, camera)
  }
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

.animate-pulse {
  animation: pulse 1.5s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
</style>
