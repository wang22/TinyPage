import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { VueAxios } from './utils/request'
import './css/style.scss'
import components from './components'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios)
Vue.config.productionTip = false

for (const key in components) {
  Vue.component(key, components[key])
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
