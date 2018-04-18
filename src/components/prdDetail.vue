<template>
  <div id="detail">
    <Header :title="title"/>
    <ul class="list-unstyled">
      <li>Lorem ipsum dolor sit amet</li>
      <li>Consectetur adipiscing elit</li>
      <li>Integer molestie lorem at massa</li>
      <li>Facilisis in pretium nisl aliquet</li>
      <li>Nulla volutpat aliquam velit
        <ul>
          <li>Phasellus iaculis neque</li>
          <li>Purus sodales ultricies</li>
          <li>Vestibulum laoreet porttitor sem</li>
          <li>Ac tristique libero volutpat at</li>
        </ul>
      </li>
      <li>Faucibus porta lacus fringilla vel</li>
      <li>Aenean sit amet erat nunc</li>
      <li>Eget porttitor lorem</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['id'],
  data () {
    return {
      title: '产品列表'
    }
  }
}
</script>
<!--全局样式-->
<style>
  @import 'https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css';
</style>
