<template>
  <div>
    <Test>
      <div class="head" slot='huiy'>
          <ul>
            <li>
              <router-link to="/huiy/zhuc">注册</router-link>
            </li>
            <li>
              <router-link to="/huiy/chax">查询</router-link>
            </li>
            <li>
              <router-link to="/huiy/bianj">编辑</router-link>
            </li>
            <li>
              <router-link to="/huiy/chongz">充值</router-link>
            </li>
          </ul>
          <router-view></router-view>
        </div>
        
    </Test>
  </div>
</template>

<script>
import Test from './../components/test';
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

<style scoped>

</style>
