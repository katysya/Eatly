// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-lodash', 'nuxt-primevue', 'nuxt-swiper'],
  primevue: {
    components: {
      include: '*',
    },
  },
  devtools: { enabled: true },
  css: [
    '~/assets/styles/main.scss',
    'primevue/resources/themes/aura-light-green/theme.css',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "~/assets/styles/_variables.scss" as *;',
        },
      },
    },
  },
});
