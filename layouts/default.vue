<template>
  <div class="all-content">
    <TheHeader />
    <nuxt />
    <page-footer />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  components: {
    TheHeader,
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
