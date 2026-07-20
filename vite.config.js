import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'async-css-link',
      apply: 'build',
      enforce: 'post',
      transformIndexHtml(html) {
        return html.replace(
          /<link rel="stylesheet" crossorigin href="([^"]+\.css)">/g,
          '<link rel="preload" as="style" href="$1" crossorigin><link rel="stylesheet" href="$1" media="print" onload="this.media=\'all\'" crossorigin><noscript><link rel="stylesheet" href="$1" crossorigin></noscript>'
        )
      },
    },
  ],
})
