<template>
  <div class="content">
    <div class="content__container max">
      <div class="content__heading">
        <h1 class="header">
          {{ sectionTitle }}
        </h1>
      </div>
      <div class="content__wrap">
        <div v-if="image" class="img__container">
          <img class="img-section" :src="sectionImage" :class="imageClass" alt="Guide profile picture">
        </div>
        <div class="content__text">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sectionTitle: {
      type: String,
      default: ''
    },
    // sectionText: {
    //   type: String,
    //   default: ''
    // },
    image: {
      type: Boolean,
      default: false
    },
    sectionImage: {
      type: String,
      default: ''
    },
    imageClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  padding: 4rem 0;
  margin-bottom: 0;

  .content__container {
    margin: 3rem auto;

    margin: 0 auto;
    padding: 0 6%;
    .content__heading {
      min-width: 25%;

      .header {
        font-family: $heading-font;
        color: #4a2619;
        font-weight: 300;
        letter-spacing: 0.1em;
        font-size: 1.2rem;
        padding-bottom: 0.5rem;
        text-transform: uppercase;
        line-height: 1;
        border-bottom: 0.1rem solid $primary-green;
        width: fit-content;
        margin: 0 auto 1.5rem;
      }
    }

    .content__wrap {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
  }
}

@media only screen and (min-width: 1088px) {
  .content {
    .content__container {
      .content__wrap {
        display: flex;
        flex: 1;
        flex-direction: row;
      }
    }
  }
}
</style>
