<template>
  <div id="appId">
    test2
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'Main',
  mounted: function () {
    console.log('app mounted main')
  }
}
</script>
