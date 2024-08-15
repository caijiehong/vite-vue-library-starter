import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { Alias, defineConfig, UserConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(() => {
  const alias: Alias[] = [
    {
      find: /@\//,
      replacement: fileURLToPath(new URL('./src/', import.meta.url)),
    },
  ]
  const config: UserConfig = {
    plugins: [vue(), vueJsx()],
    resolve: {
      alias,
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, './src/index.ts'),
        name: 'ViteVueLibraryStarter',
        fileName: 'vite-vue-library-starter',
      },

      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: ['vue'],
        output: {
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            vue: 'Vue',
          },
        },
      },
      minify: true,
      outDir: 'dist',
    },
  }
  return config
})
