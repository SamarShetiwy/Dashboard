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
  nuxtIcon: {
    size: '24px', 
    class: 'icon',
    aliases: {
      'nuxt': 'logos:nuxt-icon',
    }
  },
  colorMode: {
    classSuffix: ''
  },
  runtimeConfig: {
    public: {
      GQL_HOST: 'https://staging-api.tatmeen.sa/graphql' // overwritten by process.env.GQL_HOST
    }
  },
  tailwindcss: {

    configPath: '~/tailwind.config.js',

    cssPath: '~/assets/css/tailwind.css'

  },
    plugins: ['~/plugins/modal.js']

})