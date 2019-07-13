<template>
  <div>
    <Test>
      <div class="head" slot='chel'>
          <ul>
            <li>
              <router-link to="/mend">车辆管理</router-link>
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
