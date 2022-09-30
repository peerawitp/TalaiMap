import { defineConfig } from 'windicss/helpers'
export default defineConfig({
  plugins: [
    require('daisyui'),
    require('windicss/plugin/typography'),
    require('windicss/plugin/aspect-ratio'),
  ],
})
