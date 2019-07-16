<template>
  <div class="order">
     <List v-if="this.$store.state.listShow">
      <span slot="one">车牌号</span>
      <span slot="two">客户名称</span>
      <span slot="three">订单状态</span>
      <span slot="four">下单日期</span>
      <span slot="five">生成日期</span>
      <span slot="six">订单金额（元）</span>
      <span slot="seven">管理</span>

      <li slot="cont">
        <span slot="one_cont">豫A5421</span>
        <span slot="two_cont">王小虎</span>
        <span slot="three_cont">已完成</span>
        <span slot="four_cont">2019-05-21</span>
        <span slot="five_cont">2019-05-21</span>
        <span slot="six_cont">44</span>
        <span slot="seven_cont" @click="show">查看</span>
      </li>
      <li slot="cont">
        <span slot="one_cont">豫A5421</span>
        <span slot="two_cont">王小虎</span>
        <span slot="three_cont">已完成</span>
        <span slot="four_cont">2019-05-21</span>
        <span slot="five_cont">2019-05-21</span>
        <span slot="six_cont">44</span>
        <span slot="seven_cont" @click="show">查看</span>
      </li>
      <li slot="cont">
        <span slot="one_cont">豫A5421</span>
        <span slot="two_cont">王小虎</span>
        <span slot="three_cont">已完成</span>
        <span slot="four_cont">2019-05-21</span>
        <span slot="five_cont">2019-05-21</span>
        <span slot="six_cont">44</span>
        <span slot="seven_cont" @click="show">查看</span>
      </li>
      <li slot="cont">
        <span slot="one_cont">豫A5421</span>
        <span slot="two_cont">王小虎</span>
        <span slot="three_cont">已完成</span>
        <span slot="four_cont">2019-05-21</span>
        <span slot="five_cont">2019-05-21</span>
        <span slot="six_cont">44</span>
        <span slot="seven_cont" @click="show">查看</span>
      </li>
      <li slot="cont">
        <span slot="one_cont">豫A5421</span>
        <span slot="two_cont">王小虎</span>
        <span slot="three_cont">已完成</span>
        <span slot="four_cont">2019-05-21</span>
        <span slot="five_cont">2019-05-21</span>
        <span slot="six_cont">44</span>
        <span slot="seven_cont" @click="show">查看</span>
      </li>
      <li slot="cont">
        <span slot="one_cont">豫A5421</span>
        <span slot="two_cont">王小虎</span>
        <span slot="three_cont">已完成</span>
        <span slot="four_cont">2019-05-21</span>
        <span slot="five_cont">2019-05-21</span>
        <span slot="six_cont">44</span>
        <span slot="seven_cont" @click="show">查看</span>
      </li>
      <li slot="cont">
        <span slot="one_cont">豫A5421</span>
        <span slot="two_cont">王小虎</span>
        <span slot="three_cont">已完成</span>
        <span slot="four_cont">2019-05-21</span>
        <span slot="five_cont">2019-05-21</span>
        <span slot="six_cont">44</span>
        <span slot="seven_cont" @click="show">查看</span>
      </li>
      <li slot="cont">
        <span slot="one_cont">豫A5421</span>
        <span slot="two_cont">王小虎</span>
        <span slot="three_cont">已完成</span>
        <span slot="four_cont">2019-05-21</span>
        <span slot="five_cont">2019-05-21</span>
        <span slot="six_cont">44</span>
        <span slot="seven_cont" @click="show">查看</span>
      </li>
      <li slot="cont">
        <span slot="one_cont">豫A5421</span>
        <span slot="two_cont">王小虎</span>
        <span slot="three_cont">已完成</span>
        <span slot="four_cont">2019-05-21</span>
        <span slot="five_cont">2019-05-21</span>
        <span slot="six_cont">44</span>
        <span slot="seven_cont" @click="show">查看</span>
      </li>
     </List>
    <LookOver v-else></LookOver>
    <!-- 分页器 -->
    <Page>
      <router-link to="/mend" slot="goback">返回</router-link> 
    </Page>
  </div>
</template>

<script>
import List from './component/list_slot';
import LookOver from '../../two/mend/lookover';
import Page from './component/page'

export default {
  data() {
    return {

    }
  },
  methods: {
    show(){
      this.$store.commit("isshow");
    }
  },
  components: {
      List,
      LookOver,
      Page
  }
}
</script>

<style scoped lang="less">
.order{
  padding: 0 31px 30px 31px;
}
@media all and (max-width: 1366px){
  .order{
    padding: 0 22px 21px 22px;
  }
}
</style>
