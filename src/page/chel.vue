<template>
  <div class='zt'>
    <Test>
      <div class="head" slot='chel'>
          <ul>
            <li>
              <router-link to="/">车辆查询</router-link>
            </li>
          </ul>
        </div>
    </Test>

    <div class='chel'>
       <div class='main'>
         <p class='cx'>
           <span>车牌号：</span>
           <input type="text" class='l' v-model='car_'>
           <button @click='btn'>查询</button>
         </p>
         <div class='info'>
            <p>
              <span>车牌号：</span>
              <span>{{license}}</span>
            </p>
            <p>
             <span> 发动机号码：</span>
              <span>{{fdong}}</span>
            </p>
            <p>
              <span>核载人数：</span>
              <span>{{seat}}</span>
            </p>
            <p>
              <span>注册时间：</span>
              <span>{{zhuce}}</span>
            </p>
            <p>
              <span>发证时间：</span>
              <span>{{fazheng}}</span>
            </p>
            <p>
              <span>车主：</span>
              <span>{{owner}}</span>
            </p>
         </div>
       </div>
    </div>
  </div>
</template>

<script>
import Test from './../components/test';
export default {
  data() {
    return {
    car_:'',
  list:[
         {
           "car":"豫A6666",
           "tel":"246764K",
           "num":"5",
           "z_time":"2017-07-07",
           "f_time":"2017-08-07",
           "name":"周天"
         },
        {
           "car":"豫A6896",
           "tel":"156664Q",
           "num":"4",
           "z_time":"2019-07-07",
           "f_time":"2019-08-07",
           "name":"陈先生"
         }
       ],
       lists:""
    }
  },
  methods: {
     btn(){
        this.$axios.post('http://wlz.in.8866.org:30167/vehicle/findByLicense',
          this.$qs.stringify({
            "license":this.car_
          }))
          .then((res)=>{
            console.log(res.data)
            this.list=res.data;
           this.license=res.data.license;
           this.seat=res.data.seat;
           this.owner=res.data.owner;
           this.zhuce=res.data.zhuce;
           this.fazheng=res.data.fazheng;
           this.fdong=res.data.fdong;

          }).catch((err)=>{
            console.log(err)
          });
        
     }
  },
  components: {
   Test
  }
}
</script>

<style scoped lang='less'>
.zt{
  display:flex;
  flex-direction:column;
}
.chel{
  background:#fff;
  border-radius:10px;
  display:flex;
  justify-content:center;
  margin:0 30px 30px 30px;
  flex-grow:0;
  .main{
    p{
      margin-top:25px;
      font-size:17px;
      input{
        border-radius:5px;
         width:250px;
         padding:10px 25px;
         border:1px solid #ccc;
      }
      span:nth-child(2){
        display:inline-block;
        border-radius:5px;
         width:250px;
         height:40px;
         line-height:40px;
         padding-left:20px;
         border:1px solid #ccc;
      }
      span:nth-child(1){
        display:inline-block;
        width:120px;
        text-align:right;
        margin-right:15px;
      }
    }
  }
   .cx{
     padding:18px 0 30px;
       .l{
         border:1px solid #00a1e7;
       }
     button{
       width:60px;
       height:30px;
      border-radius:5px;
       text-align:center;
       background:#ffe108;
       margin-left:55px;
     }
   }
   .info{
     padding-bottom:200px;
   }
}

@media all and (max-width: 1366px){
.chel{
  border-radius:7px;
  margin:0 21px 21px 21px;
  flex-grow:0;
  .main{
    p{
      margin-top:18px;
      font-size:12px;
      input{
        border-radius:3px;
         width:175px;
         padding:7px 18px;
      }
      span:nth-child(2){
        border-radius:3px;
         width:175px;
         height:28px;
         line-height:28px;
         padding-left:14px;
      }
      span:nth-child(1){
        width:84px;
        margin-right:11px;
      }
    }
  }
   .cx{
     padding:13px 0 21px;
     button{
       width:42px;
       height:21px;
      border-radius:3px;
       margin-left:38px;
     }
   }
   .info{
     padding-bottom:140px;
   }
}
}
</style>
