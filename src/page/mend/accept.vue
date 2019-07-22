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

      <li slot="cont" v-for="(item,index) in list" :key="index">
        <span slot="one_cont">{{item.license}}</span>
        <span slot="two_cont">{{item.owner}}</span>
        <span slot="three_cont">{{item.orderStatue}}</span>
        <span slot="four_cont">{{item.orderstimes}}</span>
        <span slot="five_cont">{{item.createtime}}</span>
        <span slot="six_cont">{{item.indentmoney}}</span>
        <span slot="seven_cont" @click="show(index)">查看</span>
      </li>
    </List>
    <div class="load" v-show="acceptShow">
      <i class="el-icon-loading"></i>正在加载中……
    </div>
    <!-- 分页器 -->
    <div class="block">
      <el-pagination
        small
        @current-change="handleCurrentChange"
        @next-click="NextData"
        @prev-click="PrevData"
        layout="prev, pager, next"
        :current-page= "currentPage"
        :pageSize= "pageSize"
        :total="pageTotal">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import List from './component/list_slot';

export default {
  data() {
    return {
      // 一页中显示的条数
      pageSize:4,
      // 当前页数
      currentPage: 1,
      // 数据请求过来的所有数据
      displayList:[],
      // 渲染的数据
      list:[],
      // 数据总数
      pageTotal:0,
      // 数据加载慢时 显示正在加载
      acceptShow:true
    }
  },
  mounted(){
    // 改变ul的高度 
    console.log("宽："+document.body.clientWidth);
    if(document.body.clientWidth<=1366){
      document.getElementById("lis").style.height = '179px';
      }else{
      document.getElementById("lis").style.height = '256px';
    }

    // 请求数据
    this.$axios.post('http://wlz.in.8866.org:30167/neworder/getneworder').then((res)=>{
      this.acceptShow = false;
      this.displayList = res.data.getneworder;
      // 获取数据总数
      this.pageTotal = this.displayList.length;
      // 截取4条数据
      this.list = this.displayList.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize);
    }).catch((err)=>{
      this.acceptShow = true;
      throw err;
    });
  },
  methods: {
    show(index){
      // 点击查看 的时候  将首页导航名 变为 查看
      this.$store.state.homeName = "查看";
      // 控制 查看 页面的显示隐藏
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
    },
    // 下一页
    NextData(){
      this.list = this.displayList.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize);
    },
    // 上一页
    PrevData(){
      this.list = this.displayList.slice(this.currentPage*this.pageSize,(this.currentPage-1)*this.pageSize);
    }
  },
  components: {
    List
  },
  watch:{
    // 监听当前页  如果改变  调用下一页函数，为了解决页面刚进去 不显示数据
     currentPage: function(){
      this.NextData();
     }
  }
}

</script>
<style scoped lang='less'>
.acceptlist{
  position:relative;
}
.block{
    height: 90px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-radius:  0 0 13px 13px;
}
.load{
   font-size: 18px;
   color: #888;
   height: 60px;
   display: flex;
   align-items: center;
   justify-content: center;

   position: absolute;
   top: 90px;
   left: 50%;
   transform: translateX(-50%);
   i{
     margin-right: 3px;
   }
}
@media all and (max-width: 1366px) {
  .block{
    height: 63px;
    border-radius:  0 0 9px 9px;
  }
}
</style>
