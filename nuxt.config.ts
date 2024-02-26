// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "nuxt-primevue",
    '@nuxtjs/apollo',
    "@nuxtjs/google-fonts",
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:8080/v1/graphql'
      }
    },
  },
  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    }
  },
});


