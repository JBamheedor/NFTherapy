<template>
  <section class="about">
    <Hero />
    <ImageHero :main-title="pageTitle" :style="{ 'background-image': 'url(' + backgroundImage + ')' }" />
    <div class="about__content-container">
      <content-section
        id="meet-your-guide"
        :section-title="title"
        :image="true"
        :section-image="profilePic"
      >
        <p>{{ Content }}</p>
      </content-section>
      <FAQSection id="faqs" />
    </div>
  </section>
</template>

<script>
import ContentSection from '@/components/ContentSection.vue'
import ImageHero from '@/components/ImageHero.vue'
import FAQSection from '@/components/FAQSection.vue'
import Hero from '@/components/Hero.vue'

export default {
  components: {
    ContentSection,
    ImageHero,
    FAQSection,
    Hero
  },
  data() {
    return {
      sectionClass: 'about',
      profilePic: '/images/georgia-profile.jpg',
      pageTitle: 'About',
      backgroundImage: '/images/about-hero.jpg'
      // contentSection1: {
      //   // title: 'About Georgia'
      // }
    }
  },
  // TODO: Update prod / dev check
  asyncData(context) {
    // Check if we are in the editor mode
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'

    // Load the JSON from the API
    return context.app.$storyapi
      .get('cdn/stories/about', {
        version: version
      })
      .then(res => {
        console.log(res.data.story.content.body[0].Title)
        return {
          title: res.data.story.content.body[0].Title,
          Content: res.data.story.content.body[0].Content
        }
      })
      .catch(res => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        })
      })
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
  transition: 'fadeOpacity'
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
