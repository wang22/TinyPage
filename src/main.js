import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './css/style.css'
import VueTailwind from 'vue-tailwind'
import settings from './settings'

Vue.config.productionTip = false

Vue.use(VueTailwind, settings)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
