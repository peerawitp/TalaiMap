import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/styles.css', 'leaflet/dist/leaflet.css'],
  buildModules: ['nuxt-windicss', 'unplugin-icons/nuxt', '@tailvue/nuxt'],
  windicss: {
    scan: {
      include: ['node_modules/tailvue/dist/tailvue.es.js'],
    },
  },
  publicRuntimeConfig: {
    MAP_API_KEY: process.env.MAP_API_KEY,
  },
})
