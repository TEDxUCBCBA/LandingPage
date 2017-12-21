import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home.vue'
import Registration from '@/components/registration/Registration.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'registration',
      component: Registration
    }
  ]
})
