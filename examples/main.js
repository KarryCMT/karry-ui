import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import '../packages/css/index.scss';
import {KaButton,KaCard} from '../packages/index'
Vue.use(KaButton).use(KaCard);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
