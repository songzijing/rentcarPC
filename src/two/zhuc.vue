<template>
  <div class='zhuc'>
    <div>
      <form>
         <p>
           姓  名 ：<input type="text" v-model='xm'>
         </p>
         <p class='sex'>
            性  别 ：
            <el-radio v-model="radio" label="1" class='nan dx'>男</el-radio>
            <el-radio v-model="radio" label="2" classs='dx'>女</el-radio>
         </p>
         <p>
           手机号:
           <input type="text" v-model='phone'>
         </p>
         <p>
           证件号:
           <input type="text" v-model='id'>
         </p>
         <p class='btn'>
           <button @click.prevent='btn'>注册</button>
         </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: '1',
      xm:'',
      phone:'',
      id:''

    }
  },
  methods: {
     btn(){

 this.$axios.post(
     
      'http://wlz.in.8866.org:30167/edit/editmember',
      
       this.$qs.stringify(
       {
          "mname":this.xm,
          "phone":this.phone,
          "mgrender":"女",
          "card":this.id
       })).then((res)=>{
          console.log(res)
         this.list=res.data.list;
        
       }).catch((err)=>{
         console.log(err)
       });
     

       console.log(this.xm)
       console.log(this.phone)
       console.log(this.id)
       var reg = /^[\u4E00-\u9FA5]{2,10}$/;
       var reg1=/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
       var reg2=/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
        if(!reg.test(this.xm))  {
          alert('请输入正确的姓名')
        }else if(!reg1.test(this.phone)){
          alert('请输入正确的手机号')
        }else if(!reg2.test(this.id)){
          alert('请输入正确的证件号')
        }else {
          alert("会员注册成功")
        }  
         
       
     }
  },
  components: {

  },
  mounted(){
    
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
