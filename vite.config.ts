import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(async ({ command }) => {
  const plugins = [vue()]

  // Load the devtools plugin only when running the dev server.
  // The plugin (or its dependencies) may access browser globals like localStorage
  // during module initialization which fails when Vite loads the config in Node.
  if (command === 'serve') {
    try {
      const mod = await import('vite-plugin-vue-devtools')
      const vueDevTools = (mod as any).default ?? (mod as any)
      // Some bundlers/types expose the plugin as a callable factory, others export a plugin object.
      try {
        // prefer calling if it's a factory
        plugins.push(typeof vueDevTools === 'function' ? vueDevTools() : vueDevTools)
      } catch (err) {
        plugins.push(vueDevTools as any)
      }
    } catch (e) {
      // If dynamic import fails, continue without the plugin.
      // This avoids crashing the dev server when the plugin expects browser globals.
      // eslint-disable-next-line no-console
      console.warn('vite-plugin-vue-devtools could not be loaded:', e && e.message ? e.message : e)
    }
  }

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
