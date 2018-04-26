<template>
  <div>
    <!--<form name="loginForm" novalidate @submit.prevent="subForm()">-->
      <div class="container">
        <div class="form-group">
          <label for="username" class="form-control">用户名</label>
          <input id="username" type="text" v-model="user.username"/>
        </div>
        <div class="form-group">
          <label for="psdId" class="form-control">用户名</label>
          <input id="psdId" type="text" v-model="user.psd"/>
        </div>
        <button>
          登录
        </button>
      </div>
    <!--</form>-->
  </div>
</template>
<script>
export default {
  data () {
    return {
      user: {
        'username': null,
        'pad': null
      }
    }
  },
  methods: {
    subForm: function () {
      console.log(this.data())
    }
  }
}
</script>
