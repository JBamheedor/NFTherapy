<template>
  <section :class="story.name">
    <component :is="story.content.component" v-if="story.content.component" :key="story.content._uid" :blok="story.content" />
  </section>
</template>

<script>
import storyblokLivePreview from '@/mixins/storyblokLivePreview'

export default {
  transition: 'fadeOpacity',

  mixins: [storyblokLivePreview],

  data() {
    return { story: { content: {} } }
  },

  asyncData(context) {
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'
    // Load the JSON from the API
    return context.app.$storyapi
      .get('cdn/stories/home', {
        version: version
      })
      .then(res => {
        console.log(res.data.story.content)
        return res.data
      })
      .catch(res => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        })
      })
  }
}
</script>
