<template>
  <div class='cz'>
    <div class='box'>
      <p class='amount'>
      <span>原手机号 :</span>
      <input type='text' v-model='phone'>
    </p>
    <p class='zh'>
      <span>新手机号 : </span>
      <input type='text' v-model='n_phone'>
    </p>
    <p class='btn'>
      <button @click='btn'>确定注册</button>
    </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone:'',
      n_phone:'',
      list:[
         {
           "name":"周天",
           "tel":"13935594304",
           "g_time":"2018-12-07",
           "c_model":"SUV",
           "rental":"日租",
           "done":"已完成",
           "operate":"无"
         },
        {
          "name":"陈先生",
           "tel":"18239953334",
           "g_time":"2018-8-07",
           "c_model":"ABC",
           "rental":"月租",
           "done":"未完成",
           "operate":"有"
         }
       ],
       lists:""
    }
  },
  methods: {
    btn(){
       var p= this.phone;
        for(let i in this.list){
            if(this.list[i].tel===p){
               this.list[i].tel=this.n_phone;
               this.lists=this.list[i];
               alert("成功更改手机号")
            }else if(this.phone===''){
               alert('请输入手机号')
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
.cz{
  margin:30px 0;
  background:#fff;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:10px;
   .box{
     .amount{
       font-size:16px;
        padding-top:200px;
     }
     input{
          border:1px solid #ccc;
          height:41px;
          width:250px;
          margin-left:25px;
          border-radius:5px;
          padding-left:20px;
        }
     .zh{
       font-size:16px;
       span:nth-child(2){
          margin-left:25px;
       }
     }
     .btn{
          padding-bottom:188px;
          padding-top:117px;
          text-align:center;
          button{
            width:250px;
            height:40px;
            line-height:40px;
            text-align:center;
            border-radius:5px;
            background:#ffe009;
            color:#fff;
            font-size:16px;
          }
       }
   }
}
</style>
