<template>
  <section class="walks">
    <ImageHero :main-title="pageTitle" :style="{ 'background-image': 'url(' + backgroundImage + ')' }" />
    <div class="walks__content-container" />
    <content-section :section-title="contentSection1.title">
      <p>
        My next walk as part of International Forest Bathing Day will take place at Beaman Park, Creekside Trailhead, Ashland City, TN 37015 Saturday, September 7, 2019. More information and the Eventbrite booking page can be found below:
      </p>
    </content-section>
    <div class="event">
      <div class="button__container max">
        <a class="button connect" href="https://www.eventbrite.com/e/forest-therapy-walk-for-international-forest-bathing-day-tickets-70291332267?ref=elink" target="_blank">Walk Info</a>
      </div>
    </div>
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
      ],
      script: [
        {
          src: 'https://www.eventbrite.com/static/widgets/eb_widgets.js'
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
        title: 'Upcoming walks'
      }
    }
  }
}
</script>

<style  lang="scss">
.button__container {
  margin-top: 0;
}
</style>
