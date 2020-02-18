import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import App from '@/components/app/App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
