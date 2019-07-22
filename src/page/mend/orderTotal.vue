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

      <li slot="cont" v-for="(item,index) in list" :key="index">
        <span slot="one_cont">{{item.license}}</span>
        <span slot="two_cont">{{item.owner}}</span>
        <span slot="three_cont">{{item.orderStatue}}</span>
        <span slot="four_cont">{{item.orderstimes}}</span>
        <span slot="five_cont">{{item.createtime}}</span>
        <span slot="six_cont">{{item.indentmoney}}</span>
        <span slot="seven_cont" @click="show(index)">查看</span>
      </li>
      <!-- 分页器、返回 -->
      <Page slot="page">
        <router-link to="/mend" slot="goback">返回</router-link> 
        <el-pagination
          small
          @current-change="handleCurrentChange"
          @next-click="NextData"
          @prev-click="PrevData"
          layout="prev, pager, next"
          :current-page= "currentPage"
          :pageSize= "pageSize"
          :total="pageTotal"
          slot="pagination">
        </el-pagination>
      </Page>
     </List>
     <LookOver v-else></LookOver>
    
    
  </div>
</template>

<script>
import List from './component/list_slot';
import LookOver from '../../two/mend/lookover';
import Page from './component/page'

export default {
  data() {
    return {
      // 一页中显示的条数
      pageSize:8,
      // 当前页数
      currentPage: 1,
      // 数据请求过来的所有数据
      displayList:[],
      // 渲染的数据
      list:[],
      // 数据总数
      pageTotal:0,
      // 数据加载慢时 显示正在加载
      accShow:this.$store.state.acceptShow
    }
  },
  methods: {
    show(index){
      this.$store.state.homeName = "查看";
      this.$store.commit("isshow");

       // 获取到车牌
      let lis = document.getElementById("lis").getElementsByTagName("li");
      let span = lis[index].getElementsByTagName("span")[0];
      let carTxt = span.innerText;
      console.log(carTxt);
      // 状态管理
      this.$store.commit("carNum",carTxt);
    },
    // 当前页 改变 赋值给 currentPage
    handleCurrentChange: function(currentPage){ 
      this.currentPage = currentPage; 
      console.log(this.currentPage);
    },
    // 下一页
    NextData(){
      this.list = this.displayList.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize);
      console.log(this.list);
    },
    // 上一页
    PrevData(){
      this.list = this.displayList.slice(this.currentPage*this.pageSize,(this.currentPage-1)*this.pageSize);
      console.log(this.list);
    }
  },
   watch:{
    // 监听当前页  如果改变  调用下一页函数，为了解决页面刚进去 不显示数据
    currentPage: function(){
      this.NextData();
    }
  },
  mounted(){
    // 请求数据
  this.$axios.post('http://wlz.in.8866.org:30167/finforders/getfinforders').then((res)=>{
     console.log(res);
     this.displayList = res.data.finforders;
     // 获取数据总数
     this.pageTotal = this.displayList.length;
     // 截取8条数据
     this.list = this.displayList.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize);
   }).catch((err)=>{
     throw err;
   x});

   this.$axios.interceptors.request.use((res)=>{
      this.accShow = false;
      return res;
    });
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
