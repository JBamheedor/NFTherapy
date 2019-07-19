<template>
  <a :href="link" class="column">
    <no-ssr>
      <div class="column__icon">
        <slot name="icon" />
      </div>
    </no-ssr>
    <h2 class="column__header">
      {{ colHeader }}
    </h2>
    <p class="column__text">
      {{ colBody }}
    </p>
  </a>
</template>

<script>
export default {
  props: {
    colHeader: {
      type: String,
      default: ''
    },
    colBody: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.column {
  max-width: 20rem;
  margin: 0 auto;
  padding: 1rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
  &__icon {
    display: flex;
    justify-content: center;
    color: $primary-green;
    svg {
      font-size: 2rem;
    }
  }
  &__header {
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 0.1em;
    font-size: 1.2rem;
    padding: 1rem 0;
  }
  &__text {
    text-align: center;
    color: #4a4a4a;
  }
}
</style>
