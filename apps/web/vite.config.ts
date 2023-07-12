import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import Inspect from 'vite-plugin-inspect'
import Checker from 'vite-plugin-checker'
import TsconfigPaths from 'vite-tsconfig-paths'
import { VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'shared': path.resolve(__dirname, '../../packages/shared'),
    },
  },
  plugins: [
    Vue(),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dts: 'src/types/components.d.ts',
      deep: true,
      directoryAsNamespace: true,
      include: [/\.vue$/, /\.vue\?vue/],
      globalNamespaces: ['components'],
      dirs: ['src/components', 'src/layouts'],
      resolvers: [VueUseComponentsResolver()],
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/types/auto-import.d.ts',
      vueTemplate: true,
      eslintrc: {
        enabled: true,
      },
    }),

    // https://github.com/antfu/unocss
    Unocss(),

    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'lang/**')],
    }),

    // https://github.com/antfu/vite-plugin-inspect
    Inspect(),

    // https://github.com/fi3ework/vite-plugin-checker
    Checker({
      vueTsc: true,
    }),
  ],

  server: {
    host: true,
  },
})
