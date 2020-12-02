import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import components from './components/index'

const app = createApp(App);
for (let key in components) {
    app.component(key, components[key]);
}

app.mount('#app');