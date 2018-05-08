<template>
  <div id="appId">
    <div class="main">
    <router-view></router-view>
    </div>
    <div class="footer">
      <a href="tel:95555">95555</a>
    </div>
  </div>
</template>
<script>
export default {
  mounted: function () {
    console.log('app mounted')
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
<style scoped>
  .footer{
    text-align: center;
    position:absolute;
    bottom:2rem;
    width: 100%;
  }
  .main{
    min-height: 100vh;
    padding-bottom: 5rem;
  }
  #appId{
    position: relative;
  }
</style>
