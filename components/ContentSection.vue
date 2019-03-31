<template>
  <div class="content">
    <div class="content__container max">
      <h1 class="content__heading">
        {{ sectionTitle }}
      </h1>
      <div class="content__text">
        <p>
          {{ sectionText }}
        </p>
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
    sectionText: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin-bottom: 0;
  .content__container {
    margin: 4rem auto;
    padding: 0 6%;
    text-align: center;
    .content__heading {
      font-family: $heading-font;
      font-size: 3rem;
      color: #4a2619;
      font-weight: 400;
    }
  }
}
</style>
