import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/family-lore/', // GitHub Pages path
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Family Lore',
        short_name: 'Family Lore',
        description: 'Family Lore PWA using Vite + React',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
