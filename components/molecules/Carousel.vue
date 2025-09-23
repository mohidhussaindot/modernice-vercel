<template>
  <Swiper
    :modules="[Autoplay, Pagination]"
    :slides-per-view="slidesPerView"
    :loop="loop"
    :centeredSlides="centered"
    :autoplay="autoplay"
    :spaceBetween="spaceBetween"
    :pagination="{ clickable: true, el: '.custom-pagination' }"
    class="w-full"
    @swiper="onSwiperInit"
    @slideChange="onSlideChange"
  >
    <SwiperSlide v-for="(item, index) in items" :key="item.id || index">
      <slot :item="item" :index="index" :isActive="index === currentIndex" />
    </SwiperSlide>
    <!-- Custom Pagination Element -->
    <div class="custom-pagination mt-4 text-center"> </div>
  </Swiper>
</template>

<script setup>
  import { ref } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Autoplay, Pagination } from 'swiper'
  import { BaseButton } from '@atoms'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/autoplay'

  const props = defineProps({
    items: { type: Array, required: true },
    slidesPerView: { type: [Number, String], default: 1 },
    spaceBetween: { type: Number, default: 10 },
    autoplay: { type: [Boolean, Object], default: false },
    loop: { type: Boolean, default: true },
    centered: { type: Boolean, default: false }
  })

  const emit = defineEmits(['init', 'slideChange'])

  const currentIndex = ref(0)
  const swiperInstance = ref(null)

  function onSwiperInit(swiper) {
    swiperInstance.value = swiper
    currentIndex.value = swiper.realIndex
    emit('init', swiper)
  }

  function onSlideChange(swiper) {
    currentIndex.value = swiper.realIndex
    emit('slideChange', swiper.realIndex)
  }
</script>
<style>
  .swiper-pagination-bullet {
    width: 60px;
    height: 2px;
    border-radius: 10px;
  }

  .swiper-pagination-bullet-active {
    background-color: var(--yellowish);
  }
</style>
