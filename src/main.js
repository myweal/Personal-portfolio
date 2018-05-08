// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
import Header from '@/components/common/header'
import Alert from '@/components/common/Alert'

import Vuex from 'vuex'
import VeeValidate from 'vee-validate'

Vue.use(Vuex)
Vue.use(VeeValidate)
// 定义全局方法
require('./config/mixin')

const store = new Vuex.Store({
  state: {
    count: 0,
    errorId: false,
    content: {
      title: '温馨提示',
      message: ''
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    showError (state) {
      state.errorId = true
    },
    hideError (state) {
      state.errorId = false
    }
  }
})
Vue.config.productionTip = false
// 全局注册
Vue.component('Header', Header)
/* eslint-disable no-new */
new Vue({
  el: '#appId',
  router,
  store,
  data: {
    alertOptions: null
  },
  components: { Alert },
  watch: {
    alertOptions: function (newVal) {
      this.alertOptions = newVal !== undefined ? newVal : this.alertOptions
    }
  }
})
