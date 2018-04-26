// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Header from '@/components/common/header'

import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
Vue.config.productionTip = false
// 注册
Vue.component('Header', Header)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  },
  components: { App, Header },
  template: '<App/>'
})
