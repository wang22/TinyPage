import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './css/index.css'
import components from './components'

const app = createApp(App)

for (let key in components) {
    app.component(key, components[key])
}

app.use(store).use(router).mount('#app')
