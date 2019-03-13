<template>
  <section class="home">
    <div class="home__background">
      <div class="home__heading-container">
        <h1 class="home__heading main-heading has-text-light">
          Nashville Forest Therapy
        </h1>
      </div>
    </div>
    <div class="home__container">
      <div class="home__info info-container">
        <h1 class="page-heading">Welcome Title</h1>
        <div class="intro-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
          </p>
        </div>
      </div>
      <div class="home__benefits info-container has-background-light">
        <div class="columns">
          <div class="column">
            First column
          </div>
          <div class="column">
            Second column
          </div>
          <div class="column">
            Third column
          </div>
          <div class="column">
            Fourth column
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.home__benefits {
  margin-bottom: 500px;
}
.home {
  &__container {
    text-align: center;
  }
  &__background {
    background-image: url('~assets/images/background-trees.jpg');
    height: 50vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .home__heading-container {
      height: 100%;
      position: relative;
      text-align: center;
      color: white;
      .home__heading {
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: fadein 2s;
        -moz-animation: fadein 2s; /* Firefox */
        -webkit-animation: fadein 2s; /* Safari and Chrome */
        -o-animation: fadein 2s; /* Opera */
      }
    }
  }
}
@keyframes fadein {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.75;
  }
  100% {
    opacity: 1;
  }
}
</style>
