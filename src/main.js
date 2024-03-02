import { createApp } from 'vue'
import '../src/assets/styles/style.css'
import '../src/assets/styles/normalize.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
