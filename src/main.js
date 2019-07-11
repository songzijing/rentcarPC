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

import Vuex from "Vuex";
Vue.use(Vuex);

Vue.config.productionTip = false;

let mokuai1={
  state:{
    a:'aaaa',
    b:'bbbb'
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
    num:97
  },
  mutations: {
    change(state,a){
      state.num=a;
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
