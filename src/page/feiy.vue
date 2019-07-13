<template>
  <div>
    <Test>
      <div class="head" slot='feiy'>
          <ul>
            <li>
              <router-link to="/mend">费用管理</router-link>
            </li>
          </ul>
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
