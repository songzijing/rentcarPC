<template>
  <div class="mend">
    <!-- 首页 -->
    <Nav></Nav>
    <!-- 首页数据 -->
    <HomeList></HomeList>
  </div>
</template>

<script>
  import Nav from './nav';
  import HomeList from './homeList';
  
  export default {
    data() {
      return {
        
      }
    },
    methods: {
     
    },
    components: {
      HomeList,
      Nav
    }
  }

</script>

<style scoped lang='less'>
</style>
