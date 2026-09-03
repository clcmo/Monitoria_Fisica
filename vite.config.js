import { defineConfig } from 'vite'
import react from '@vitejs.plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Força os arquivos JS/CSS a serem buscados via caminho relativo
})