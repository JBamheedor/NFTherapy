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
import ogImage from '@/static/images/wood-path.jpg';

export default {
  components: {
    PageNavigation,
    PageFooter
  },
  head () {
    return {
      meta: [
        { hid: 'og:image', property: 'og:image', content: this.BASE_URL+ ogImage }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
