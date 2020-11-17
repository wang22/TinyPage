import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import components from './components/index'
import routes from './router'
import './theme/theme'


Vue.config.productionTip = false
for (let key in components) {
  Vue.component(key, components[key]);
}

Vue.directive('clickoutside', require('./directive/clickoutside'));
Vue.use(VueRouter);

const router = new VueRouter({
  esModule: false,
  mode: 'history',
  router: routes,
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
