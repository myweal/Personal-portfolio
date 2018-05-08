<template>
  <div id="app">
    <router-view/>
    <alert :options="alertOptions"></alert>
  </div>
</template>
<script>
import Alert from '@/components/common/Alert'
export default {
  name: 'App',
  props: ['alertOptions'],
  computed: {
    errorId () {
      return this.$store.state.errorId
    },
    content () {
      return this.$store.state.content
    }
  },
  metaInfo: {
    title: 'My Example App', // set a title
    titleTemplate: '%s - Yay!', // title is now "My Example App - Yay!"
    htmlAttrs: {
      lang: 'zh'
    },
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1,shrink-to-fit=no,user-scalable=no'
      }
    ]
  },
  components: { Alert },
  watch: {
    alertOptions: function (newVal) {
      this.alertOptions = newVal !== undefined ? newVal : this.alertOptions
    }
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
