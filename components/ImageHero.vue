<template>
  <div class="hero__image">
    <div class="hero__image-container">
      <h1 class="hero__image-heading main-heading has-text-light">
        {{ mainTitle }}
      </h1>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    mainTitle: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.hero__image {
  //   background-image: url('~assets/images/background-trees.jpg');
  height: 50vh;
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
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: fadein 3s;
      -moz-animation: fadein 3s; /* Firefox */
      -webkit-animation: fadein 3s; /* Safari and Chrome */
      -o-animation: fadein 3s; /* Opera */
    }
  }
}

@keyframes fadein {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
