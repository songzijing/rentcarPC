<template>
    <!-- 分页器 -->
    <div class="block">
      <div class="goback">
        <!-- <router-link to="/mend">返回</router-link> -->
        <slot name="goback"></slot>
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
    background: #fff;
    border-radius:  0 0 13px 13px;
    .goback{
      flex: 1;
      display: flex;
      justify-content: center;
    }
    a{
      display: block;
      width: 80px;
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
@media all and (max-width: 1366px) {
  .block{
    height: 63px;
    border-radius:  0 0 9px 9px;
    a{
      width: 56px;
      height: 21px;
      font-size: 10px;
      -webkit-transform-origin-x: 0;
      border-radius: 3px;
      line-height: 15px;
      margin-left: 126px/2;
    }
  }
}
</style>
