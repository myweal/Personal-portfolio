<template>
  <div id="detail">
    <Header :title="title"/>
    <button class="btn btn-default btn-lg" @click="add()">
      click
    </button>
  </div>
</template>
<script>
export default {
  props: ['id'],
  data () {
    return {
      title: '产品列表'
    }
  },
  methods: {
    add () {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  }
}
</script>
