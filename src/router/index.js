import Vue from 'vue'
import Router from 'vue-router'
import todoList from '@/components/todoList'
import detail from '@/components/prdDetail'
import login from '@/views/Login/login.vue'
import App from '@/App.vue'
import Main from '@/Main.vue'

import VueMeta from 'vue-meta'

Vue.use(Router)
Vue.use(VueMeta)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/login'
    },
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: '/login'
        },
        {
          path: '/login',
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
    },
    {
      path: '/main',
      component: Main,
      children: [
        {
          path: '',
          redirect: '/login2'
        },
        {
          path: 'login2',
          name: 'login2',
          component: login
        }
      ]
    }
  ]
})
