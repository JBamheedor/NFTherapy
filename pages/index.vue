<template>
  <section class="home">
    <ImageHero :main-title="pageTitle" :style="{ 'background-image': 'url(' + backgroundImage + ')' }" />
    <div class="home__content-container">
      <content-section :section-title="contentSection1.title" :section-text="contentSection1.text" />
      <column-section />
      <div class="parallax">
        <!-- <parallax :section-height="50">
          <img src="~assets/images/home-trees-light.jpg" alt="Woodland parallax image">
        </parallax> -->
      </div>
      <content-section :section-title="contentSection2.title" :section-text="contentSection2.text" />
    </div>
  </section>
</template>

<script>
import ContentSection from '@/components/ContentSection.vue'
import ColumnSection from '@/components/ColumnSection.vue'
import ImageHero from '@/components/ImageHero.vue'

// import Parallax from 'vue-parallaxy'

export default {
  components: {
    // Parallax,
    ContentSection,
    ColumnSection,
    ImageHero
  },
  data() {
    return {
      pageTitle: 'Forest Therapy Nashville',
      backgroundImage: '/images/wood-path.jpg',
      contentSection1: {
        title: 'Welcome',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident'
      },
      contentSection2: {
        title: 'More information title',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident'
      }
    }
  }
}
</script>

<style scoped lang="scss">
// Parallax config
.parallax {
  .Masthead {
    min-height: 50vh;
    .Masthead__image {
      height: 140%;
    }
  }
}
</style>
