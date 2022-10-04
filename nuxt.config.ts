import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/styles.css', 'leaflet/dist/leaflet.css'],
  buildModules: ['@nuxtjs/tailwindcss', 'unplugin-icons/nuxt'],
  publicRuntimeConfig: {
    MAP_API_KEY: process.env.MAP_API_KEY,
  },
})
