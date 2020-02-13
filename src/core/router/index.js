import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'index' },
    { path: '*', redirect: '/' }
  ],
  scrollBehavior: () => ({ y: 0 })
})

export default router
