<template>
  <div class='chax'>
     <div class='out'>
       <form action="#">
         <fieldset class='info'>
           <legend>会员基本信息</legend>
           <div class='box'>
             <div >
               <p>
                姓名：
             <input type="text" value='周天' name='xm'>
              </p>
              <p class='hs'>
                邮箱：
                <input type="text" name='email'>
              </p>
             </div>
            <div>
              <p>
             手机号：
             <input type="text" name='phone' value='15198095032'>
           </p>
           <p>
             证件号：
             <input type="text" name="zjh" value='410211199703204025'>
           </p>
            </div>
            <div>
              <button>查询</button>
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
             <li>
               <span>2018-12-07</span>
               <span>SUV</span>
               <span>日租</span>
               <span>已完成</span>
               <span>无</span>
             </li>
             <li>
               <span>2018-12-07</span>
               <span>SUV</span>
               <span>日租</span>
               <span>已完成</span>
               <span>无</span>
             </li>
           </ul>
         </fieldset>
       </form>
     </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

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
        padding-top:25px;
      }
      .box{
      display:flex;
      justify-content:space-between;
  
      p{
        height:40px;
        margin-top:20px;
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
    }
 
    
}
</style>
