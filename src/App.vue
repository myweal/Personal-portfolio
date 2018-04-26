<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    title: 'My Example App', // set a title
    titleTemplate: '%s - Yay!', // title is now "My Example App - Yay!"
    htmlAttrs: {
      lang: 'zh'
    },
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1,shrink-to-fit=no,user-scalable=no' }
    ]
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
<!--全局样式-->
<style src="@/assets/css/bootstrap.min.css"></style>
