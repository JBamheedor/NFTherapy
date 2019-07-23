<template>
  <div class="all-content">
    <page-navigation />
    <nuxt />
    <page-footer />
  </div>
</template>

<script>
import PageNavigation from '@/components/PageNavigation.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  components: {
    PageNavigation,
    PageFooter
  },
  head() {
    return {
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/images/wood-path.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
