<template>
  <div>
 
    <SeoHero />
    <SeoSecond />

    
  </div>
</template>

<script>
  import SeoHero from '@organisms/SeoHero.vue'
  import SeoSecond from '@organisms/SeoSecond.vue'

  export default {
    name: 'SeoPage',
    components: {
      SeoHero,
      SeoSecond,
    }
  }
</script>
