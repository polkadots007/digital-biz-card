import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/digital-biz-card/', //repo name for hosting on Github page!
  plugins: [react()],
})
