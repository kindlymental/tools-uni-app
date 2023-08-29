import { createSSRApp } from 'vue'
import App from './App.vue'
import { loadDirectives } from '@/directives'

export function createApp() {
  const app = createSSRApp(App)
  loadDirectives(app)
  return {
    app,
  }
}
