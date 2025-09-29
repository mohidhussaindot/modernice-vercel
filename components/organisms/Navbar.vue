<template>
  <div>
    <!-- Desktop Navbar -->
    <header
      class="fixed z-[9999] h-[2.8281rem] sm:block hidden top-[3.46125rem] transition-opacity duration-500 left-1/2 -translate-x-1/2 backdrop-blur-sm
             w-full max-w-[74.875rem] 2xl:max-w-[90rem] bg-transparent"
    >
      <div class="flex justify-between items-center w-full relative z-[9999]">
        <!-- Logo -->
        <span>
          <a href="/" aria-label="Modernise home">
            <img
              src="/first-three-sect-img/navbar-img.png"
              alt="Logo"
              class="select-none w-[2.8306rem] h-[2.8306rem]"
            />
          </a>
        </span>

        <!-- Nav Links -->
        <nav
          class="relative grid grid-flow-col auto-cols-max items-center gap-[2rem] sm:gap-[3rem] md:gap-[4rem] text-white 2xl:text-[1.3rem] xl:text-[1rem] font-light"
          aria-label="Primary"
        >
          <a href="/" class="hover:underline">modernice.design</a>

          <!-- Services Dropdown -->
          <div
            class="relative"
            @mouseenter="dropdownOpen = true"
            @mouseleave="dropdownOpen = false"
          >
            <button class="hover:underline cursor-pointer focus:outline-none">Services</button>
            <div
              v-show="dropdownOpen"
              class="absolute left-0 mt-2 w-[13rem] rounded-lg shadow-lg border border-gray-700 overflow-hidden z-[9999]"
              style="background: linear-gradient(135deg, #01A3FF, #25CDDA);"
            >
              <a
                v-for="service in services"
                :key="service.to"
                :href="service.to"
                class="block px-4 py-2 text-sm text-black hover:bg-[rgba(255,255,255,0.29)]"
              >
                {{ service.label }}
              </a>
            </div>
          </div>

          <a href="/work" class="hover:underline">Work</a>

          <!-- CTA -->
          <a
            href="/contact"
            class="relative inline-block px-[1.5rem] py-[0.5rem] font-semibold text-base rounded-[0.75rem] transition-transform duration-300 hover:scale-105"
          >
            <div
              class="absolute inset-0 rounded-[0.6875rem] p-[0.0625rem] pointer-events-none"
              style="background: linear-gradient(135deg, #01A3FF, #25CDDA)"
            >
              <div class="w-full h-full rounded-[0.625rem] bg-[#0B061F]"></div>
            </div>

            <span
              class="relative 2xl:text-[1.3rem] z-10"
              style="
                background-image: linear-gradient(135deg, #25CDDA, #01A3FF);
                -webkit-background-clip: text; 
                -webkit-text-fill-color: transparent;
                background-clip: text;
                color: transparent;
              "
            >
              Let’s Talk
            </span>
          </a>
        </nav>
      </div>
    </header>

    <!-- Canvas -->
    <div class="custom-scrollbar"></div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import * as THREE from 'three'
import gsap from 'gsap'
import { onMounted, ref } from 'vue'

const canvas = ref(null)
const dropdownOpen = ref(false)

const services = [
  { label: 'App Development', to: '/services/appdevelopment' },
  { label: 'AI Consulting', to: '/services/aiconsulting' },
  { label: 'E-commerce', to: '/services/ecs' },
  { label: 'Website Strategy', to: '/services/website-strategy' },
  { label: 'SEO', to: '/services/seo' },
]

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

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    antialias: true,
  })
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

    raycaster.setFromCamera(mouse, camera)
    const intersectPlanes = raycaster.intersectObjects(planes, false)
    const intersectHoverPlanes = raycaster.intersectObjects(hoverTriggers.map(ht => ht.hoverPlane), false)

    const anyHovered = intersectPlanes.length > 0 || intersectHoverPlanes.length > 0

    if (anyHovered && !isAnimating) {
      let intersectedPlane = intersectPlanes[0]?.object || hoverTriggers.find(ht => ht.hoverPlane === intersectHoverPlanes[0]?.object)?.plane

      if (intersectedPlane && intersectedPlane !== currentHoveredPlane) {
        if (currentHoveredPlane) gsap.to(currentHoveredPlane.position, { x: 0, duration: 0.3 })
        currentHoveredPlane = intersectedPlane
        isAnimating = true
        gsap.to(currentHoveredPlane.position, {
          x: 400,
          duration: 0.9,
          onComplete: () => { isAnimating = false }
        })
      }
    } else if (!anyHovered && currentHoveredPlane && !isAnimating) {
      isAnimating = true
      gsap.to(currentHoveredPlane.position, {
        x: 0,
        duration: 0.3,
        onComplete: () => { currentHoveredPlane = null; isAnimating = false }
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
</style>
