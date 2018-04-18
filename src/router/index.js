import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import todoList from '@/components/todoList'
import detail from '@/components/prdDetail'
import VueMeta from 'vue-meta'

Vue.use(Router)
Vue.use(VueMeta)

export default new Router({
  routes: [
    {
      path: '/',
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
