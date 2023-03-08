import Vue from 'vue'
import BarrageApp from './BarrageApp.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'
import {vueBaberrage} from 'vue-baberrage'
Vue.use(VueRouter)
Vue.use(vueBaberrage)
Vue.config.productionTip = false
new Vue({
  render: h => h(BarrageApp),
  router,
  
}).$mount('#app')
