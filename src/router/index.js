import Vue from 'vue'
import Router from 'vue-router'
import Test from "../components/test.vue"
// 门店首页
import Mend from "../page/mend/index.vue"
import OrderTotal from "../page/mend/orderTotal.vue"
import Chel from "../page/chel.vue"
import Yud from "../page/yud.vue"
import Huiy from "../page/huiy.vue"
import Feiy from "../page/feiy.vue"
import Zhuc from "../two/zhuc"
import Bianj from "../two/bianj"
import Chax from "../two/chax"
import Chongz from "../two/chongz"
import Shoul from "../two/shoul"
import Yudg from "../two/yudg"

Vue.use(Router)

let a = new Router({
    routes: [{
            path: '/mend',
            name: 'Mend',
            component: Mend,
            children: [{
                path: "ordertotal",
                name: "OrderTotal",
                component: OrderTotal
            }]
        },
        {
            path: '/feiy',
            name: 'Feiy',
            component: Feiy
        },
        {
            path: '/huiy',
            name: 'Huiy',
            component: Huiy,
            children: [{
                    path: '/',
                    name: 'Zhuc',
                    component: Zhuc
                }, {
                    path: 'zhuc',
                    name: 'Zhuc',
                    component: Zhuc
                },
                {
                    path: 'bianj',
                    name: 'Bianj',
                    component: Bianj
                },
                {
                    path: 'chax',
                    name: 'Chax',
                    component: Chax
                },
                {
                    path: 'chongz',
                    name: 'Chongz',
                    component: Chongz
                },
            ]
        },
        {
            path: '/yud',
            name: 'Yud',
            component: Yud,
            children: [

                {
                    path: '/',
                    name: 'Yudg',
                    component: Yudg
                },
                {
                    path: 'yudg',
                    name: 'Yudg',
                    component: Yudg
                },
                {
                    path: 'shoul',
                    name: 'Shoul',
                    component: Shoul
                },

            ]
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