import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/web2-assignment2/',
  plugins: [react()]
})
