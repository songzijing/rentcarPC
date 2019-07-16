<template>
  <div class='zhuc'>
    <div>
      <form>
         <p>
           姓  名 ：<input type="text">
         </p>
         <p class='sex'>
            性  别 ：
            <el-radio v-model="radio" label="1" class='nan dx'>男</el-radio>
            <el-radio v-model="radio" label="2" classs='dx'>女</el-radio>
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
      radio: '1'

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
      margin-top:30px;
    }
    p{
      margin-bottom:10px;
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
      .nan{
          margin-left:25px;
      }
      .dx{
        font-size:18px;
      }
    }
    .btn{
          padding-bottom:180px;
          padding-top:100px;
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

 @media all and (max-width:1366px){
  .zhuc{
    margin:21px 0;
    background:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:7px;
    div{
      margin-top:21px;
    }
    p{
      margin-bottom:7px;
      input{
          border:1px solid #00a0e9;
          height:28px;
          width:175px;
          margin-left:17px;
          border-radius:3px;
          padding-left:14px;
      }
    }
    .sex{
      .nan{
          margin-left:17px;
      }
      .dx{
        font-size:13px;
      }
    }
    .btn{
          padding-bottom:126px;
          padding-top:70px;
          text-align:center;
          button{
            width:175px;
            height:28px;
            line-height:28px;
            text-align:center;
            border-radius:3px;
            background:#ffe009;
            color:#fff;
            font-size:12px;
          }
    }
 }
 }
</style>
