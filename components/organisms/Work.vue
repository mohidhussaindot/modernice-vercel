<template>
  <div>
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
    <header
      v-if="!loading"
      class="fixed top-0 left-0 w-full z-[9999] bg-gradient-to-t from-[#000]/0 via-[#000]/50 to-[#000]"
      @mouseenter="isNavbarHovered = true"
      @mouseleave="isNavbarHovered = false"
    >
      <div class="max-w-[90rem] mx-auto flex items-center justify-between h-25 px-6 relative">
        <div class="flex items-center gap-6">
          <div
            class="relative flex items-center"
            @mouseenter="openDropdown"
            @mouseleave="closeDropdown"
          >
            <div
              class="relative inline-block px-3 py-1 rounded-2xl text-white font-medium overflow-hidden group bg-white/10 backdrop-blur-sm border border-white/20 hover:cursor-pointer"
            >
              <span
                class="absolute top-0 left-[-100%] w-full h-full bg-blue-100 transition-all duration-300 ease-in-out group-hover:left-0"
              ></span>
              <span class="relative z-10 transition-colors duration-300 group-hover:text-black"
                >Services</span
              >
            </div>
            <div
              v-show="dropdownOpen"
              class="absolute top-full left-0 mt-2 w-48 bg-white/80 rounded-lg shadow-lg overflow-hidden z-50"
            >
              <a
                v-for="service in services"
                :key="service.to"
                :href="service.to"
                class="block px-3 py-1 text-black hover:bg-blue-100"
              >
                {{ service.label }}
              </a>
            </div>
          </div>
          <div class="flex items-center">
            <a
              href="/about"
              class="relative inline-block px-3 py-1 rounded-2xl text-white font-medium overflow-hidden group bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <span
                class="absolute top-0 left-[-100%] w-full h-full bg-blue-100 transition-all duration-300 ease-in-out group-hover:left-0"
              ></span>
              <span class="relative z-10 transition-colors duration-300 group-hover:text-black"
                >About</span
              >
            </a>
          </div>
          <div class="flex items-center">
            <a
              href="/blog"
              class="relative inline-block px-3 py-1 rounded-2xl text-white font-medium overflow-hidden group bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <span
                class="absolute top-0 left-[-100%] w-full h-full bg-blue-100 transition-all duration-300 ease-in-out group-hover:left-0"
              ></span>
              <span class="relative z-10 transition-colors duration-300 group-hover:text-black"
                >Blog</span
              >
            </a>
          </div>
        </div>
        <div
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-semilight text-xl cursor-pointer"
        >
          <a href="/">Modernice.Design</a>
        </div>
        <div class="flex items-center gap-4">
          <a
            href="/contact"
            class="relative inline-block px-3 py-1 rounded-2xl text-white font-medium overflow-hidden group bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <span
              class="absolute top-0 left-[-100%] w-full h-full bg-blue-100 transition-all duration-300 ease-in-out group-hover:left-0"
            ></span>
            <span class="relative z-10 transition-colors duration-300 group-hover:text-black"
              >Contact</span
            >
          </a>
        </div>
      </div>
    </header>
    <div class="canvas-wrapper">
      <canvas
        ref="canvas"
        :style="{ pointerEvents: loading || selectedImage ? 'none' : 'auto' }"
        class="background-canvas"
      />
    </div>
    <div
      v-if="!loading"
      class="absolute bottom-10 flex items-center gap-3 text-white/70 right-22 z-[9999]"
    >
      Overview
      <Button
        @click="startTransition"
        class="inline-block px-3 hover:cursor-pointer py-1 text-white bg-white/20 backdrop-blur-xl rounded-xl border border-white/20 hover:bg-white/30 transition"
      >
        Index
      </Button>
    </div>
    <div
      v-if="selectedImage"
      class="fixed inset-0 bg-black/70 backdrop-blur-md flex flex-col items-center justify-center z-[99999]"
      @click.self="closeOverlay"
    >
      <Button
        class="absolute top-6 right-6 text-white text-2xl font-bold hover:cursor-pointer"
        @click.stop="closeOverlay"
      >
        ✕
      </Button>
      <a
        :href="selectedImage.url"
        target="_blank"
        class="mt-4 inline-block rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/30"
        @click.stop
      >
        <img
          :src="selectedImage.src"
          alt="Selected Image"
          class="max-w-[80vw] max-h-[70vh] rounded-xl shadow-lg"
          @click.stop
        />
      </a>
      <div class="text-center text-white mt-6 max-w-[600px]" @click.stop>
        <h2 class="text-2xl font-bold">{{ selectedImage.info }}</h2>
        <p class="mt-2 opacity-80">{{ selectedImage.description }}</p>
        <a
          :href="selectedImage.url"
          target="_blank"
          class="mt-4 inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/30"
          @click.stop
        >
          Visit Site
        </a>
      </div>
    </div>
  </div>
  <div
    ref="greenLayer"
    class="fixed inset-0 bg-blue-100 z-[999998] transform translate-y-full transition-transform duration-600 ease-in-out"
  >
  </div>
  <div
    ref="blackLayer"
    class="fixed inset-0 bg-black z-[999999] transform translate-y-full transition-transform duration-600 ease-in-out"
  >
  </div>
