import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    watch: {
      // 👈 Ignore the specific mock database file or folder
      ignored: ['**/db.json', '**/server/data/**'], 
    },
  }
})
