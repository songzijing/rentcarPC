<template>
  <div>
    <Test>
      <div class="head" slot='yud'>
          <ul>
            <li>
              <router-link to="/yud/yudg">预定管理</router-link>
            </li>
            <li>
              <router-link to="/yud/shoul">受理预定</router-link>
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
