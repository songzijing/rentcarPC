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
    <Page>
      <router-link to="/mend" slot="goback">返回</router-link> 
      <el-pagination
        small
        layout="prev, pager, next"
        :pageSize= "6"
        :total="6"
        slot="pagination">
      </el-pagination>
    </Page>
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
    min-width: 1209px;
    .list{
        padding: 15px 3px 0 4px;
        display: flex;
        flex-wrap: wrap;
        li{
            width: 31.33%;
            margin: 0 12px 13px 12px;
            img{
                width: 100%;
                height: 300px;
            }
        }
    }
}
@media all and (max-width: 1366px) {
  .imgNum{
    margin: 0 22px 21px 22px;
    border-radius: 9px;
    .list{
        padding: 10px 2px 0 3px;
        li{
            margin: 0 8px 9px 8px;
            img{
                height: 210px;
            }
        }
    }
  }
}
</style>
