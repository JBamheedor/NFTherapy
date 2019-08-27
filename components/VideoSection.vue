

<template>
  <div class="media-container">
    <iframe
      class="video"
      width="560"
      height="315"
      :src="videoLink"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<script>
export default {
  props: {
    videoLink: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.media-container {
  display: flex;
  justify-content: center;
  padding-bottom: 4rem;
}

.video {
  height: 315px;
}
</style>
