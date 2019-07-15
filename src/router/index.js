import Vue from 'vue'
import Router from 'vue-router'
// 门店
import Mend from "../page/mend/mend.vue"
import HomeList from "../page/mend/homeList.vue"
import OrderTotal from "../page/mend/orderTotal.vue"
import OnlineCustomers from "../page/mend/OnlineCustomers.vue"
import Vip from "../page/mend/Vip.vue"
import ImgNum from "../page/mend/imgNum"
// 车俩管理
import Chel from "../page/chel.vue"
// 预订管理
import Yud from "../page/yud.vue"
import Shoul from "../two/shoul"
import Yudg from "../two/yudg"
// 会员管理
import Huiy from "../page/huiy.vue"
// 费用管理
import Feiy from "../page/feiy.vue"
import Zhuc from "../two/zhuc"
import Bianj from "../two/bianj"
import Chax from "../two/chax"
import Chongz from "../two/chongz"
import Login from "../page/login"

Vue.use(Router)

let a = new Router({
    routes: [{
            path: '/mend',
            name: 'Mend',
            component: Mend,
            children:[{
                path:"homelist",
                name:"HomeList",
                component:HomeList
            },{
                path:"",
                name:"HomeList",
                component:HomeList
            },{
                path:"ordertotal",
                name:"OrderTotal",
                component:OrderTotal
            },{
                path:"online",
                name:"OnlineCustomers",
                component:OnlineCustomers
            },{
                path:"vip",
                name:"Vip",
                component:Vip
            },{
                path:"imgnum",
                name:"ImgNum",
                component:ImgNum
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
                    redirect: "Zhuc"
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
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})
a.push('/mend')
export default a