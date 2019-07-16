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
            <i class="el-icon-switch-button"></i>
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
.log{
  position: absolute;
  z-index: 99;
  top:0;
  left: 0;
  display: block;
}
#app {
  margin: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .alltop{
    width: 100%;
    color: #fff;
    text-align: center;
    height: 99px;
    line-height: 99px;
    font-size: 30px;
    position: relative;
    display: flex;
    .bg_opacity{
      height: 99px;
      width: 100%;
      background: #eee;
      opacity: .4;

      position: absolute;
      top: 0;
      left: 0;
    }
    .logo{
      width: 219px;
      min-width: 219px;
      a{
        display: block;
        display: flex;
        justify-content: center;
        img{
          width: 90px;
          height: 90px;
        }
      }
    }
    .logo_opacity{
      width: 219px;
      height: 100%;
      background: #313131;
      opacity: .4;
      
      position: absolute;
      top: 0;
      left: 0;
    }
    .header{
      flex: 1;
      display: flex;
      padding: 0 28px 0 31px;
      min-width: 1300px;
      .name{
        font-size: 24px;
      }
      .sea{
        flex: 1;

        display: flex;
        justify-content: flex-end;
        align-items: center;
        .sea_input{
          display: flex;
          align-items: center;
          width: 250px;
          background: #fff;
          opacity: .6;
          height: 50px;
          border-radius: 5px 0px 0px 5px;
          .input{
            flex: 1;
            background: none;
            height: 50px;
            text-indent: 10px;
          }
          span{
            display: block;
            width: 33px;
            height: 33px;
            background: url("./assets/common_pic/icon_sea.png") no-repeat;
            background-size: 100% 100%;
            margin-left: 29px;
          }
        }
        .el-button{
          border: none;
          border-radius: 0;
          width: 80px;
          height: 50px;
          color: #fff;
          background-color: #ffe009;
          font-size: 18px;
          border-radius: 0 5px 5px 0;
        }
        i{
          margin-left: 30px;
        }
      }
    }
  }
  .allbottom{
    flex: 1;
    display: flex;
    height: 100%;
    position: relative;
    min-width: 1300px;
    .aside_opacity{
      background: #313131;
      opacity: .4;
      width:219px;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .rukou{
      width:219px;
      height: 100%;
      font-size: 18px;
      z-index: 9;
      min-width: 219px;
      a{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        height: 90px;
        span{
          display: inline-block;
          width: 27px;
          height: 27px;
          margin-right: 13px;
        }
        &:nth-child(1) span{
          background: url("./assets/common_pic/aside_icon1.png") no-repeat;
          background-size: 100% 100%;
        }
        &:nth-child(2) span{
          background: url("./assets/common_pic/aside_icon2.png") no-repeat;
          background-size: 100% 100%;
        }
        &:nth-child(3) span{
          background: url("./assets/common_pic/aside_icon3.png") no-repeat;
          background-size: 100% 100%;
        }
        &:nth-child(4) span{
          background: url("./assets/common_pic/aside_icon4.png") no-repeat;
          background-size: 100% 100%;
        }
        &:nth-child(5) span{
          background: url("./assets/common_pic/aside_icon5.png") no-repeat;
          background-size: 100% 100%;
        }
      }
      .router-link-active{
        background: #ffe009;
        color: #333;
        &:nth-child(1) span{
          background: url("./assets/common_pic/aside_icon_active_1.png") no-repeat;
          background-size: 100% 100%;
        }
        &:nth-child(2) span{
          background: url("./assets/common_pic/aside_icon_active_2.png") no-repeat;
          background-size: 100% 100%;
        }
        &:nth-child(3) span{
          background: url("./assets/common_pic/aside_icon_active_3.png") no-repeat;
          background-size: 100% 100%;
        }
        &:nth-child(4) span{
          background: url("./assets/common_pic/aside_icon_active_4.png") no-repeat;
          background-size: 100% 100%;
        }
        &:nth-child(5) span{
          background: url("./assets/common_pic/aside_icon_active_5.png") no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    .showc{
      flex:1;
    }
  }
}
// @import url("./assets/css/home.css");
@media all and (max-width: 1366px){
  .log {
    position: absolute;
    top: 0;
    left: 0;
    // display: block;
  }
  #app {
    margin: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  #app .alltop {
    width: 100%;
    color: #fff;
    text-align: center;
    height: 70px;
    line-height: 70px;
    font-size: 20px;
    position: relative;
    display: flex;
  }
  #app .alltop .bg_opacity {
    height: 70px;
    width: 100%;
    background: #eee;
    opacity: .4;
    position: absolute;
    top: 0;
    left: 0;
  }
  #app .alltop .logo {
    width: 153px;
    min-width: 153px;
  }
  #app .alltop .logo a {
    display: block;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  #app .alltop .logo a img {
    width: 44px;
    height: 44px;
  }
  #app .alltop .logo_opacity {
    width: 153px;
    height: 100%;
    background: #313131;
    opacity: .4;
    position: absolute;
    top: 0;
    left: 0;
  }
  #app .alltop .header {
    flex: 1;
    display: flex;
    padding: 0 19px 0 22px;
    min-width: 68px;
  }
  #app .alltop .header .name {
    font-size: 17px;
  }
  #app .alltop .header .sea {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  #app .alltop .header .sea .sea_input {
    display: flex;
    align-items: center;
    width: 173px;
    background: #fff;
    opacity: .6;
    height: 35px;
    border-radius: 3px 0px 0px 3px;
  }
  #app .alltop .header .sea .sea_input .input {
    flex: 1;
    background: none;
    height: 35px;
    text-indent: 7px;
  }
  #app .alltop .header .sea .sea_input span {
    display: block;
    width: 18px;
    height: 18px;
    background: url("./assets/common_pic/icon_sea.png") no-repeat;
    background-size: 100% 100%;
    margin-left: 8px;
  }
  #app .alltop .header .sea .el-button {
    border: none;
    border-radius: 0;
    width: 56px;
    height: 35px;
    color: #fff;
    background-color: #ffe009;
    font-size: 13px;
    border-radius: 0 3px 3px 0;
  }
  #app .alltop .header .sea i {
    margin-left: 20px;
  }
  #app .allbottom {
    flex: 1;
    display: flex;
    height: 100%;
    position: relative;
    min-width: 68px;
  }
  #app .allbottom .aside_opacity {
    background: #313131;
    opacity: .4;
    width: 153px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  #app .allbottom .rukou {
    width: 153px;
    height: 100%;
    font-size: 13px;
    z-index: 9;
    min-width: 153px;
  }
  #app .allbottom .rukou a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    height: 70px;
  }
  #app .allbottom .rukou a span {
    display: inline-block;
    width: 19px;
    height: 19px;
    margin-right: 13px;
  }
  #app .allbottom .rukou a:nth-child(1) span {
    background: url("./assets/common_pic/aside_icon1.png") no-repeat;
    background-size: 100% 100%;
  }
  #app .allbottom .rukou a:nth-child(2) span {
    background: url("./assets/common_pic/aside_icon2.png") no-repeat;
    background-size: 100% 100%;
  }
  #app .allbottom .rukou a:nth-child(3) span {
    background: url("./assets/common_pic/aside_icon3.png") no-repeat;
    background-size: 100% 100%;
  }
  #app .allbottom .rukou a:nth-child(4) span {
    background: url("./assets/common_pic/aside_icon4.png") no-repeat;
    background-size: 100% 100%;
  }
  #app .allbottom .rukou a:nth-child(5) span {
    background: url("./assets/common_pic/aside_icon5.png") no-repeat;
    background-size: 100% 100%;
  }
  #app .allbottom .rukou .router-link-active {
    background: #ffe009;
    color: #333;
  }
  #app .allbottom .rukou .router-link-active:nth-child(1) span {
    background: url("./assets/common_pic/aside_icon_active_1.png") no-repeat;
    background-size: 100% 100%;
  }
  #app .allbottom .rukou .router-link-active:nth-child(2) span {
    background: url("./assets/common_pic/aside_icon_active_2.png") no-repeat;
    background-size: 100% 100%;
  }
  #app .allbottom .rukou .router-link-active:nth-child(3) span {
    background: url("./assets/common_pic/aside_icon_active_3.png") no-repeat;
    background-size: 100% 100%;
  }
  #app .allbottom .rukou .router-link-active:nth-child(4) span {
    background: url("./assets/common_pic/aside_icon_active_4.png") no-repeat;
    background-size: 100% 100%;
  }
  #app .allbottom .rukou .router-link-active:nth-child(5) span {
    background: url("./assets/common_pic/aside_icon_active_5.png") no-repeat;
    background-size: 100% 100%;
  }
  #app .allbottom .showc {
    flex: 1;
  }
}

</style>
