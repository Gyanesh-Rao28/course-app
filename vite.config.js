import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
   
  },
  server:{
    proxy:{
      '/api': 'https://course-app-api-beta.vercel.app'
    }
  },
  plugins: [react()],
})
