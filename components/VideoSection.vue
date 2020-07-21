

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
    <div class="caption">
      <p class="caption__copy">
        A little video peek at a Forest Therapy experience with ANFT guide in Illinois. Forest Therapy walks are happening all over the world, in all seasons.
      </p>
    </div>
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
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 4rem;
}

.video {
  height: 315px;
}

.caption {
  margin: 20px auto 0;
  padding: 0 6%;
}
</style>
