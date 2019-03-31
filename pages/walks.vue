<template>
  <section class="walks">
    <ImageHero :main-title="pageTitle" :style="{ 'background-image': 'url(' + backgroundImage + ')' }" />
    <div class="walks__content-container" />
  </section>
</template>

<script>
// import ContentSection from '@/components/ContentSection.vue'
// import ColumnSection from '@/components/ColumnSection.vue'
import ImageHero from '@/components/ImageHero.vue'

export default {
  components: {
    // ContentSection,
    // ColumnSection,
    ImageHero
  },
  data() {
    return {
      pageTitle: 'Walks Page',
      backgroundImage: '/images/women-walk.jpg'
    }
  }
}
</script>

<style scoped lang="scss">
</style>
