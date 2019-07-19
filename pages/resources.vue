<template>
  <section class="about">
    <ImageHero :main-title="pageTitle" :style="{ 'background-image': 'url(' + backgroundImage + ')' }" />
    <div class="about__content-container" />
    <content-section :section-title="contentSection1.title">
      <p>This will be updated soon with a selection of Forest Therapy related resources</p>
    </content-section>
  </section>
</template>

<script>
import ImageHero from '@/components/ImageHero.vue'
import ContentSection from '@/components/ContentSection.vue'

export default {
  components: {
    ImageHero,
    ContentSection
  },
  head() {
    return {
      title: 'Resources | Forest Therapy Nashville',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Forest Therapy research is increasing in quantity all the time. Begun mostly in Japan and Korea, many studies have been conducted surrounding spending time in nature and our health and well-being. Books on Forest Therapy, nature connection, and studies on nature and attention span, are referenced here.'
        }
      ]
    }
  },
  transition: 'fadeOpacity',
  data() {
    return {
      pageTitle: 'Resources Page',
      backgroundImage: '/images/resources-wood-hero.jpg',
      contentSection1: {
        title: 'Coming soon'
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
