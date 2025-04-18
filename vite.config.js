import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/WEB2_Assignment2/',
  plugins: [react()]
})