</template>
<script setup>
  import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
  import * as THREE from 'three'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
  import { Box3, Vector3 } from 'three'
  import Button from '@atoms/Button.vue'
  import { useRouter } from 'vue-router'
  import { useGSAP } from '../../composables/useGSAP'

  const { gsap } = useGSAP()

  const dropdownOpen = ref(false)
  const isNavbarHovered = ref(false)
  const transitionOverlay = ref(null)
  const greenLayer = ref(null)
  const blackLayer = ref(null)
  const canvas = ref(null)
  const hoveredLabel = ref(null)
  const hoveredPosition = ref({ x: 0, y: 0 })
  const topLeftText = ref({ info: '', description: '' })
  const topLeftDiv = ref(null)
  const topLeftTitle = ref(null)
  const topLeftDesc = ref(null)
  const selectedImage = ref(null)
  const loading = ref(true)
  const loadingBar = ref(null)
  const loadingProgress = ref(0)
  const router = useRouter()

  const services = [
    { label: 'App Development', to: '/services/appdevelopment' },
    { label: 'AI Consulting', to: '/services/aiconsulting' },
    { label: 'E-commerce', to: '/services/ecs' },
    { label: 'Website Strategy', to: '/services/website-strategy' },
    { label: 'SEO', to: '/services/seo' }
  ]

  const imageLinks = [
    {
      name: 'adobelino.png',
      url: 'https://adobelino.com',
      info: 'Adobe Lino Project',
      description: 'A digital store for purchasing original software & licenses'
    },
    {
      name: 'crovillas.png',
      url: 'https://crovillas.com/',
      info: 'Crovillas Site',
      description: 'Offers luxury villa rentals, often with pool and sea views.'
    },
    {
      name: 'cube.expert.png',
      url: 'https://cubee.expert/en',
      info: 'Cube Expert',
      description: 'A service for independent vehicle appraisals and damage assessments'
    },
    {
      name: 'depositdirect.png',
      url: 'https://depositdirect.net',
      info: 'Deposit Direct',
      description:
        'Lets tenants rent without paying a cash deposit by issuing a rental deposit guarantee'
    },
    {
      name: 'epass.png',
      url: 'https://Epass.gg',
      info: 'Epass Game',
      description: 'Platform for identity verification and digital KYC services.'
    },
    {
      name: 'prestige-cars.png',
      url: 'https://prestige.cars',
      info: 'Prestige Cars',
      description: 'A luxury and exotic car rental platform offering elite sports and supercars.'
    },
    {
      name: 'tzone.png',
      url: 'https://T.zone',
      info: 'T.Zone Platform',
      description: 'Organize your tournament and earn money'
    }
  ]

  const glbPaths = ['/work/Spaceship.glb', '/work/moon.glb', '/work/satelite.glb']
  const glbNames = ['Spaceship', 'moon', 'satelite']

  let dropdownTimeout = null
  const openDropdown = () => {
    clearTimeout(dropdownTimeout)
    dropdownOpen.value = true
  }
  const closeDropdown = () => {
    dropdownTimeout = setTimeout(() => (dropdownOpen.value = false), 150)
  }

  const startTransition = () => {
    if (!greenLayer.value || !blackLayer.value) return
    greenLayer.value.classList.remove('translate-y-full')
    greenLayer.value.classList.add('translate-y-0')
    setTimeout(() => {
      blackLayer.value.classList.remove('translate-y-full')
      blackLayer.value.classList.add('translate-y-0')
    }, 600)
    setTimeout(() => router.push('/work/projects'), 1200)
  }

  const closeOverlay = e => {
    e?.stopPropagation?.()
    selectedImage.value = null
  }

  const removers = []
  const cancelAll = () => {
    removers.forEach(r => r())
    removers.length = 0
  }

  onMounted(async () => {
    await nextTick()

    let assetsLoaded = false
    let progressDone = false
    const checkFinishLoading = () => {
      if (assetsLoaded && progressDone) loading.value = false
    }

    const progress = { value: 0 }
    gsap.to(progress, {
      value: 100,
      duration: 3,
      ease: 'power1.inOut',
      onUpdate: () => {
        loadingProgress.value = Math.round(progress.value)
        if (loadingBar.value) loadingBar.value.style.width = loadingProgress.value + '%'
      },
      onComplete: () => {
        progressDone = true
        checkFinishLoading()
      }
    })

    // === Three.js Setup ===
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      25,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    )
    camera.position.set(850, 830, 3200)
    camera.lookAt(-100, -100, 1350)

    const renderer = new THREE.WebGLRenderer({ canvas: canvas.value, antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    renderer.outputEncoding = THREE.sRGBEncoding
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6)
    hemiLight.position.set(0, 200, 0)
    scene.add(hemiLight)

    const dirLight = new THREE.DirectionalLight(0xffffff, 2)
    dirLight.position.set(5, 10, 7.5)
    scene.add(dirLight)

    const planesGroup = new THREE.Group()
    const modelsGroup = new THREE.Group()
    scene.add(planesGroup)
    scene.add(modelsGroup)

    const textureLoader = new THREE.TextureLoader()
    const gltfLoader = new GLTFLoader()

    const spacingZ = 1900
    const SLOT_BASE_Z = 1450
    const SLOT_GAP = 2000
    const slots = Array.from({ length: glbPaths.length }, (_, i) => SLOT_BASE_Z - i * SLOT_GAP)
    const slotScales = Array.from({ length: glbPaths.length }, (_, i) => 1 - i * 0.1)

    const loadGLB = url =>
      new Promise((resolve, reject) =>
        gltfLoader.load(url, gltf => resolve(gltf.scene), undefined, reject)
      )

    const models = []
    const modelSlot = new Map()
    let isCarouselAnimating = false

    Promise.all(glbPaths.map(loadGLB))
      .then(scenes => {
        scenes.forEach((sceneModel, i) => {
          sceneModel.name = glbNames[i] || `model-${i}`
          sceneModel.traverse(c => {
            if (c.isMesh) c.castShadow = true
          })
          const box = new Box3().setFromObject(sceneModel)
          const size = new Vector3()
          box.getSize(size)
          let targetWidth = 500
          if (sceneModel.name === 'satelite' || sceneModel.name === 'moon') targetWidth = 400
          const scaleFactor = size.x ? targetWidth / size.x : 1
          sceneModel.userData.baseScale = scaleFactor
          const slotIndex = i % slots.length
          sceneModel.position.set(-800, 0, slots[slotIndex])
          const s = slotScales[slotIndex] * scaleFactor
          sceneModel.scale.set(s, s, s)
          modelsGroup.add(sceneModel)
          models.push(sceneModel)
          modelSlot.set(sceneModel, slotIndex)
        })
        assetsLoaded = true
        checkFinishLoading()
      })
      .catch(() => {
        assetsLoaded = true
        checkFinishLoading()
      })

    const animateModelToSlot = (model, targetSlot, opts = {}) => {
      const duration = opts.duration ?? 1.0
      const ease = opts.ease ?? 'power2.inOut'
      gsap.to(model.position, { z: slots[targetSlot], duration, ease, onComplete: opts.onComplete })
      const baseScale = model.userData.baseScale || 1
      gsap.to(model.scale, {
        x: slotScales[targetSlot] * baseScale,
        y: slotScales[targetSlot] * baseScale,
        z: slotScales[targetSlot] * baseScale,
        duration,
        ease
      })
      if (targetSlot === 0) gsap.to(model.rotation, { x: 0, y: 0, z: 0, duration })
    }

    const rotateCarousel = (direction = 1) => {
      if (isCarouselAnimating || models.length < slots.length) return
      isCarouselAnimating = true
      let completed = 0
      models.forEach(m => {
        const current = modelSlot.get(m)
        const next = (current + direction + slots.length) % slots.length
        animateModelToSlot(m, next, {
          duration: 1.1,
          onComplete: () => {
            completed++
            if (completed === models.length) {
              models.forEach(mm =>
                modelSlot.set(mm, (modelSlot.get(mm) + direction + slots.length) % slots.length)
              )
              isCarouselAnimating = false
            }
          }
        })
      })
    }

    let scrollCount = 0
    let lastDir = 0
    let lastScrollTime = 0
    const SCROLL_TRIGGER_COUNT = 9
    const SCROLL_DELAY = 290

    const onWheelForCarousel = e => {
      if (loading.value) return
      if (isNavbarHovered.value || selectedImage.value) {
        scrollCount = 0
        lastDir = 0
        return
      }
      const now = Date.now()
      if (now - lastScrollTime < SCROLL_DELAY) return
      lastScrollTime = now
      const dir = e.deltaY > 0 ? 1 : -1
      if (dir !== lastDir) {
        scrollCount = 0
        lastDir = dir
      }
      scrollCount++
      if (scrollCount >= SCROLL_TRIGGER_COUNT) {
        rotateCarousel(dir)
        scrollCount = 0
        lastDir = 0
      }
    }

    const planes = []
    const planeLabels = new Map()
    const planeInfos = new Map()
    const shadowPlanes = new Map()
    const hoverTriggers = []

    const loadTexture = image =>
      new Promise(resolve => textureLoader.load('/work/' + image.name, tex => resolve(tex)))

    Promise.all(imageLinks.map(loadTexture)).then(textures => {
      textures.forEach((texture, i) => {
        const fixedWidth = 950
        const fixedHeight = 550
        const geometry = new THREE.PlaneGeometry(fixedWidth, fixedHeight)
        const material = new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.9
        })
        const plane = new THREE.Mesh(geometry, material)
        plane.position.set(0, 0, -i * spacingZ)
        planesGroup.add(plane)
        planes.push(plane)
        planeLabels.set(plane, imageLinks[i].name.replace('.png', ''))
        planeInfos.set(plane, {
          info: imageLinks[i].info,
          description: imageLinks[i].description,
          url: imageLinks[i].url
        })

        const hoverMaterial = new THREE.MeshBasicMaterial({
          visible: false,
          side: THREE.DoubleSide
        })
        const hoverPlane = new THREE.Mesh(geometry.clone(), hoverMaterial)
        hoverPlane.position.copy(plane.position)
        planesGroup.add(hoverPlane)
        hoverTriggers.push({ plane, hoverPlane })

        const shadowMaterial = new THREE.MeshBasicMaterial({
          visible: false,
          side: THREE.DoubleSide
        })
        const shadowPlane = new THREE.Mesh(geometry.clone(), shadowMaterial)
        shadowPlane.position.copy(plane.position)
        planesGroup.add(shadowPlane)
        shadowPlanes.set(plane, shadowPlane)
      })
      animate()
    })

    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    let currentHoveredPlane = null
    let isAnimating = false
    let scrollSpeed = 350
    const scrollDamp = 0.95

    const onWheel = e => {
      if (!loading.value) scrollSpeed -= e.deltaY * 0.06
      onWheelForCarousel(e)
    }

    const onMouseMove = event => {
      if (!loading.value) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
      }
    }

    const onClick = () => {
      if (isNavbarHovered.value || loading.value || selectedImage.value) return
      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObjects(planes, false)
      if (intersects.length > 0) {
        const plane = intersects[0].object
        const imageData = planeInfos.get(plane)
        selectedImage.value = { src: '/work/' + planeLabels.get(plane) + '.png', ...imageData }
      }
    }

    let resizeTimeout = null
    const onResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }, 120)
    }

    const addRemover = (target, event, handler, options) => {
      target.addEventListener(event, handler, options)
      removers.push(() => target.removeEventListener(event, handler, options))
    }

    addRemover(window, 'wheel', onWheel, { passive: true })
    addRemover(window, 'mousemove', onMouseMove)
    addRemover(window, 'click', onClick)
    addRemover(window, 'resize', onResize)
    addRemover(window, 'keydown', e => {
      if (e.key === 'Escape' && selectedImage.value) selectedImage.value = null
    })

    let rafId = null
    const animate = () => {
      rafId = requestAnimationFrame(animate)
      if (loading.value) return

      planesGroup.position.z += scrollSpeed
      scrollSpeed *= scrollDamp

      const cameraZ = camera.position.z
      for (const { plane, hoverPlane } of hoverTriggers) {
        const worldZ = planesGroup.position.z + plane.position.z
        if (worldZ > cameraZ + spacingZ) {
          plane.position.z -= planes.length * spacingZ
          hoverPlane.position.z -= planes.length * spacingZ
          const shadow = shadowPlanes.get(plane)
          if (shadow) shadow.position.z -= planes.length * spacingZ
        } else if (worldZ < cameraZ - planes.length * spacingZ) {
          plane.position.z += planes.length * spacingZ
          hoverPlane.position.z += planes.length * spacingZ
          const shadow = shadowPlanes.get(plane)
          if (shadow) shadow.position.z += planes.length * spacingZ
        }
      }

      if (!isNavbarHovered.value && !selectedImage.value) {
        raycaster.setFromCamera(mouse, camera)
        const intersectPlanes = raycaster.intersectObjects(
          planes.concat(Array.from(shadowPlanes.values())),
          false
        )
        const intersectHoverPlanes = raycaster.intersectObjects(
          hoverTriggers.map(ht => ht.hoverPlane),
          false
        )
        const anyHovered = intersectPlanes.length > 0 || intersectHoverPlanes.length > 0

        if (anyHovered && !isAnimating) {
          let intersectedPlane =
            intersectPlanes[0]?.object instanceof THREE.Mesh &&
            planes.includes(intersectPlanes[0].object)
              ? intersectPlanes[0].object
              : hoverTriggers.find(ht => ht.hoverPlane === intersectHoverPlanes[0]?.object)?.plane

          if (intersectedPlane && intersectedPlane !== currentHoveredPlane) {
            if (currentHoveredPlane) {
              gsap.to(currentHoveredPlane.position, { x: 0, duration: 0.3 })
              const prevShadow = shadowPlanes.get(currentHoveredPlane)
              if (prevShadow) gsap.to(prevShadow.scale, { x: 1, duration: 0.3 })
            }
            currentHoveredPlane = intersectedPlane
            isAnimating = true
            const s = shadowPlanes.get(currentHoveredPlane)
            if (s) gsap.to(s.scale, { x: 1.01, duration: 0.9 })
            hoveredLabel.value = planeLabels.get(currentHoveredPlane)
            topLeftText.value = planeInfos.get(currentHoveredPlane) || { info: '', description: '' }

            nextTick(() => {
              if (topLeftDiv.value)
                gsap.fromTo(
                  topLeftDiv.value,
                  { opacity: 0, x: -50 },
                  { opacity: 1, x: 0, duration: 0.6 }
                )
              if (topLeftTitle.value)
                gsap.fromTo(
                  topLeftTitle.value,
                  { opacity: 0, y: -10 },
                  { opacity: 1, y: 0, duration: 0.6, delay: 0.1 }
                )
              if (topLeftDesc.value)
                gsap.fromTo(
                  topLeftDesc.value,
                  { opacity: 0, y: -10 },
                  { opacity: 1, y: 0, duration: 0.6, delay: 0.2 }
                )
            })
          }
        }
      }
      renderer.render(scene, camera)
    }

    onBeforeUnmount(() => {
      try {
        cancelAnimationFrame(rafId)
      } catch {}
      cancelAll()
      try {
        renderer.forceContextLoss?.()
        renderer.dispose?.()
      } catch {}
    })
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
    0%,
    100% {
      opacity: 1;
    }

    50% {
      opacity: 0.5;
    }
  }

  .canvas-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url('/first-three-sect-img/bg-stars.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    background-color: black;
    z-index: 0;
  }

  .background-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: block;
  }

  .transition-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2rem;
  }
</style>
