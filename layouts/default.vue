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
  }
}
</script>

<style scoped lang="scss">
</style>
