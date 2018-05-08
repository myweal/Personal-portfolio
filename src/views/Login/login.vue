<template>
  <div>
    <Header hideFlag="true" title="登录"></Header>
    <main class="container">
      <form class="form" name="loginForm" novalidate @submit.prevent="subForm()">
        <div class="form-group">
          <label for="username">用户名</label>
          <input id="username" name="username" title="用户名" type="text" v-validate="{ required: true, alpha: true}"
                 class="form-control form-control-sm" v-model="user.username" placeholder="请输入用户名"/>
        </div>
        <div class="form-group">
          <label for="psdId">密码</label>
          <input id="psdId" name="padId" title="密码" type="text" v-validate="{ required: true, numeric: true}"
                 class="form-control form-control-sm" v-model="user.psd" placeholder="请输入密码"/>
        </div>
        <div class="text-center">
          <button type="submit" class="btn col-6 btn-primary">
            登录
          </button>
        </div>
      </form>
    </main>
  </div>
</template>
<script src="./mod.js"></script>
