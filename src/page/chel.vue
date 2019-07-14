<template>
  <div class='zt'>
    <Test>
      <div class="head" slot='chel'>
          <ul>
            <li>
              <router-link to="/mend">车辆查询</router-link>
            </li>
          </ul>
        </div>
    </Test>

    <div class='chel'>
       <div class='main'>
         <p class='cx'>
           <span>车牌号：</span>
           <input type="text" value='豫A6666' class='l'>
           <button>查询</button>
         </p>
         <div class='info'>
            <p>
              <span>车牌号：</span>
              <input type="text" value='豫A6666'>
            </p>
            <p>
             <span> 发动机号码：</span>
              <input type="text" value='246764K'>
            </p>
            <p>
              <span>核载人数：</span>
              <input type="text" value='5'>
            </p>
            <p>
              <span>注册时间：</span>
              <input type="text" value='2017-07-07'>
            </p>
            <p>
              <span>发证时间：</span>
              <input type="text" value='2017-08-07'>
            </p>
            <p>
              <span>车主：</span>
              <input type="text" value='车主'>
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

    }
  },
  methods: {

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
      margin-top:18px;
      font-size:17px;
      input{
        border-radius:5px;
         width:250px;
         padding:10px 25px;
         border:1px solid #ccc;
      }
      span{
        display:inline-block;
        width:120px;
        text-align:right;
        margin-right:15px;
      }
    }
  }
   .cx{
     padding:18px 0 10px;
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
     padding-bottom:60px;
   }
}
</style>
