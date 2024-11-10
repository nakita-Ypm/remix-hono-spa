import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import serverAdapter from 'hono-remix-adapter/vite'

export default defineConfig({
  plugins: [
    remix({
      ssr: false,
    }),
    serverAdapter({
      entry: 'server/index.ts',
    }),
  ],
})
