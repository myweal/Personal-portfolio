import Vue from 'vue'

Vue.mixin({
  methods: {
    alert: function (option) {
      let options = {}
      if (typeof option === 'string') {
        options.message = option
        options.showFlag = true
      }
      debugger
      this.$root.alertOptions = options
    }
  }
})
