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
        :style="{ pointerEvents: loading ? 'none' : 'auto' }"
        class="background-canvas"
      />
    </div>
     <div v-if="!loading" class="absolute bottom-10 flex  items-center gap-3 text-white/70 right-22 z-[9999]">
      Overview
 <Button
  @click="startTransition"
  class="inline-block px-3  hover:cursor-pointer py-1 text-white bg-white/20 backdrop-blur-xl rounded-xl border border-white/20 hover:bg-white/30 transition"
>
  Index
</Button>
  </div>
    <div
      v-if="selectedImage"
      class="fixed inset-0 bg-black/70 backdrop-blur-md flex flex-col items-center justify-center z-[99999]"
      @click.self="selectedImage = null"
    >
      <Button
        class="absolute top-6 right-6 text-white text-2xl font-bold hover:cursor-pointer"
        @click="selectedImage = null"
      >
        ✕
      </Button>
      <a
        :href="selectedImage.url"
        target="_blank"
        class="mt-4 inline-block rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/30"
      >
        <img
          :src="selectedImage.src"
          alt="Selected Image"
          class="max-w-[80vw] max-h-[70vh] rounded-xl shadow-lg"
        />
      </a>
      <div class="text-center text-white mt-6 max-w-[600px]">
        <h2 class="text-2xl font-bold">{{ selectedImage.info }}</h2>
        <p class="mt-2 opacity-80">{{ selectedImage.description }}</p>
        <a
          :href="selectedImage.url"
          target="_blank"
          class="mt-4 inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/30"
        >
          Visit Site
        </a>
      </div>
    </div>
  </div>
<div
  ref="greenLayer"
  class="fixed inset-0 bg-blue-100 z-[999998] transform translate-y-full transition-transform duration-600 ease-in-out"
></div>
<div
  ref="blackLayer"
  class="fixed inset-0 bg-black z-[999999] transform translate-y-full transition-transform duration-600 ease-in-out"
></div>
</template>
<script setup>
  import { ref, onMounted, nextTick } from 'vue'
  import * as THREE from 'three'
  import gsap from 'gsap'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
  import { Box3, Vector3 } from 'three'
  import Button from '@atoms/Button.vue'
  const dropdownOpen = ref(false)
  const services = [
    { label: 'App Development', to: '/services/appdevelopment' },
    { label: 'AI Consulting', to: '/services/aiconsulting' },
    { label: 'E-commerce', to: '/services/ecs' },
    { label: 'Website Strategy', to: '/services/website-strategy' },
    { label: 'SEO', to: '/services/seo' }
  ]
  let dropdownTimeout = null
  const openDropdown = () => {
    clearTimeout(dropdownTimeout)
    dropdownOpen.value = true
  }
  const closeDropdown = () => {
    dropdownTimeout = setTimeout(() => {
      dropdownOpen.value = false
    }, 150)
  }
  const isNavbarHovered = ref(false)
