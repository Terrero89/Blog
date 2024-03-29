const pkg = require('./package')
const bodyParser = require('body-parser')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "Web Blog", //we can change the name, default: json.pkg
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "My personal web Blog" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Open+Sans" }
    ]
  },

  target: 'static',
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fa923f', height: '4px', duration: '5000' },
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },

  /*
  ** Global CSS
  */
  css: [
    'assets/styles/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  //runs code before the app loads
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: process.env.BASE_URL || "https://my-blog-project-48a6f-default-rtdb.firebaseio.com",
    credentials: false,
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },

  env: {
    baseUrl: process.env.BASE_URL || "https://my-blog-project-48a6f-default-rtdb.firebaseio.com",
    apiKey: ''

  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  router: {
    middleware: 'log'
  },

  //collection of node/express middleware
  //to integrate express/node into nuxt


}
