<template>
    <div>
      <header>
        <slot name="one"></slot>
        <slot name="two"></slot>
        <slot name="three"></slot>
        <slot name="foer"></slot>
        <slot name="five"></slot>
        <slot name="six"></slot>
        <slot name="seven"></slot>
      </header>
      <ul class="list">
        <slot name="cont">
            <slot name="one_cont">豫A5421</slot>
            <slot name="two_cont">王小虎</slot>
            <slot name="three_cont">已完成</slot>
            <slot name="foer_cont">2019-05-21</slot>
            <slot name="five_cont">2019-05-21</slot>
            <slot name="six_cont">44</slot>
            <slot name="seven_cont">查看</slot>
        </slot>
      </ul>
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
header {
    padding: 22px 30px;
    font-size: 18px;
    color: #333;
    font-weight: normal;
    text-align: center;
    border-bottom: 1px solid #e8e8e8;
    display: flex;
    span {
      display: inline-block;
      width: 100%;
      
      &:nth-child(2) {
        flex: 1;
      }
      &:nth-child(3) {
        flex: 1;
      }
      &:nth-child(4) {
        flex: 1;
      }
      &:nth-child(5) {
        flex: 1;
      }
      &:nth-child(6) {
        flex: 1;
      }
      &:nth-child(1) {
        text-align: left;
        width: 60px;
      }
      &:nth-child(7) {
        text-align: right;
        width: 40px;
      }
    }
  }
   .list {
    li {
      padding:22px 30px;
      font-size:14px;
      color:#333;
      border-bottom: 1px solid #e8e8e8;
      display: flex;
      span {
        display: inline-block;
        text-align: center;
      }
      span:nth-child(2){
        flex: 1;
      }
      span:nth-child(3){
        flex: 1;
      }
      span:nth-child(4){
        flex: 1;
      }
      span:nth-child(5){
        flex: 1;
      }
      span:nth-child(6){
        flex: 1;
      }
      span:first-child{
        text-align: left;
        width: 60px;
      }
      span:last-child{
        display: block;
        color: #00a0e9;
        text-align: right;
        width: 40px;
        cursor: pointer;
      }
    }
  }
</style>
