<template>
  <div class="imgNum">
      <ul class="list">
          <li><img src="../../assets/img/total_num1.png" alt="宝马"></li>
          <li><img src="../../assets/img/total_num2.png" alt="宝马"></li>
          <li><img src="../../assets/img/total_num3.png" alt="宝马"></li>
          <li><img src="../../assets/img/total_num1.png" alt="宝马"></li>
          <li><img src="../../assets/img/total_num2.png" alt="宝马"></li>
          <li><img src="../../assets/img/total_num3.png" alt="宝马"></li>
      </ul>
      <!-- 分页器 -->
      <Page></Page>
  </div>
</template>

<script>
import Page from "./component/page";

export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
    Page
  }
}
</script>

<style scoped lang="less">
.imgNum{
    margin: 0 31px 30px 31px;
    background: #fff;
    border-radius: 13px;
    .list{
        padding: 15px 3px 0 4px;
        display: flex;
        flex-wrap: wrap;
        li{
            width: 31.33%;
            margin: 0 12px 13px 12px;
            img{
                width: 100%;
                height: auto;
            }
        }
    }
}
</style>
