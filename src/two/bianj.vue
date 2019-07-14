<template>
  <div class='cz'>
    <div class='box'>
      <p class='amount'>
      <span>原手机号 :</span>
      <input type='text'>
    </p>
    <p class='zh'>
      <span>新手机号 :</span>
      <input type='text'>
    </p>
    <p class='btn'>
      <button>确定注册</button>
    </p>
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
        padding-top:100px;
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
          padding-bottom:120px;
          padding-top:60px;
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
