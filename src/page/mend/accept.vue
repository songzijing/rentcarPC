<template>
  <div class="acceptlist">
    <List>
      <span slot="one">车牌号</span>
      <span slot="two">客户名称</span>
      <span slot="three">订单状态</span>
      <span slot="four">下单日期</span>
      <span slot="five">生成日期</span>
      <span slot="six">订单金额（元）</span>
      <span slot="seven">管理</span>

      <li slot="cont" v-for="(item,index) in this.$store.state.slicelist" :key="index">
        <span slot="one_cont">{{item.license}}</span>
        <span slot="two_cont">{{item.aname}}</span>
        <span slot="three_cont">{{item.orderStatue}}</span>
        <span slot="four_cont">{{item.orderstimes}}</span>
        <span slot="five_cont">{{item.createtime}}</span>
        <span slot="six_cont">{{item.indentmoney}}</span>
        <span slot="seven_cont" @click="show">查看</span>
      </li>
    </List>
    <!-- 分页器 -->
    <Page></Page>
  </div>
</template>
<script>
import List from './component/list_slot'
import Page from './component/page'

export default {
  data() {
    return {
      homelist:[]
    }
  }

  ,
  methods: {
    show(){
      this.$store.commit("isshow");
    }
  },
  components: {
    List,
    Page
  },
  mounted(){
    // this.$axios.get("../../../static/json/homelist.json").then((res)=>{
    //   console.log(res);
    //   this.homelist = res.data.getneworder;
    // }).catch((err)=>{
    //   throw err;
    // });
    // this.$axios.post('http://hdhd.in.8866.org:30165/neworder/getneworder').then((res)=>{
    //   console.log(res);
    //   this.homelist = res.data.getneworder;
    // }).catch((err)=>{
    //   throw err;
    // });
    this.$store.dispatch("homeAxios");
    // var child = document.getElementsByClassName("list")[0].getElementsByTagName("li");
    //   for (var i = 0; i < child.length; i++) {
    //       var a = child[i];
    //       a.index = i;//给每个className为child的元素添加index属性;
    //       a.onclick = function () {
    //           console.log(this.index)
    //       }
// }
    // this.homelist = this.$store.state.homelist;
    // console.log(this.homelist);
  },
  filters:{
    // changeSty(val){
    //   if(val == "待处理"){
    //     let lis = document.getElementById("txtSty");
    //     lis.style.color = "red";
    //   }
    // }
  }
}

</script>
<style scoped lang='less'>
</style>
