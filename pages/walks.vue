<template>
  <section class="walks">
    <ImageHero :main-title="pageTitle" :style="{ 'background-image': 'url(' + backgroundImage + ')' }" />
    <div class="walks__content-container" />
    <content-section :section-title="contentSection1.title">
      <p>
        I'll be updating this section with my favorite spots and local areas to explore. I'll also post all my upcoming events, stay tuned.
      </p>
    </content-section>
  </section>
</template>

<script>
import ContentSection from '@/components/ContentSection.vue'
import ImageHero from '@/components/ImageHero.vue'

export default {
  components: {
    ContentSection,
    ImageHero
  },
  head() {
    return {
      title: 'Walks | Forest Therapy Nashville',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Find Forest Therapy walks in Nashville, TN here. Forest Therapy Nashville invites Nashvillians who want to reconnect, boost their immunity, or simply spend dedicated time in nature on Forest Therapy walks.  Forest Therapy Nashville hosts walks for groups and individuals.'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.backgroundImage
        }
      ]
    }
  },
  transition: 'fadeOpacity',
  data() {
    return {
      pageTitle: 'Walks',
      backgroundImage: '/images/women-walk.jpg',
      contentSection1: {
        title: 'Coming soon'
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
