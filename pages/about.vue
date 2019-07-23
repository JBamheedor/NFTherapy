<template>
  <section class="about">
    <ImageHero :main-title="pageTitle" :style="{ 'background-image': 'url(' + backgroundImage + ')' }" />
    <div class="about__content-container">
      <content-section
        id="meet-your-guide"
        :section-title="contentSection1.title"
        :image="true"
        :section-image="profilePic"
      >
        <p>While teaching English in Japan, I had surprise and admiration for the kindergarten I taught in. Nature was part of every day there, windows open, shoes off, animals being brought in to be studied. While I taught, I could look out the big open windows and only see the bottoms of giant cedar trees, close and above us on the hillside. I started researching forest-based preschools and stumbled upon the ANFT website. A new way to connect with nature for all ages, not just kids? I was very intrigued. Moving back to the States I began marketing and natural supplement guidance at a local pharmacy. I heard patients’ stories about anxiety, depression, and fatigue again and again. “This is just not me,” they’d say. It was clearer than ever to me that reconnecting with the healing power of nature, with ourselves, and with others would serve not only us but our community and the world as a whole. I hope to facilitate the opportunity to a remembrance of the roots of ourselves and the world around us.</p>
      </content-section>
      <FAQSection id="faqs" />
    </div>
  </section>
</template>

<script>
import ContentSection from '@/components/ContentSection.vue'
import ImageHero from '@/components/ImageHero.vue'
import FAQSection from '@/components/FAQSection.vue'
export default {
  components: {
    ContentSection,
    ImageHero,
    FAQSection
  },
  head() {
    return {
      title: 'About | Forest Therapy Nashville',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Georgia Copeland Bromehead is a trained guide with the Association of Nature and Forest Therapy and leads Forest Therapy nature walks for groups and individuals in the Nashville area landscape. A Forest Therapy guide is trained in specific invitations and sequences that allow for deeper connection to the natural world. Forest Therapy walks are designed to help drop us into our senses and out of our busy minds. All ANFT Forest Therapy walks conclude with a small tea ceremony.'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.profilePic
        }
      ]
    }
  },
  transition: 'fadeOpacity',
  data() {
    return {
      sectionClass: 'about',
      profilePic: '/images/georgia-profile.jpg',
      pageTitle: 'About',
      backgroundImage: '/images/about-hero.jpg',
      contentSection1: {
        title: 'About Georgia'
      }
    }
  }
}
</script>
// Style not scoped
<style lang="scss">
.about {
  .img__container {
    max-width: 18rem;
    display: flex;
    height: 20rem;
    justify-content: center;
    margin: 0 auto;
    padding: 0 0 2rem;
  }

  .img-section {
    box-shadow: 0 10px 20px rgba(80, 118, 110, 0.19),
      0 6px 6px rgba(80, 118, 110, 0.23);
  }
}

@media only screen and (min-width: 1088px) {
  .about {
    .img__container {
      max-width: none;
      width: auto;
      height: auto;
      display: block;
      margin: 0 auto;
      padding: 0.4rem 2rem 0 0;
    }
  }
}
</style>
