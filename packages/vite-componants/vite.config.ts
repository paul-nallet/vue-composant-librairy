import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import path from 'path'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts(), vanillaExtractPlugin()],
  build:{
    lib:{
      entry: path.resolve(__dirname, 'src/main.ts'),
      formats: ['es']
    },
    rollupOptions:{
      external: ['vue'],
      output:{
        globals:{
          vue: 'Vue'
        }
      }
    }
  }
})
