import Vue from 'vue'
import router from '@router'
import store from '@store'
import App from '@comp/app/App'
import Plugin from '@plugins'

Vue.config.productionTip = false

Vue.use(Plugin, { someOption: true })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
