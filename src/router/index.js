import Vue from 'vue'
import Router from 'vue-router'
import Test from "../components/test.vue"
import Mend from "../page/mend.vue"
import Chel from "../page/chel.vue"
import Yud from "../page/yud.vue"
import Huiy from "../page/huiy.vue"
import Feiy from "../page/feiy.vue"

Vue.use(Router)

let a= new Router({
  routes: [
    {
      path: '/mend',
      name: 'Mend',
      component: Mend
    },
    {
      path: '/feiy',
      name: 'Feiy',
      component: Feiy
    },
    {
      path: '/huiy',
      name: 'Huiy',
      component: Huiy
    },
    {
      path: '/yud',
      name: 'Yud',
      component: Yud
    },
    {
      path: '/chel',
      name: 'Chel',
      component: Chel
    }
  ]
})
a.push('/mend')
export default a
