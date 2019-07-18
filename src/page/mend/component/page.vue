<template>
    <!-- 分页器 -->
    <div class="block">
      <div class="goback" @click="changeName">
        <slot name="goback"></slot>
      </div>
      <slot name="pagination"></slot>
      <!-- <el-pagination
        small
        @current-change="handleCurrentChange"
        @next-click="NextData"
        @prev-click="PrevData"
        layout="prev, pager, next"
        :current-page= "currentPage"
        :pageSize= "pageSize"
        :total="pageTotal">
      </el-pagination> -->
    </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    changeName(){
      this.$store.state.homeName = "首页";
    },
    // handleCurrentChange: function(currentPage){ 
    //   this.currentPage = currentPage; 
    //   console.log(this.currentPage);
    // },
    // NextData(){
    //   this.list = this.displayList.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize);
    //   console.log(this.list);
    // },
    // PrevData(){
    //   this.list = this.displayList.slice(this.currentPage*this.pageSize,(this.currentPage-1)*this.pageSize);
    //   console.log(this.list);
    // }
  },
  components: {

  },
  // watch:{
  //    currentPage: function(){
  //     this.NextData();
  //     console.log("1*******");
  //    }
  // },
  // mounted(){
  //  this.$axios.post('http://hdhd.in.8866.org:30165/neworder/getneworder').then((res)=>{
  //     console.log(res);
  //     this.displayList = res.data.getneworder;
  //     this.pageTotal = this.displayList.length;
  //     this.list = this.displayList.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize);
  //     console.log(this.list);
  //   }).catch((err)=>{
  //     throw err;
  //   });
  // }
}
</script>

<style scoped lang="less">
.block{
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius:  0 0 13px 13px;
    .goback{
      flex: 1;
      display: flex;
      justify-content: center;
    }
    a{
      display: block;
      width: 80px;
      height: 30px;
      background: #ffe009;
      font-size: 14px;
      border-radius: 5px;
      line-height: 30px;
      text-align: center;
      color: #fff;
      margin-left: 180px/2;
    }
}
@media all and (max-width: 1366px) {
  .block{
    height: 63px;
    border-radius:  0 0 9px 9px;
    a{
      width: 56px;
      height: 21px;
      font-size: 10px;
      -webkit-transform-origin-x: 0;
      border-radius: 3px;
      line-height: 15px;
      margin-left: 126px/2;
    }
  }
}
</style>
