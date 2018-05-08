import { Validator } from 'vee-validate'

const dictionary = {
  en: {
    messages: {
      alpha: () => 'Some English Message'
    }
  },
  zh: {
    messages: {
      alpha: '请输入字母数字下划线',
      numeric: '请输入数字',
      required: '请输入'
    }
  }
}

// Override and merge the dictionaries
Validator.localize(dictionary)

const validator = new Validator({first_name: 'alpha'})
// now this validator will generate messages in Arabic.
validator.localize('zh')

export default {
  data () {
    return {
      user: {}
    }
  },
  methods: {
    subForm: function () {
      console.log('====')
      debugger
      var $this = this
      $this.errors.items.forEach(function (value, index) {
        $this.alert(value.msg)
        return false
      })
      $this.goto('/list')
    }
  }

}
