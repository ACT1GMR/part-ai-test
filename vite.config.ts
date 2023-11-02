import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://act1gmr.github.io/part-ai-test/',
  plugins: [react()],
})
