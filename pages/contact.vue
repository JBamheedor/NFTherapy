<template>
  <section class="contact">
    <ImageHero :main-title="pageTitle" :style="{ 'background-image': 'url(' + backgroundImage + ')' }" />
    <div class="contact__content-container">
      <content-section :section-title="contentSection1.title" :section-text="contentSection1.text" />
    </div>
    <ContactForm />
  </section>
</template>

<script>
import ContentSection from '@/components/ContentSection.vue'
// import ColumnSection from '@/components/ColumnSection.vue'
import ImageHero from '@/components/ImageHero.vue'
import ContactForm from '@/components/ContactForm.vue'

export default {
  components: {
    ContentSection,
    // ColumnSection,
    ImageHero,
    ContactForm
  },
  data() {
    return {
      pageTitle: 'Contact Page',
      backgroundImage: '/images/background-trees.jpg',
      contentSection1: {
        title: 'Get in touch',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
