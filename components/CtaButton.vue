<template>
  <div class="button__container max">
    <nuxt-link to="/about" class="button connect">
      Find out more
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.button__container {
  padding: 0 6%;
  margin: 4rem auto;
  display: flex;
  justify-content: center;

  .button {
    height: 3rem;
    border: 0.1rem solid transparent;
    box-shadow: 0px 15px 15px rgba(80, 118, 110, 0.1);
    border-radius: 0.2rem;
    background: white;
    color: $primary-brown;
    border: 0.1rem solid $footer-green;
    font-family: $heading-font;
    font-size: 1.2rem;
    font-weight: 300;
    text-transform: uppercase;
    display: inline-block;
    vertical-align: middle;
    transition: ease-out 0.25s all;

    &:hover {
      background: $footer-green;
      color: white;

      transition: ease-out 0.25s all;
    }
  }
  .connect {
    display: flex;
    padding: 0 2rem;
  }
}
</style>
