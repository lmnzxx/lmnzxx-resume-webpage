import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "swiper/css": "swiper/swiper.min.css",
      "swiper/css/navigation": "swiper/modules/navigation.min.css",
      "swiper/css/pagination": "swiper/modules/pagination.min.css",
    }
  }
})
