// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-graphql-client',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@davestewart/nuxt-scrollbar'
  ],
  buildModules: [
    '@pinia/nuxt',
  ],
  
  colorMode: {
    classSuffix: ''
  },
  runtimeConfig: {
    public: {
      GQL_HOST: 'https://staging-api.tatmeen.sa/graphql' // overwritten by process.env.GQL_HOST
    }
  },
  pages:true,
  tailwindcss: {

    configPath: '~/tailwind.config.js',

    cssPath: '~/assets/css/tailwind.css'

  },
  // router: {
  //   middleware: ['auth']
  // },
  plugins: [
    // '~/plugins/toast.js',
    // '~/plugins/vue-tel-input.js'
  
  ]

})