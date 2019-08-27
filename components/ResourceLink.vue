<template>
  <div class="resource-link">
    <i :class="iconClass" />
    <a class="link-item" :href="link" target="_blank">{{ linkTitle }}</a>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: ''
    },
    linkTitle: {
      type: String,
      default: ''
    },
    iconClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
svg {
  color: $primary-green;
  margin-right: 0.5rem;
  width: 0.5rem !important;
}

.link-item {
  color: #4a4a4a;
  &:hover {
    color: $dark-green;
  }
}
</style>
