<template>
  <div class="mend">
    <Test>
      <div class="head" slot='mend'>
        <ul>
          <li>
            <router-link to="/mend/homelist">首页</router-link>
          </li>
        </ul>
      </div>
    </Test>
    <router-view></router-view>
  </div>
</template>

<script>
  import Test from '../../components/test';
  
  export default {
    data() {
      return {
        
      }
    },
    methods: {
     
    },
    components: {
      Test
    }
  }

</script>

<style scoped lang='less'>
</style>
