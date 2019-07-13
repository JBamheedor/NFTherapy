<template>
  <div class="faq">
    <div class="faq__container max">
      <div class="content__heading">
        <h1 class="header">
          {{ sectionTitle }}
        </h1>
      </div>
      <div class="content__text">
        <p>
          {{ sectionText }}
        </p>
      </div>
    </div>
     
    <div class="faq-accordion max">
      <NoSsr>
        <bulma-accordion>
          <bulma-accordion-item>
            <h3 slot="title">
              Is this a hike?
            </h3>
            <p slot="content">
              While hiking is a wonderful way to be in nature, forest therapy is not a hike. In fact, it’s the opposite! Staying in a small area, usually less than a mile radius, we move slowly and enjoy the details that we sometimes miss when walking past. There is no destination, but simply a different way to be with nature than most of us experience. 
            </p>
          </bulma-accordion-item>
          <bulma-accordion-item>
            <h3 slot="title">
              Why can’t I just do this myself?
            </h3>
            <p slot="content">
              ANFT guides are specifically trained in sequences and philosophy that helps us look at the world differently. With practice you may begin you own forest bathing, but let me help you at first. Another important part of Forest Therapy is connecting with other human beings in the experience, an occasion for “culture repair.
            </p>
          </bulma-accordion-item>
          <bulma-accordion-item>
            <h3 slot="title">
              Is this just therapy outside?
            </h3>
            <p slot="content">
              Yes and no. There is a healing experience available, but the forest is the true therapist. I am simply the guide that “opens the doors,” as we like to say.  
            </p>
          </bulma-accordion-item>
          <bulma-accordion-item>
            <h3 slot="title">
              Is this a bath in the forest?
            </h3>
            <p slot="content">
              Sorry, no. All clothing remains on. Though you are bathing in phytoncides releases by the trees, boosting your immunity!
            </p>
          </bulma-accordion-item>
          <bulma-accordion-item>
            <h3 slot="title">
              What should I wear?
            </h3>
            <p slot="content">
              Wear something you feel comfortable sitting down in and shoes ok for uneven terrain. We aren’t hiking, but you’ll likely walk “off trail” and be invited to sit on the ground on some occasions. Please dress for the weather- sun hats, sunscreen, bug spray, in Summer and warm clothes in Winter! Always bring water. I’ll contact you before the walk and you’re free to always ask about attire or gear if unsure.
            </p>
          </bulma-accordion-item>
          <bulma-accordion-item>
            <h3 slot="title">
              What should I expect?
            </h3>
            <p slot="content">
              Having no expectations is the best way to enter forest therapy walk. You can expect, though, our walk to be about 2-3 hours and to conclude with a small tea ceremony.
            </p>
          </bulma-accordion-item>
        </bulma-accordion>
      </NoSsr>
    </div>
  </div>
</template>

<script>
import { BulmaAccordion, BulmaAccordionItem } from 'vue-bulma-accordion'
export default {
  components: {
    BulmaAccordion,
    BulmaAccordionItem
  },
  data() {
    return {
      sectionTitle: 'FAQS',
      sectionText: `Here's a selection of common questions, if you have a more specific question or any inquiry in general please reach out.`
    }
  }
}
</script>

<style lang="scss" scoped>
.faq {
  margin: 0;

  .faq__container {
    margin: 0 auto 2rem;
    padding: 0 6%;

    .content__heading {
      .header {
        font-family: $heading-font;
        letter-spacing: 0.1em;
        font-size: 1.2rem;
        color: #4a2619;
        font-weight: 300;
        padding-bottom: 0.5rem;
        margin: 0 auto 1.5rem;
        border-bottom: 2px solid $primary-green;
        width: fit-content;
      }
    }
  }

  .faq-accordion {
    padding: 0 6% 4rem;
  }
}
</style>
