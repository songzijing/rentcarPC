<template>
  <div id="app">
    <div class="mainpage">

      <div class="alltop">

      </div>
      <div class="allbottom">
        <div class="rukou">
          <router-link to="/mend">门店管理</router-link>
          <router-link to="/feiy">费用管理</router-link>
          <router-link to="/yud">预定管理</router-link>
          <router-link to="/huiy">会员管理</router-link>
          <router-link to="/chel">车辆管理</router-link>
        </div>
        <router-view class="showc"></router-view>
      </div>
    </div>
    <div class="log">
      <Login></Login>
    </div>
  </div>
</template>

<script>
import Rem from "./assets/js/rem.js"
import Login from "./page/login.vue"
export default {
  name: 'App',
  methods: {
    
  },
  mounted () {
    Rem.setRem();
    window.onresize=Rem.setRem;
  },
  components:{
    Login
  }
}
</script>

<style lang="less">
.mainpage,.log,html,body,#app{
  width: 100%;
  height: 100%;
}
.log{
  position: absolute;
  top:0;
  left: 0;
  display: none;
}
ul,h1,h2,h3,h4,h5,h6,p,body,html{
  margin: 0;
  padding: 0;
}
#app {
  margin: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .alltop{
    width: 100%;
    height: .98rem;
    background: rgba(0,0,0,.5);
  }
  .allbottom{
    flex: 1;
    display: flex;
    height: 100%;
    .rukou{
      background: rgba(0,0,0,.3);
      width:2.19rem;
      height: 100%;
      font-size: 20px;
      a{
        display: block;
      }
    }
    .showc{
      flex:1;
    }
  }
}
</style>
