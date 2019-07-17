<template>
    <div class="list">
      <header>
        <slot name="one"></slot>
        <slot name="two"></slot>
        <slot name="three"></slot>
        <slot name="four"></slot>
        <slot name="five"></slot>
        <slot name="six"></slot>
        <slot name="seven"></slot>
      </header>
      <ul class="list" id="list" @click="cli($event)" >
        <slot name="cont">
            <slot name="one_cont"></slot>
            <slot name="two_cont"></slot>
            <slot name="three_cont"></slot>
            <slot name="four_cont"></slot>
            <slot name="five_cont"></slot>
            <slot name="six_cont"></slot>
            <slot name="seven_cont"></slot>
        </slot>
      </ul>
    </div>
</template>

<script>
import Page from "./page";
export default {
  data() {
    return {

    }
  },
  methods: {
    cli(e){
      
 
      
      let nodelist=e.target.parentNode.parentNode.children;//当前点击元素为span,父级元素为li,再往上就是ul,其孩子是个数组集合；，
      for(let i=0;i<nodelist.length;i++){
              if(e.target.parentNode===nodelist[i]){//当前点击元素和孩子集合相等时，返回i,i就是下标
                console.log(i)
              }
            }
      }
  },
  mounted(){
    let li = document.getElementById("list").getElementsByTagName("li").length-1;
    console.log(li);
  },
  components: {
    Page
  }
}
</script>

<style scoped lang="less">
.list{
  background: #fff;
  border-radius: 13px 13px 0 0;
}
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
      &:last-child {
        text-align: right;
        width: 40px;
      }
    }
  }
   .list {
     height: 320px;
     overflow: hidden;
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
        width: 66px;
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
  @media all and (max-width: 1366px) {
    .list{
      border-radius: 9px 9px 0 0;
    }
    header {
        padding: 15px 20px;
        font-size: 13px;
        span {
          &:nth-child(1) {
            width: 42px;
          }
          &:last-child {
            width: 28px;
          }
        }
      }
      .list {
        height: 224px;
        overflow: hidden;
        li {
          padding:15px 20px;
          font-size:10px;
          -webkit-transform-origin-x: 0;
          span:first-child{
            width: 46px;
          }
          span:last-child{
            width: 28px;
          }
        }
      }
    }
</style>
