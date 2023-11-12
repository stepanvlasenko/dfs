import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: "dfs",
        short_name:"dfs",
        description: "Xfit Россошь App for Junior Developer Teams 2023 by Vlasenko Stepan and Domanov Fedor",
        start_url:"/",
        display:"standalone",
        background_color:"#ffffff",
        scope:"/",
        icons: [
          {
            src: "/images/pwa-svg.svg",
            sizes: "any",
            type: "image/svg+xml",
          },
          {
            src: '/images/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/images/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          }
        ],
        screenshots: [
          {
            form_factor: 'wide',
            src: '/images/pwa-screenshot-wide.png',
            label: 'desktop',
            sizes: '1920x1080',
            type: 'image/png'
          },
          {
            form_factor: 'narrow',
            src: '/images/pwa-screenshot-narrow.png',
            label: 'mobile',
            sizes: '768x1024',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  build: {
    target: 'esnext',
  },
})
