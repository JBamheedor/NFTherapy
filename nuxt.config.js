const axios = require('axios')
const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Forest Therapy Nashville',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Georgia Copeland Bromehead is a trained guide with the Association of Nature and Forest Therapy and leads Forest Therapy nature walks for groups and individuals in the Nashville area landscape. A Forest Therapy guide is trained in specific invitations and sequences that allow for deeper connection to the natural world. Forest Therapy walks are designed to help drop us into our senses and out of our busy minds. All ANFT Forest Therapy walks conclude with a small tea ceremony.'
      },
      {
        name: 'google-site-verification',
        content: 'y7swFzuMxC-apltScpRf1WZ61YpTJNw2zSHvHHjg8e0'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'process.env.baseUrl' + '@/static/images/wood-path.jpg'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Dosis:300|Montserrat:300,300i,400,400i,500&display=swap'
      }
    ],
    // TODO: Check if needed?
    // env: {
    //   baseUrl: process.env.baseUrl || 'http://localhost:3000'
    // },
    script: [
      {
        src:
          'https://cdn.polyfill.io/v2/polyfill.min.js?features=IntersectionObserver'
      },
      {
        src: 'https://use.fontawesome.com/releases/v5.3.1/js/all.js'
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/instafeed.js/1.4.1/instafeed.min.js'
      }
    ]
  },
  router: {
    linkActiveClass: 'active-link',
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }

      const findEl = async (hash, x) => {
        return (
          document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1))
            }, 100)
          })
        )
      }

      if (to.hash) {
        let el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({
            // Adding additional space here to allow for navbar
            top: el.offsetTop - 48,
            behavior: 'smooth'
          })
        } else {
          return window.scrollTo(0, el.offsetTop)
        }
      }
      return { x: 0, y: 0 }
    }
  },

  /*
  ** Customize the progress-bar color
  */
  loading: false,

  /*
  ** Global CSS
  */
  css: ['@assets/css/main.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vee-validate',
    '~plugins/vue-scrollto.js',
    '~/plugins/components'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/style-resources',
    'vue-scrollto/nuxt',
    '@neneos/nuxt-animate.css',
    [
      'storyblok-nuxt',
      {
        accessToken:
          process.env.NODE_ENV == 'production'
            ? 'qyL2Najpyww64mQteJBjuQtt'
            : 'Hi0O5OGcnaH21gKKu9pqVQtt',
        cacheProvider: 'memory'
      }
    ]
  ],

  generate: {
    routes: function() {
      return axios
        .get(
          'https://api.storyblok.com/v1/cdn/stories?version=published&token=qyL2Najpyww64mQteJBjuQtt&cv=' +
            Math.floor(Date.now() / 1e3)
        )
        .then(res => {
          return [
            // TODO: Add routes here inc exp.dynamic ones
            // e.g const somethingdyamic e.g blog post = res.data.stories.map(name => name.full_slug);
            '/',
            '/about'
            // ...somethingDynamic
          ]
        })
    }
  },

  styleResources: {
    scss: ['./assets/css/_variables.scss', '@/assets/css/_variables.scss']
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
