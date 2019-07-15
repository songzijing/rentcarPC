<template>
  <div>
      <Test>
      <div class="head" slot='mend'>
        <ul>
          <li>
            <router-link to="/">首页</router-link>
          </li>
        </ul>
      </div>
    </Test>
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

<style scoped>

</style>
