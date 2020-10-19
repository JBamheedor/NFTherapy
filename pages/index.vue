<template>
  <section class="home">
    <ImageHero :main-title="pageTitle" :style="{ 'background-image': 'url(' + backgroundImage + ')' }" />
    <div class="home__content-container">
      <content-section :section-title="contentSection1.title">
        <p>Forest Therapy is a guided, sense-based and mindful way to be in nature. Taking place in a small area with a Forest Therapy Guide, crafted invitations offer ways to interact with natural beings that make space for healing of mind, body, and spirit in a simple yet profound way. Based on the Japanese practice of “Shinrinyoku,” or “forest bathing,” we “bathe” in not only immune-boosting chemical compounds of nature but also in the feeling of being present and connected. Nashvillians are increasingly fast-paced, disconnected, anxious, and depressed. Forest Therapy Nashville, through this forest therapy practice, invites a way to start healing ourselves and our city.</p>
      </content-section>
      <video-section :video-link="videoSrc" />
      <column-section />
      <content-section :section-title="contentSection2.title">
        <p>
          <a href="https://www.natureandforesttherapy.org/">ANFT</a> certified guides study and learn a particular practice, designed to help you stay embodied and to open the doors for connection with nature, yourself, and others. “The forest is the therapist, the guide opens the doors,” we say. Georgia Bromehead is an ANFT guide in-practicum (Cert. date: 10/2019) certified in Wilderness First Aid, a Nashville native, and a nature and human enthusiast. Working in a pharmacy for the past few years, she has witnessed first-hand the epidemic of anxiety, depression, fatigue, and other health issues in Nashvillians. She hopes she can open the door to the opportunity to reconnect with ourselves, others, and the “more than human” world.
        </p>
      </content-section>
      <instagram-feed />
      <cta-button />
    </div>
  </section>
</template>

<script>
import ContentSection from '@/components/ContentSection.vue'
import ColumnSection from '@/components/ColumnSection.vue'
import ImageHero from '@/components/ImageHero.vue'
import CtaButton from '@/components/CtaButton.vue'
import InstagramFeed from '@/components/InstagramFeed.vue'
import VideoSection from '@/components/VideoSection.vue'

export default {
  components: {
    ContentSection,
    ColumnSection,
    ImageHero,
    CtaButton,
    InstagramFeed,
    VideoSection
  },
  transition: 'fadeOpacity',
  data() {
    return {
      pageTitle: 'Forest Therapy Nashville',
      backgroundImage: '/images/wood-path.jpg',
      anft: 'https://www.natureandforesttherapy.org/',
      videoSrc: 'https://www.youtube.com/embed/ymDZioURcIQ',
      contentSection1: {
        title: 'Welcome'
      },
      contentSection2: {
        title: 'Your Guide'
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
