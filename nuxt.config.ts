// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    // Simple usage
    "@nuxtjs/stylelint-module", // With options
    [
      "@nuxtjs/stylelint-module",
      {
        /* module options */
      },
    ],
    "@nuxt/eslint",
  ],
});
