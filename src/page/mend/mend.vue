<template>
  <div class="mend">
    <Test>
      <div class="head" slot='mend'>
        <ul>
          <li>
            <router-link to="/mend/homelist" class="router-link-active">{{this.$store.state.homeName}}</router-link>
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
.router-link-active{
  display:inline-block;
  width:100%;
  height:100%;
  border-bottom:2px solid #ffe009;
}
</style>
