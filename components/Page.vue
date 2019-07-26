<template>
  <div v-editable="blok" class="page">
    <component :is="blok.component" v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
