<template>
  <div class='chax'>
     <div class='out'>
       <form>
         <fieldset class='info'>
           <legend>会员基本信息</legend>
           <div class='box'>
             <div >
               <p class='bon'>
                姓名：
                <input type="text" name='xm' v-model='xm_'>
              </p>
              <p class='hs'>
                邮箱：
                <input type="text" name='email'>
              </p>
             </div>
            <div >
              <p class='bon'>
             手机号：
             <input type="text" name='phone' value='15198095032'>
             </p>
           <p>
             证件号：
             <input type="text" name="zjh" value='410211199703204025'>
           </p>
            </div>
            <div>
              <button @click='btn_'>查询</button>
            </div>
           </div>
         </fieldset>
         <fieldset class='info'>
           <legend>账户信息</legend>
           <div class='box'>
             <div>
             <p class='hs'>
             积分：
             <input type="text" name="jf" id="" >
           </p>
           </div>
           <div>
             <p class='hs'>
             平驾币：
             <input type="text" name="pjb" id="">
           </p>
           </div>
           <div>
             <router-link to='/huiy/chongz'>
               <button>充值</button>
             </router-link>
              
            </div>
           </div>
         </fieldset>
         <fieldset class='info'>
           <legend class='xf'>消费记录</legend>
           <ul>
             <li>
               <span>时间</span>
               <span>车型</span>
               <span>租凭方式</span>
               <span>处理状态</span>
               <span>操作</span>
             </li>
             <li class='hov'>
               <span>{{lists.g_time}}</span>
               <span>{{lists.c_model}}</span>
               <span>{{lists.rental}}</span>
               <span>{{lists.done}}</span>
               <span>{{lists.operate}}</span>
             </li>
           </ul>
           <div class='num'>
              <div class="block">
                  <el-pagination
                    :current-page.sync="currentPage3"
                    :page-size="10"
                    layout="prev, pager, next, jumper"
                    :total="100">
                  </el-pagination>
                </div>
           </div>
         </fieldset>
       </form>
     </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        xm_:'',
       list:[
         {
           "name":"周天",
           "tel":"13935567894",
           "g_time":"2018-12-07",
           "c_model":"SUV",
           "rental":"日租",
           "done":"已完成",
           "operate":"无"
         },
        {
          "name":"陈先生",
           "tel":"13935567894",
           "g_time":"2018-8-07",
           "c_model":"ABC",
           "rental":"月租",
           "done":"未完成",
           "operate":"有"
         }
       ],
       lists:"",
       currentPage3: 3
    }
  },
  methods: {
      btn_(){
          var c= this.name_;
        for(let i in this.list){
            if(this.list[i].car===c){
               this.lists=this.list[i]
            }else if(c===""){
               alert("请输入车主名");
            }
            console.log(this.lists)
        }
      }
  },
  components: {

  }
}
</script>

<style scoped lang='less'>
.chax{
    margin:30px 0;
    padding:0 30px;
    background:#fff;
    border-radius:10px;
      legend{
        padding-top:20px;
      }
      .box{
      display:flex;
      justify-content:space-between;
       .bon{
           margin-bottom:20px;
       }
      p{
        height:40px;
        input{
          border:1px solid #00a0e9;
          border-radius:5px;
          width:248px;
          height:38px;
          padding-left:20px;
        }
      }
      button{
        width:60px;
        height:30px;
        line-height:30px;
        text-align:center;
        background:#ffe009;
        border-radius:5px;
      }
      .hs{
        input{
          border:1px solid #ccc;
        }
      }
    }
    
    ul{
      margin:0 -45px;
      li{
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        display:flex;
        justify-content:space-between;
        height:60px;
        line-height:60px;
        span{
          display:block;
          width:150px;
          text-align:center;
        }
        span:nth-child(1){
          padding-left:30px;
        }
      }
      .hov:hover{
         background:rgb(235, 235, 235);
      }
    }
    .num{
      text-align:right;
      padding-top:10px;
      height:40px;
    }
    
}
</style>
