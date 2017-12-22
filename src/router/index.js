import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home.vue'
import Form from '@/components/form/Form.vue'

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
      path: '/form',
      name: 'Form',
      component: Form
    }
  ]
})
