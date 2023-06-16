import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import router from './router'
import i18n from './locales/i18n'
import './sass/main.scss'

createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app')
