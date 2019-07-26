<template>
  <div v-editable="blok" class="hero__image" :style="{ 'background-image': 'url(' + blok.hero_image + ')' }">
    <div class="hero__image-container">
      <h1 class="hero__image-heading main-heading has-text-light">
        {{ blok.hero_title }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.hero__image {
  height: 65vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &-container {
    height: 100%;
    position: relative;
    text-align: center;
    color: white;

    .hero__image-heading {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
