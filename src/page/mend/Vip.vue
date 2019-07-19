<template>
  <div class="order">
     <List>
      <span slot="one">姓名</span>
      <span slot="two">手机号</span>
      <span slot="three">证件号</span>
      <span slot="four">办卡时间</span>
      <span slot="five">到期时间</span>
      <span slot="seven" class="manage">管理</span>

      <li slot="cont" v-for="(item,index) in list" :key="index">
        <span slot="one_cont">{{item.mname}}</span>
        <span slot="two_cont">{{item.phone}}</span>
        <span slot="three_cont">{{item.card}}</span>
        <span slot="four_cont">{{item.creatcliptime}}</span>
        <span slot="five_cont">{{item.endcliptime}}</span>
        <div slot="seven_cont" class="icon_del"><i class="el-icon-edit-outline"></i><i class="el-icon-delete"></i></div>
      </li>
     </List>
     <!-- 分页器 -->
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
    //  请求数据
   this.$axios.post('http://hdhd.in.8866.org:30165/findvip/getfindvip').then((res)=>{
      console.log(res);
      this.displayList = res.data.findvip;
      // 获取数据
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
  .manage{
    width: 78px;
    flex: none;
  }
  .icon_del{
    width: 78px;
    font-size: 24px;
    i{
        cursor: pointer;
      }
    .el-icon-edit-outline{
      margin-right: 30px;
    }
  }
}
@media all and (max-width: 1366px){
  .order{
    padding: 0 22px 21px 22px;
    .manage{
      width: 55px;
      flex: none;
    }
    .icon_del{
      width: 55px;
      font-size: 17px;
      .el-icon-edit-outline{
        margin-right: 21px;
      }
      
    }
  }
}
</style>
