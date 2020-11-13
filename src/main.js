import Vue from 'vue'
import App from './App.vue'
import './theme/theme.css'
import baseComponents from './components/base/index'

Vue.config.productionTip = false

for (let key in baseComponents) {
  Vue.component(key, baseComponents[key])
}

new Vue({
  render: h => h(App),
}).$mount('#app')
