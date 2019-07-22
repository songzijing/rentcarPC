// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App';
import router from './router';

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from "axios";
Vue.prototype.$axios=axios;

import qs from 'qs';
Vue.prototype.$qs = qs;

import Vuex from "Vuex";
Vue.use(Vuex);


Vue.config.productionTip = false;

let mokuai1={
  state:{
    a:'aaaa',
    b:'bbbb',
  }
}
let mokuai2={
  state:{
    c:'acccc',
    d:'ddddd'
  }
}
/* eslint-disable no-new */
let store=new Vuex.Store({
  state:{ 
    num:97,
    // 控制下单总数 会员总数。。。显示
    listShow:true,
    // 控制登录页面显示
    flag:false,
    //预订管理点击的当前订单号
    orderNO:'',
    // 门店导航名
    homeName:"首页",
    // 查看 相应的下标
    carIndex:"",
    // 控制请示数据慢的时候  正在加载显示
    acceptShow:true
    },
  mutations: {
    
    //接收预订管理的当前订单号
    order(state,o){
        state.orderNO=o;
    },
    change(state,a){
      state.num=a;
    },
    // 控制下单总数 会员总数。。。显示
    isshow(state){
      state.listShow = !state.listShow;
    },
    // 控制登录页面显示
    isflag(state){
      state.flag = !state.flag;
    },
    // 改变导航首页为下单总数
    orderName(state){
      state.homeName = "下单总数";
    },
    // 改变导航首页为上传照片数量
    imgName(state){
      state.homeName = "上传照片数量";
    },
    // 改变导航首页为会员总数
    vipName(state){
      state.homeName = "会员总数";
    },
     // 改变导航首页为在线客户
    onlineName(state){
      state.homeName = "在线客户";
    },
    // 门店首页  查看  获取相应的车牌号下标
    carNum(state,index){
      state.carIndex = index;
    }
  },
  getters:{
    numa(state){
      let a=parseInt(state.num)+1
      return a;
    }
  },
  modules: {
    a:mokuai1,
    b:mokuai2
  }
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
  
})