const transitionOverlay = ref(null)
const greenLayer = ref(null)
const blackLayer = ref(null)
const router = useRouter()
const startTransition = () => {
  if (!greenLayer.value || !blackLayer.value) return
  greenLayer.value.classList.remove('translate-y-full')
  greenLayer.value.classList.add('translate-y-0')
  setTimeout(() => {
    blackLayer.value.classList.remove('translate-y-full')
    blackLayer.value.classList.add('translate-y-0')
  }, 600) 
  setTimeout(() => {
    router.push('/work/projects')
  }, 1200) 
}
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
  onMounted(async () => {
    window.addEventListener('keydown', event => {
      if (event.key === 'Escape' && selectedImage.value) {
        selectedImage.value = null
      }
    })
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
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      25,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    )
    camera.position.set(850, 830, 3200)
    camera.lookAt(-100, -100, 1350)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas.value,
      antialias: true,
      alpha: true
    })
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
    scene.add(planesGroup)
    const modelsGroup = new THREE.Group()
    scene.add(modelsGroup)
    const textureLoader = new THREE.TextureLoader()
    const spacingZ = 1900
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
    const gltfLoader = new GLTFLoader()
    const SLOT_BASE_Z = 1450
    const SLOT_GAP = 2000
    const slots = Array.from({ length: glbPaths.length }, (_, i) => SLOT_BASE_Z - i * SLOT_GAP)
    const slotScales = Array.from({ length: glbPaths.length }, (_, i) => 1 - i * 0.1) 
    const models = [] 
    const modelSlot = new Map() 
    let isCarouselAnimating = false
    const loadGLB = url =>
      new Promise((resolve, reject) => {
        gltfLoader.load(url, gltf => resolve(gltf.scene), undefined, reject)
      })
    Promise.all(glbPaths.map(loadGLB)).then(scenes => {
      scenes.forEach((sceneModel, i) => {
        sceneModel.name = glbNames[i] || 'model-' + i
        sceneModel.traverse(c => {
          if (c.isMesh) c.castShadow = true
        })
        const box = new Box3().setFromObject(sceneModel)
        const size = new Vector3()
        box.getSize(size)
        let targetWidth = 500
        if (sceneModel.name === 'satelite') {
          targetWidth = 400 
        }
        if (sceneModel.name === 'moon') {
          targetWidth = 400
        }
        const scaleFactor = targetWidth / size.x
        sceneModel.scale.setScalar(scaleFactor)
        sceneModel.userData.baseScale = scaleFactor
        const slotIndex = i % slots.length
        if (sceneModel.name === 'Spaceship') {
          sceneModel.position.set(-800, 0, slots[slotIndex])
        } else if (sceneModel.name === 'moon') {
          sceneModel.position.set(-800, 0, slots[slotIndex])
        } else if (sceneModel.name === 'satelite') {
          sceneModel.position.set(-800, 0, slots[slotIndex])
        }
        const s = slotScales[slotIndex] * scaleFactor
        sceneModel.scale.set(s, s, s)
        modelsGroup.add(sceneModel)
        models.push(sceneModel)
        modelSlot.set(sceneModel, slotIndex)
      })
      assetsLoaded = true
      checkFinishLoading()
    })
    const bobbingModels = new Set()
    const animateModelToSlot = (model, targetSlot, opts = {}) => {
      const duration = opts.duration ?? 1.0
      const ease = opts.ease ?? 'power2.inOut'
      const onComplete = opts.onComplete
      gsap.to(model.position, {
        z: slots[targetSlot],
        duration,
        ease,
        onComplete: () => {
          if (onComplete) onComplete()
        }
      })
      const baseScale = model.userData.baseScale || 1
      gsap.to(model.scale, {
        x: slotScales[targetSlot] * baseScale,
        y: slotScales[targetSlot] * baseScale,
        z: slotScales[targetSlot] * baseScale,
        duration,
        ease
      })
      if (targetSlot === 0) {
        gsap.to(model.rotation, { x: 0, y: 0, z: 0, duration })
      }
    }
    const rotateCarouselForward = () => {
      if (isCarouselAnimating || models.length < slots.length) return
      isCarouselAnimating = true
      let completed = 0
      models.forEach(m => {
        const current = modelSlot.get(m)
        const next = (current + 1) % slots.length 
        animateModelToSlot(m, next, {
          duration: 1.1,
          onComplete: () => {
            completed++
            if (completed === models.length) {
              models.forEach(mm => {
                const c = modelSlot.get(mm)
                modelSlot.set(mm, (c + 1) % slots.length) 
              })
              isCarouselAnimating = false
            }
          }
        })
      })
    }
    const rotateCarouselBackward = () => {
      if (isCarouselAnimating || models.length < slots.length) return
      isCarouselAnimating = true
      let completed = 0
      models.forEach(m => {
        const current = modelSlot.get(m)
        const next = (current - 1 + slots.length) % slots.length 
        animateModelToSlot(m, next, {
          duration: 1.1,
          onComplete: () => {
            completed++
            if (completed === models.length) {
              models.forEach(mm => {
                const c = modelSlot.get(mm)
                modelSlot.set(mm, (c - 1 + slots.length) % slots.length) 
              })
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
    window.addEventListener(
      'wheel',
      e => {
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
          if (dir > 0) rotateCarouselForward()
          else rotateCarouselBackward()
          scrollCount = 0
          lastDir = 0
        }
      },
      { passive: true }
    )
    const planes = []
    const clickablePlanes = new Map()
    const shadowPlanes = new Map()
    const planeLabels = new Map()
    const planeInfos = new Map()
    const hoverTriggers = []
    const loadTexture = image =>
      new Promise(resolve => {
        textureLoader.load('/work/' + image.name, texture => resolve(texture))
      })
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
        clickablePlanes.set(plane, imageLinks[i].url)
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
        hoverPlane.position.set(0, 0, -i * spacingZ)
        planesGroup.add(hoverPlane)
        hoverTriggers.push({ plane, hoverPlane })
        const shadowMaterial = new THREE.MeshBasicMaterial({
          visible: false,
          side: THREE.DoubleSide
        })
        const shadowPlane = new THREE.Mesh(geometry.clone(), shadowMaterial)
        shadowPlane.position.set(0, 0, -i * spacingZ)
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
    window.addEventListener('wheel', event => {
      if (!loading.value) scrollSpeed -= event.deltaY * 0.02
    })
    window.addEventListener('mousemove', event => {
      if (!loading.value) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
      }
    })
    window.addEventListener('click', () => {
      if (isNavbarHovered.value || loading.value || selectedImage.value) return
      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObjects(planes, false)
      if (intersects.length > 0) {
        const plane = intersects[0].object
        const imageData = planeInfos.get(plane)
        selectedImage.value = {
          src: '/work/' + planeLabels.get(plane) + '.png',
          ...imageData
        }
      }
    })
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    })
    function animate() {
      requestAnimationFrame(animate)
      if (loading.value) return
      planesGroup.position.z += scrollSpeed
      scrollSpeed *= scrollDamp
      const cameraZ = camera.position.z
      hoverTriggers.forEach(({ plane, hoverPlane }) => {
        const worldZ = planesGroup.position.z + plane.position.z
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
              gsap.to(shadowPlanes.get(currentHoveredPlane).scale, { x: 1, duration: 0.3 })
            }
            currentHoveredPlane = intersectedPlane
            isAnimating = true
            gsap.to(shadowPlanes.get(currentHoveredPlane).scale, { x: 1.01, duration: 0.9 })
            hoveredLabel.value = planeLabels.get(currentHoveredPlane)
            topLeftText.value = planeInfos.get(currentHoveredPlane) || { info: '', description: '' }
            nextTick(() => {
              if (topLeftDiv.value)
                gsap.fromTo(
                  topLeftDiv.value,
                  { opacity: 0, x: -50 },
                  { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }
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
            const pos = new THREE.Vector3()
            currentHoveredPlane.getWorldPosition(pos)
            const offset = new THREE.Vector3(1, 0, 0)
            offset.applyQuaternion(currentHoveredPlane.quaternion)
            pos.add(offset.multiplyScalar(currentHoveredPlane.geometry.parameters.width / 2 + 60))
            pos.project(camera)
            hoveredPosition.value = {
              x: (pos.x * 0.5 + 0.5) * window.innerWidth,
              y: (-pos.y * 0.5 + 0.5) * window.innerHeight
            }
          }
        } else if (!anyHovered && currentHoveredPlane && !isAnimating) {
          isAnimating = true
          gsap.to(currentHoveredPlane.position, {
            x: 0,
            duration: 0.3,
            onComplete: () => {
              gsap.to(shadowPlanes.get(currentHoveredPlane).scale, { x: 1, duration: 0.3 })
              currentHoveredPlane = null
              isAnimating = false
            }
          })
          hoveredLabel.value = null
          topLeftText.value = { info: '', description: '' }
          if (topLeftDiv.value) gsap.to(topLeftDiv.value, { opacity: 0, x: -50, duration: 0.3 })
          document.body.style.cursor = 'default'
        }
      } else if (currentHoveredPlane && !isAnimating) {
        isAnimating = true
        gsap.to(currentHoveredPlane.position, {
          x: 0,
          duration: 0.3,
          onComplete: () => {
            gsap.to(shadowPlanes.get(currentHoveredPlane).scale, { x: 1, duration: 0.3 })
            currentHoveredPlane = null
            isAnimating = false
          }
        })
        hoveredLabel.value = null
        topLeftText.value = { info: '', description: '' }
        if (topLeftDiv.value) gsap.to(topLeftDiv.value, { opacity: 0, x: -50, duration: 0.3 })
        document.body.style.cursor = 'default'
      }
      models.forEach(m => {
      })
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
