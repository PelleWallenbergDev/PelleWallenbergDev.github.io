import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(async ({ command }) => {
  const plugins = [vue()]

  // NOTE: vite-plugin-vue-devtools intentionally not loaded here to avoid
  // plugin code accessing browser-only globals (like localStorage) during
  // Vite config evaluation in Node. If you want to enable Vue DevTools,
  // run it as a standalone browser extension or add the plugin manually
  // in a local developer-only wrapper that guards against server-side load.

  return {
    plugins,
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        portfolio: 'portfolio.html',
        home: 'home.html',
        warehouse: 'warehouse.html'
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  }
})
