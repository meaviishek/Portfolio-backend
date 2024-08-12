import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/views':'https://portfolio-backend-delta-ochre.vercel.app'
    },
  },
  plugins: [react()],
})
