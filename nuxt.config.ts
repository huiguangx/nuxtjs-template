// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  modules: [
    // Simple usage
    "@nuxt/eslint",
    "@nuxt/image",
    "nuxt-icons",
    "@nuxt/ui",
  ],
  typescript: {
    typeCheck: false,
  },
});
