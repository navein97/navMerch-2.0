import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/naveinthirankulaendran/Downloads/youtube2023-nuxt3-vuetify3-cart/nuxt3-cart/node_modules/.pnpm/nuxt@3.0.0_rollup@2.79.1_sass@1.70.0/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}