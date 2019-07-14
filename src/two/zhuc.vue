<template>
  <div class='zhuc'>
    <div>
      <form>
         <p>
           姓  名 ：<input type="text">
         </p>
         <p class='sex'>
            性  别 ：
            <input type="radio" name="sex" value='男'> 男
            <input type="radio" name="sex" value='女'> 女 
          
         </p>
         <p>
           手机号:
           <input type="text">
         </p>
         <p>
           证件号:
           <input type="text">
         </p>
         <p class='btn'>
           <button>注册</button>
         </p>
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
 .zhuc{
    margin:30px 0;
    background:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    div{
      margin-top:10px;
    }
    p{
      input{
          border:1px solid #00a0e9;
          height:41px;
          width:250px;
          margin-left:25px;
          border-radius:5px;
          padding-left:20px;
      }
    }
    .sex{
      // input{
      //     border:1px solid #00a0e9;
      //     height:15px;
      //     width:15px;
      //     margin-left:25px;
      //     border-radius:50%;
      //     border:block;
      // }
    }
    .btn{
          padding-bottom:70px;
          padding-top:70px;
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
</style>
