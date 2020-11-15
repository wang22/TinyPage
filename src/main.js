import Vue from 'vue'
import App from './App.vue'
import components from './components/index'
import './theme/theme'

Vue.config.productionTip = false

for (let key in components) {
  Vue.component(key, components[key]);
}

new Vue({
  render: h => h(App),
}).$mount('#app')
