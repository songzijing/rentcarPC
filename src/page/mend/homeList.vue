<template>
  <div class="homelist">
    <div class="allList" v-if="this.$store.state.listShow">
      <!-- 上传照片数量、会员总数等 -->
      <TwoNav></TwoNav>
      <div class="list">
        <h5>最新订单</h5>
        <!-- 最新订单列表 -->
        <Accept></Accept>
      </div>
    </div>
    <LookOver v-else></LookOver>
  </div>
</template>
<script>
import Accept from "./accept";
import TwoNav from './component/twoNav';
import LookOver from '../../two/mend/lookover';

export default {
  data() {
    return {
    }
  },
  methods:{
    
  },
  components: {
    Accept,
    TwoNav,
    LookOver
  }
}
</script>

<style scoped lang="less">
.homelist{
    padding: 0 31px 30px 31px;
    .list{
        background: #fff;
        border-radius: 13px;
        h5{
            height: 79px;
            line-height: 79px;
            padding: 0 30px;
            font-size: 18px;
            color: #333;
            border-bottom: 1px solid #e8e8e8;
        }
    }
}
</style>
