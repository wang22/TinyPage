import Vue from 'vue'
import App from './App.vue'
import components from './components/index'
import './theme/theme'
import clickoutside from './directive/clickoutside'

Vue.config.productionTip = false

for (let key in components) {
  Vue.component(key, components[key]);
}

Vue.directive('clickoutside', clickoutside);

new Vue({
  render: h => h(App),
}).$mount('#app')
