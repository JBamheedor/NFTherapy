// Storyblok’s Javascript bridge needs to be registered in the mounted hook of every page component to enable the Live Preview feature. To avoid duplicating the code on every we create the following Vuejs mixin in a new folde
export default {
  mounted() {
    this.$storybridge.on(['published', 'change'], event => {
      if (!event.slugChanged) {
        // Reload the page on save events (publish, save button or autosave)
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true
        })
      }
    })
  }
}
