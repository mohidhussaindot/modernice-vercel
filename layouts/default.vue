<script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { useI18n } from 'vue-i18n'

  import Navbar from '@/components/organisms/Navbar.vue'
  import SiteFooter from '@/components/organisms/SiteFooter.vue'
  import ScrollToTopButton from '@/components/organisms/Scrolltotop.vue'

  const route = useRoute()
  const { t } = useI18n()

  const navLinks = computed(() => [
    { label: t('nav.brand'), to: '/' },
    { label: t('nav.services') }, // Dropdown trigger
    { label: t('nav.work'), to: '/work' }
  ])

  const getPageConfig = computed(() => {
    const path = route.path

    const is = (p) => path.endsWith(p) || (path === '/' && p === '/')

    if (is('/services/website-strategy')) {
      return {
        logo: '/images/services-navbar.png',
        ctaLabel: t('button.talk'),
        ctaFrom: '#38EF61',
        ctaTo: '#44E5C8',
        footerColor: '#38EF61',
        quote: 'The Rules Dont apply you',
        author: '-Sigma Rule #15'
      }
    }
    
    if (is('/services/seo')) {
      return {
        logo: '/images/SEO-logo.png',
        ctaLabel: t('button.talk4'),
        ctaFrom: '#01A3FF',
        ctaTo: '#25CDDA',
        footerColor: '#1AC1E6',
        quote: 'Opportunities don’t happen, You create them.',
        author: '- Steve Ballmer'
      }
    }

       if (is('/appointment')) {
      return {
        logo: '/images/SEO-logo.png',
        footerColor: '#1AC1E6',
        quote: 'Opportunities don’t happen, You create them.',
        author: '- Steve Ballmer'
      }
    }

    if (is('/services/ecs')) {
      return {
        logo: '/images/ecs-logo.png',
        ctaLabel: t('button.talk3'),
        ctaFrom: '#FFE501',
        ctaTo: '#FFA901',
        footerColor: '#FFB401',
        quote: 'Stop putting my name under quotes I didn’t say.',
        author: '- Sun Tzu, the art of war'
      }
    }

    if (is('/services/appdevelopment')) {
      return {
        logo: '/images/app-dev-logo.png',
        ctaLabel: t('button.talk2'),
        ctaFrom: '#DD39D1',
        ctaTo: '#7137EC',
        footerColor: '#DE39D0',
        quote: 'Developers! Developers! Developers!\nDevelopers! Developers! Developers!\nDevelopers! Developers! Developers!',
        author: '- Steve Ballmer'
      }
    }

    if (is('/services/aiconsulting')) {
      return {
        logo: '/images/ai-logo.png',
        ctaLabel: t('button.talk2'),
        ctaFrom: '#3BE8E8',
        ctaTo: '#AFE639',
        footerColor: '#DE39D0', // Using the color from your snippet (Note: matches appdev)
        quote: 'Developers! Developers! Developers!\nDevelopers! Developers! Developers!\nDevelopers! Developers! Developers!',
        author: '- Steve Ballmer'
      }
    }

    // DEFAULT (Home Page / Fallback)
    // This covers '/' and any other page like '/work' not defined above
    return {
      logo: '/first-three-sect-img/navbar-img.png',
      ctaLabel: t('button.talk'),
      ctaFrom: '#01A3FF',
      ctaTo: '#25CDDA',
      footerColor: '#FCD265',
      quote: 'A goal without a plan is just a wish',
      author: '– Antoine de Saint-Exupéry'
    }
  })
</script>

<template>
  <div>
    <ScrollToTopButton />

    <Navbar
      :nav-links="navLinks"
      :cta-label="getPageConfig.ctaLabel"
      cta-to="/appointment"
      :logo-src="getPageConfig.logo"
      :cta-from="getPageConfig.ctaFrom"
      :cta-to-color="getPageConfig.ctaTo"
    />

    <slot />

    <div class="bg-[#020111] text-white">
      <SiteFooter
        bg-color="#020111"
        :textcolor="getPageConfig.footerColor"
        :quote="getPageConfig.quote"
        :author="getPageConfig.author"
      />
    </div>
  </div>
</template>