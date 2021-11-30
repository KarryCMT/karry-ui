import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../components/css/index.scss';
import Demo from '../components/lib/button/index';
Vue.use(Demo);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
