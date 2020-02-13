import Vue from 'vue'
import Router from 'vue-router'
import Index from '@pages/Index.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'index', component: Index },
    { path: '*', redirect: '/' }
  ],
  scrollBehavior: () => ({ y: 0 })
})

export default router
