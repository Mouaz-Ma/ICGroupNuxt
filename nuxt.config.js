export default {
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ICGroupNuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css'
      },
            // Iconfonts for Vuetify. You need to leave only which one you use
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css' },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/4.4.95/css/materialdesignicons.min.css' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/direction-control',
    "~/plugins/TiptapVuetify"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    'nuxt-i18n',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/auth',
    '@nuxtjs/fontawesome',
    '@nuxtjs/moment',
    "@nuxtjs/vuetify"
  ],
  fontawesome: {
    icons: {
      regular: ["faEnvelope"],
      brands: [
        "faGoogle",
        "faFacebook",
        "faFacebookF",
        "faFacebookMessenger",
        "faInstagram",
        "faTwitter",
        "faWhatsapp",
        "faPinterest",
        "faTelegramPlane"
      ]
    }
  },
  moment: {
    timezone: true
  },
  bootstrapVue: {
    // Install the `IconsPlugin` plugin (in addition to `BootstrapVue` plugin)
    icons: true
  },
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en.js',
        dir: 'ltr'
      },{
        code: 'ar',
        name: 'العربية',
        iso: 'ae-AE',
        file: 'ar.js',
        dir: 'rtl'
      },
    ],
    langDir: "static/lang",
    lazy: true,
    defaultLocale: 'en',
    strategy: 'no_prefix',
  },
  axios: {
    proxy: true,
    BaseURL: process.env.API_URL,
    // proxyHeaders: false,
    // credentials: false
  },

  proxy: {
    "/api": process.env.API_URL
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vuetify/lib', "tiptap-vuetify"]
  },
  // router: {
  //   middleware: ['auth']
  // },


  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/users/login',
            method: 'post',
            propertyName: "token"
          },
          logout: {
            url: '/api/users/logout',
            method: 'post',
          },
          user: {
            url: '/api/users/user',
            method: 'get'
          }
        }
        },
        facebook: {
          client_id: '332127222262076',
          userinfo_endpoint: 'https://graph.facebook.com/me?fields=about,name,picture.typr(large){url},email,birthday',
          scope: ['public_profile', 'email', 'user_birthday']
        },
        google: {
          client_id: '160001613518-8qdslgbi9iq1h2f01p31utp6mpd2scd5.apps.googleusercontent.com'
        }
      },

      redirect: {
        login: '/users/signIn',
        logout: '/',
        callback: '/users/signIn',
        home: '/'
      },
          }
}
