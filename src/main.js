import './assets/main.css'
import store from './store/store.js'
import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

const app = createApp(App)

app.use(router, store)

app.mount('#app')
