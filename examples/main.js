import Vue from 'vue'
import App from './App.vue'

import '../packages/scss/index.scss';
import {KaButton,KaCard} from '../packages/index'
Vue.use(KaButton).use(KaCard);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
