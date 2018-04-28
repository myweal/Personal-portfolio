<template>
  <div>
    <Header hideFlag="true" title="登录"></Header>
    <main class="container">
      <form class="form" name="loginForm" novalidate @submit.prevent="subForm()">
        <div class="form-group">
          <label for="username">用户名</label>
          <input id="username" type="text" class="form-control form-control-sm" v-model="user.username"/>
        </div>
        <div class="form-group">
          <label for="psdId">密码</label>
          <input id="psdId" type="text" class="form-control form-control-sm" v-model="user.psd"/>
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
