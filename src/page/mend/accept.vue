<template>
  <div class="acceptlist">
    <!-- <header>
      <span>车牌号</span>
      <span>客户名称</span>
      <span>订单状态</span>
      <span>下单日期</span>
      <span>生成日期</span>
      <span>订单金额（元）</span>
      <span>管理</span>
    </header> -->
    <List>
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
    </List>
    <!-- <ul class="list">
      <li>
        <span>豫A5421</span>
        <span>王小虎</span>
        <span>已完成</span>
        <span>2019-05-21</span>
        <span>2019-05-21</span>
        <span>44</span>
        <span @click="show">查看</span>
      </li>
      <li>
        <span>豫A5421</span>
        <span>王小虎</span>
        <span>已完成</span>
        <span>2019-05-21</span>
        <span>2019-05-21</span>
        <span>44</span>
        <span @click="show">查看</span>
      </li>
      <li>
        <span>豫A5421</span>
        <span>王小虎</span>
        <span>已完成</span>
        <span>2019-05-21</span>
        <span>2019-05-21</span>
        <span>44</span>
        <span @click="show">查看</span>
      </li>
      <li>
        <span>豫A5421</span>
        <span>王小虎</span>
        <span>已完成</span>
        <span>2019-05-21</span>
        <span>2019-05-21</span>
        <span>44</span>
        <span @click="show">查看</span>
      </li>
    </ul> -->
  </div>
</template>
<script>
import List from './component/list_slot'

export default {
  data() {
    return {
      
    }
  }

  ,
  methods: {
    show(){
      this.$store.commit("isshow");
    }
  },
  components: {
    List
  }
}

;

</script>
<style scoped lang='less'>
// .acceptlist {
  // header {
  //   padding: 22px 30px;
  //   font-size: 18px;
  //   color: #333;
  //   font-weight: normal;
  //   text-align: center;
  //   border-bottom: 1px solid #e8e8e8;
  //   display: flex;
  //   span {
  //     display: inline-block;
  //     width: 100%;
      
  //     &:nth-child(2) {
  //       flex: 1;
  //     }
  //     &:nth-child(3) {
  //       flex: 1;
  //     }
  //     &:nth-child(4) {
  //       flex: 1;
  //     }
  //     &:nth-child(5) {
  //       flex: 1;
  //     }
  //     &:nth-child(6) {
  //       flex: 1;
  //     }
  //     &:nth-child(1) {
  //       text-align: left;
  //       width: 60px;
  //     }
  //     &:nth-child(7) {
  //       text-align: right;
  //       width: 40px;
  //     }
  //   }
  // }

  // .list {
  //   li {
  //     padding:22px 30px;
  //     font-size:14px;
  //     color:#333;
  //     border-bottom: 1px solid #e8e8e8;
  //     display: flex;
  //     span {
  //       display: inline-block;
  //       text-align: center;
  //     }
  //     span:nth-child(2){
  //       flex: 1;
  //     }
  //     span:nth-child(3){
  //       flex: 1;
  //     }
  //     span:nth-child(4){
  //       flex: 1;
  //     }
  //     span:nth-child(5){
  //       flex: 1;
  //     }
  //     span:nth-child(6){
  //       flex: 1;
  //     }
  //     span:first-child{
  //       text-align: left;
  //       width: 60px;
  //     }
  //     span:last-child{
  //       display: block;
  //       color: #00a0e9;
  //       text-align: right;
  //       width: 40px;
  //       cursor: pointer;
  //     }
  //   }
  // }
// }

</style>
