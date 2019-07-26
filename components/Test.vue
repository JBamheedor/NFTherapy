<template>
  <div v-editable="blok">
    <h1 class="hero__image-heading main-heading has-text-light">
      {{ blok.title }}
    </h1>
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
</style>
