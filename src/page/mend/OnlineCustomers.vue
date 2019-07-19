<template>
  <div class="order">
     <List>
      <span slot="one">姓名</span>
      <span slot="two">车牌号</span>
      <span slot="three">手机号</span>
      <span slot="four">订单状态</span>
      <span slot="seven" class="self">安全隐患</span>

      <li slot="cont" v-for="(item,index) in list" :key="index">
        <span slot="one_cont">{{item.username}}</span>
        <span slot="two_cont">{{item.license}}</span>
        <span slot="three_cont">{{item.phone}}</span>
        <span slot="four_cont">{{item.orderStatue}}</span>
        <span slot="seven_cont" class="no">{{item.safety_peril}}</span>
      </li>
     </List>
     <!-- 分页器、返回 -->
    <Page>
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
  </div>
</template>

<script>
import List from './component/list_slot';
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
      pageTotal:0
    }
  },
  methods: {
    show(){
      this.$store.commit("isshow");
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
   this.$axios.post('http://hdhd.in.8866.org:30165/onclient/getonclient').then((res)=>{
      console.log(res);
      this.displayList = res.data.onclient;
      // 获取数据总数
      this.pageTotal = this.displayList.length;
      // 截取8条数据
      this.list = this.displayList.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize);
      console.log(this.list);
    }).catch((err)=>{
      throw err;
    });
  },
  components: {
      List,
      Page
  }
}
</script>

<style scoped lang="less">
.order{
  padding: 0 31px 30px 31px;
  .self{
    width: 72px;
    flex: none;
  }
  .biglist ul>li span.no{
    text-align: center;
    flex: none;
    width: 72px;
    color: #333;
    z-index: 99;
  }
}
@media all and (max-width: 1366px){
  .order{
    padding: 0 22px 21px 22px;
    .self{
      width: 50px;
    }
    .biglist ul>li span.no{
      width: 50px;
    }
  }
}
</style>
