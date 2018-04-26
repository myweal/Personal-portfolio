import Vue from 'vue'
import Router from 'vue-router'
import todoList from '@/components/todoList'
import detail from '@/components/prdDetail'
import login from '@/views/Login/login.vue'
import VueMeta from 'vue-meta'

Vue.use(Router)
Vue.use(VueMeta)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/list',
      name: 'list',
      component: todoList
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail,
      props: true
    }
  ]
})
