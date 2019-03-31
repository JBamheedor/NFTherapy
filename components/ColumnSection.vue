<template>
  <div class="infoColumns">
    <div class="infoColumns__container max">
      <div class="columns">
        <div class="column">
          <h2 class="column__header">
            Benefit 1
          </h2>
          <p class="column__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="column">
          <h2 class="column__header">
            Benefit 2
          </h2>
          <p class="column__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="column">
          <h2 class="column__header">
            Benefit 3
          </h2>
          <p class="column__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.infoColumns {
  background-color: $light-green;
  overflow: hidden;
  margin: 0 auto;
  padding: 0 4rem;
  &__container {
    margin: 2rem auto;
  }
  .columns {
    margin: 0;
    text-align: center;
    .column {
      padding: 2rem;
      &__header {
        font-size: 1.75rem;
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
