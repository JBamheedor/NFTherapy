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
          // 'https://fonts.googleapis.com/css?family=Dosis:200,300,400,500|Libre+Franklin&display=swap'
          // 'https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500&display=swap'
          'https://fonts.googleapis.com/css?family=Dosis:300|Montserrat:300,300i,400,400i,500&display=swap'
      }
    ],
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
        return document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
          })
      }

      if (to.hash) {
        let el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          console.log(1)
          console.log('22', el.offsetTop)
          return window.scrollTo({
            // Adding additional space here to allow for navbar
            top: el.offsetTop - 48,
            behavior: 'smooth'
          })
        } else {
          console.log(2)
          return window.scrollTo(0, el.offsetTop)
        }
      }
      console.log(3)
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
  plugins: ['~/plugins/vee-validate', '~plugins/vue-scrollto.js'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/style-resources',
    'vue-scrollto/nuxt',
    '@neneos/nuxt-animate.css'
  ],

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
