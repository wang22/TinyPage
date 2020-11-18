import Vue from 'vue'
import App from './App.vue'
import components from './components/index'
import router from './router'
import clickoutsideDirective from './directive/clickoutside'
import './theme/theme'


Vue.config.productionTip = false
for (let key in components) {
  Vue.component(key, components[key]);
}

Vue.directive('clickoutside', clickoutsideDirective);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
