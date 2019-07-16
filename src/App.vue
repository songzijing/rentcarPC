<template>
  <div id="app">
    <div class="mainpage" v-if="this.$store.state.flag">
      <div class="alltop">
        <el-row class="bg_opacity"></el-row>
        <div class="logo_opacity"></div>
        <el-row class="logo">
          <router-link to="/app"><img src="./assets/common_pic/logo.png" alt="平驾租车"></router-link>
        </el-row>
        <el-row class="header">
          <span class="name">平驾时分租车系统</span>
          <div class="sea">
            <div class="sea_input">
              <span></span>
              <input v-model="input" class="input">
            </div>
            <el-button>搜索</el-button>
            <i class="el-icon-s-operation"></i>
            <i class="el-icon-bell"></i>
            <i class="el-icon-switch-button" @click="close"></i>
          </div>
        </el-row>
      </div>
      <div class="allbottom">
        <div class="aside_opacity"></div>
        <div class="rukou">
          <router-link to="/mend"><span></span>门店管理</router-link>
          <router-link to="/huiy"><span></span>会员管理</router-link>
          <router-link to="/yud"><span></span>预定管理</router-link>
          <router-link to="/feiy"><span></span>费用管理</router-link>
          <router-link to="/chel"><span></span>车辆管理</router-link>
        </div>
        <router-view class="showc"></router-view>
      </div>
    </div>
    <Login v-else></Login>
  </div>
</template>

<script>
import Login from "./page/login"
export default {
  name: 'App',
   data() {
    return {
      input:"",
    }
  },
  methods: {
    close(){
       this.$store.commit("isflag");
      }
  },
  mounted () {
   
  },
  components:{
    Login
  },
  
}
</script>

<style lang="less">
@import url("./assets/css/common.css");

.mainpage,.log,html,body,#app{
  width: 100%;
  height: 100%;
}
body{
  background: url("./assets/common_pic/bg.jpg") no-repeat;
  background-size: 100% 100%;
}

@import url("./assets/css/mend.css");
// 公共部分的媒体查询
@import url("./assets/css/mend_media.css");

</style>
