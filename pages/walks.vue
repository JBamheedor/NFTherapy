<template>
  <section class="walks">
    <ImageHero :main-title="pageTitle" :style="{ 'background-image': 'url(' + backgroundImage + ')' }" />
    <div class="walks__content-container" />
    <content-section :section-title="contentSection1.title">
      <p>
        My next series of walks will take place at <a href="https://cheekwood.org/forest-bathing/" target="_blank">Cheekwood Estate & Gardens</a> each Wednesday throughout August. We will be offering a gentle sensory walk on the newly renovated Carell Trail. - SOLD OUT
      </p>
      <p>
        I will also be running the following walks throughout fall 2020:
      </p>
      <ul>
        <li>
          <a target="_blank" href="https://www.eventbrite.com/e/forest-therapy-walk-september-19-2020-ticket-required-tickets-115415664359">
            September 19: Beaman Park
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.eventbrite.com/e/forest-therapy-walk-october-16-2020-ticket-required-tickets-115417919103">
            October 16: Beaman Park
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.eventbrite.com/e/forest-therapy-walk-november-7-2020-ticket-required-tickets-115418693419">
            November 7: Beaman Park
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.eventbrite.com/e/forest-therapy-walk-december-5-2020-ticket-required-tickets-115419036445">
            December 5: Beaman Park
          </a>
        </li>
      </ul>
      <p>
        If you have a group and would like a private walk please contact me at <a href="mailto:connect@foresttherapynashville">connect@foresttherapynashville</a>
      </p>
    </content-section>
    <!-- <div class="event">
      <div class="button__container max">
        <a class="button connect" href="https://cheekwood.org/register-for-forest-bathing/" target="_blank">Walk Info</a>
      </div>
    </div> -->
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
