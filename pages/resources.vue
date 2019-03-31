<template>
  <section class="about">
    <ImageHero :main-title="pageTitle" :style="{ 'background-image': 'url(' + backgroundImage + ')' }" />
    <div class="about__content-container" />
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
      pageTitle: 'Resources Page',
      backgroundImage: '/images/wood2.jpg'
    }
  }
}
</script>

<style scoped lang="scss">
</style>
