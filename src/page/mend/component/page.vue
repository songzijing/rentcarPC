<template>
    <!-- 分页器 -->
    <div class="block">
      <div class="goback">
        <router-link to="/mend">返回</router-link>
      </div>
      <el-pagination
        small
        layout="prev, pager, next"
        :pageSize="4"
        :total="20">
      </el-pagination>
    </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang="less">
.block{
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    .goback{
      flex: 1;
      display: flex;
      justify-content: center;
    }
    a{
      display: block;
      width: 60px;
      height: 30px;
      background: #ffe009;
      font-size: 14px;
      border-radius: 5px;
      line-height: 30px;
      text-align: center;
      color: #fff;
      margin-left: 180px/2;
    }
}
</style>
