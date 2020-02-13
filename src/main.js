import Vue from 'vue'
import { router } from '@/core'
import App from '@/components/app/App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
