<template>
  <div class="mend">
    <!-- 首页 -->
    <Test>
      <div class="head" slot='mend'>
        <ul>
          <li>
            <router-link to="/">首页</router-link>
          </li>
        </ul>
      </div>
    </Test>
    <!-- 上传照片数量、会员总数等 -->
    <TwoNav></TwoNav>
    <!-- 首页数据 -->
    <HomeList></HomeList>
  </div>
</template>

<script>
  import Test from '../../components/test';
  import TwoNav from './twoNav';
  import HomeList from './homeList';
  export default {
    data() {
      return {

      }
    },
    methods: {

    },
    components: {
      Test,
      TwoNav,
      HomeList
    }
  }

</script>

<style scoped lang='less'>
</style>
