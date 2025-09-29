<template>
  <div>
    <div class="custom-scrollbar"></div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import * as THREE from 'three'
import gsap from 'gsap'
import { onMounted, ref } from 'vue'

const canvas = ref(null)

onMounted(() => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 10000)
  camera.position.set(850, 830, 3200)
  camera.lookAt(-100, -100, 1550)

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    antialias: true,
  })
  renderer.setSize(window.innerWidth, window.innerHeight) 

  const group = new THREE.Group()
  const textureLoader = new THREE.TextureLoader()
  const spacingZ = 200;

  const imageNames = [
    'image.png',
    'image1.png',
    'image2.png',
    'image3.png',
    'image4.png',
    'image5.png',
    'image6.png',
    'image7.png',
    'image8.png',
    'image.png',
    'image1.png',
     'image2.png',
    'image3.png',
    'image4.png',
    'image5.png',
    'image6.png',
    'image7.png',
    'image8.png'
  ]

  const total = imageNames.length
  const planes = []
  const hoverTriggers = []

  for (let i = 0; i < total; i++) {
    const imageUrl = '/work/' + imageNames[i] // public folder reference
    textureLoader.load(
      imageUrl,
      (texture) => {
        const imgWidth = texture.image.width
        const imgHeight = texture.image.height

        const scaleFactor = 0.5 
        const geometry = new THREE.PlaneGeometry(imgWidth * scaleFactor, imgHeight * scaleFactor)

const material = new THREE.MeshBasicMaterial({
  map: texture,
  side: THREE.DoubleSide,
  transparent: true,       
  opacity: 0.9            
})
        const plane = new THREE.Mesh(geometry, material)
        plane.position.set(0, 0, -i * spacingZ)
        group.add(plane)
        planes.push(plane)

        const hoverMaterial = new THREE.MeshBasicMaterial({ visible: false, side: THREE.DoubleSide })
        const hoverPlane = new THREE.Mesh(geometry.clone(), hoverMaterial)
        hoverPlane.position.set(0, 0, -i * spacingZ)
        group.add(hoverPlane)
        hoverTriggers.push({ plane, hoverPlane })
      },
      undefined,
      (err) => console.error("Image load error:", err)
    )
  }

  scene.add(group)

  const raycaster = new THREE.Raycaster()
  const mouse = new THREE.Vector2()
  let hoveredPlane = null

  let scrollSpeed = 1000
  const scrollDamp = 0.95

  window.addEventListener('wheel', (event) => {
    scrollSpeed -= event.deltaY * 0.02
  })

  window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
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

    for (let i = 0; i < planes.length; i++) {
      const { plane, hoverPlane } = hoverTriggers[i]
      const worldZ = group.position.z + plane.position.z

      if (worldZ > cameraZ + spacingZ) {
        plane.position.z -= total * spacingZ
        hoverPlane.position.z -= total * spacingZ
      } else if (worldZ < cameraZ - total * spacingZ) {
        plane.position.z += total * spacingZ
        hoverPlane.position.z += total * spacingZ
      }
    }

    raycaster.setFromCamera(mouse, camera)
    const intersectPlanes = raycaster.intersectObjects(planes, false)
    const intersectHoverPlanes = raycaster.intersectObjects(hoverTriggers.map(ht => ht.hoverPlane), false)

    if (intersectPlanes.length > 0 || intersectHoverPlanes.length > 0) {
      let intersectedPlane = null

      if (intersectPlanes.length > 0) {
        intersectedPlane = intersectPlanes[0].object
      } else if (intersectHoverPlanes.length > 0) {
        const hoverObj = intersectHoverPlanes[0].object
        const found = hoverTriggers.find(ht => ht.hoverPlane === hoverObj)
        if (found) intersectedPlane = found.plane
      }

      if (hoveredPlane !== intersectedPlane) {
        if (hoveredPlane) {
          gsap.to(hoveredPlane.position, { x: 0, duration: 0.3 })
        }
        hoveredPlane = intersectedPlane
        gsap.to(hoveredPlane.position, { x: 200, duration: 0.3 })
      }
    } else {
      if (hoveredPlane) {
        gsap.to(hoveredPlane.position, { x: 0, duration: 0.3 })
        hoveredPlane = null
      }
    }

    renderer.render(scene, camera)
  }

  animate()
})
</script>

<style scoped>
body {
  overflow: hidden;
  margin: 0;
}

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
