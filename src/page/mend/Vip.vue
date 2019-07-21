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
        <div id="editInput" slot="two_cont"><input type="text" :value = "item.phone" disabled @blur="editSty(index)"></div>
        <span slot="three_cont">{{item.card}}</span>
        <span slot="four_cont">{{item.creatcliptime}}</span>
        <span slot="five_cont">{{item.endcliptime}}</span>
        <div slot="seven_cont" class="icon_del"><i class="el-icon-edit-outline" @click="edit(index)"></i><i class="el-icon-delete" @click="del(index)"></i></div>
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
      pageTotal:0,
      // 数据加载慢时 显示正在加载
      accShow:this.$store.state.acceptShow
    }
  },
  methods: {
    show(){
      this.$store.commit("isshow");
    },
    // 当前页 改变 赋值给 currentPage
    handleCurrentChange: function(currentPage){ 
      this.currentPage = currentPage;
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
    },
    // 编辑手机号
    edit(index){
      // 获取到input祖级元素li
      let lis = document.getElementById("lis").getElementsByTagName("li");
      // 获取input
      let input = lis[index].getElementsByTagName("div")[0].getElementsByTagName("input")[0];
      // 将input的disabled禁用属性删除
      input.removeAttribute("disabled");
      // 让input获取焦点
      input.focus();
      // 为input设置边框
      input.style.border = "1px solid #00a1e7";
    },
    // 文本框 失去焦点时
    editSty(index){
      // 获取到input祖级元素li
      let lis = document.getElementById("lis").getElementsByTagName("li");
      // 获取input
      let input = lis[index].getElementsByTagName("div")[0].getElementsByTagName("input")[0];
      // 将input添加disabled禁用属性
      input.setAttribute("disabled","disabled");
      // 将input边框设为none
      input.style.border = "none";

      // 获取到名字对应的span
      let span = lis[index].getElementsByTagName("span")[0].innerText;
      //  失去焦点时，将编辑的信息返回到后台，修改后台数据
      console.log(span);
      this.$axios.post('http://wlz.in.8866.org:30167/findvip/updatevip',this.$qs.stringify({
        "mname":span,
        "phone":input.value
      })).then((res)=>{
        console.log("Successful!");
      }).catch((err)=>{
        throw err;

      })
    },
    del(index){
      // 获取到input祖级元素li
      let lis = document.getElementById("lis").getElementsByTagName("li");
      // 获取到名字对应的span 文本
      let span = lis[index].getElementsByTagName("span")[1].innerText;
      //  失去焦点时，将编辑的信息返回到后台，修改后台数据
      this.$axios.post('http://wlz.in.8866.org:30167/findvip/deletevip',this.$qs.stringify({
        "card":span
      })).then((res)=>{
        // 将请求过来的数据 赋给displayList 以便执行监听里的操作
        this.displayList = res.data.findvip;
        console.log("Successful!");
      }).catch((err)=>{
        throw err;
        
      })
    }
  },
   watch:{
    // 监听当前页  如果改变  调用下一页函数，为了解决页面刚进去 不显示数据
    currentPage: function(){
      this.NextData();
    },
    // 如果执行删除操作 displayList里的数据变动  在请求接口  渲染页面
    displayList: function(){
        this.$axios.post('http://wlz.in.8866.org:30167/findvip/getfindvip').then((res)=>{
          this.list = this.displayList.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize);
        }).catch((err)=>{
          throw err;
        });
      }
  },
   mounted(){
    //  请求数据
   this.$axios.post('http://wlz.in.8866.org:30167/findvip/getfindvip').then((res)=>{
      console.log(res);
      this.displayList = res.data.findvip;
      // 获取数据
      this.pageTotal = this.displayList.length;
      // 截取8条数据
      this.list = this.displayList.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize);
    }).catch((err)=>{
      throw err;
    });

    this.$axios.interceptors.request.use((res)=>{
      this.accShow = false;
      return res;
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
  #editInput{
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    input{
      width: 60%;
      color: #333;
      text-align: center;
      height: 40px;
      line-height: 40px;
      background: #fff;
    }
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
    #editInput{
      input{
        height: 28px;
        line-height: 28px;
      }
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
