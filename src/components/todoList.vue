<template>
  <div id="todolist">
  <!--header-->
    <Header hideFlag="true" :title="title"/>
    <table class="table">
      <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in items" v-bind:key="index" v-on:click="goDetail(item.id)" >
        <th scope="row">{{index}}</th>
        <td>{{item.name}}</td>
        <td>{{item.key}}</td>
        <td>{{item.key}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: '产品列表',
      items: [{id: 1, name: 'lss', key: 'key'}, {id: 2, name: 'lss2', key: 'key'}]
    }
  },
  // 在 `methods` 对象中定义方法
  methods: {
    goDetail: function (id) {
      this.$router.push('/detail/' + id)
    }
  }
}
</script>
<!--全局样式-->
<style>
  @import 'https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css';
</style>
<style scoped>

</style>
