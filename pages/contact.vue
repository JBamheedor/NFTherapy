<template>
  <section class="contact">
    <ImageHero :main-title="pageTitle" :style="{ 'background-image': 'url(' + backgroundImage + ')' }" />
    <div class="contact__content-container">
      <content-section :section-title="contentSection1.title">
        <p>Please reach out to me below:</p>
      </content-section>
    </div>
    <ContactForm />
  </section>
</template>

<script>
import ContentSection from '@/components/ContentSection.vue'
import ImageHero from '@/components/ImageHero.vue'
import ContactForm from '@/components/ContactForm.vue'

export default {
  components: {
    ContentSection,
    ImageHero,
    ContactForm
  },
  head() {
    return {
      title: 'Contact | Forest Therapy Nashville',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Contact Forest Therapy Nashville to ask questions or schedule a guided Forest Therapy walk. Forest Therapy walks in Nashville can be accessed through Forest Therapy Nashville.'
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
      pageTitle: 'Contact Page',
      backgroundImage: '/images/contact-hero.jpg',
      contentSection1: {
        title: 'Get in touch'
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
