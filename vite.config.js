import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()]
  //base: '/personal-site/', // Make sure to keep the forward slashes on both ends!
})