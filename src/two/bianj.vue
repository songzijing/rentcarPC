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
      <button @click='btn'>确定提交</button>
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
      list:[],
       lists:""
    }
  },
  methods: {
    btn(){
       this.$axios.post(
      'http://wlz.in.8866.org:30167/edit/setNewPhone',
      
       this.$qs.stringify(
       {
          "phone":this.phone,
          "n_phone":this.n_phone
       })).then((res)=>{
         this.list=res.data;
       }).catch((err)=>{
         console.log(err)
       });
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

  },
  mounted(){
    this.$axios.post(
       'https://www.easy-mock.com/mock/5d316209d57bda32b386d9b7/car/vip_check',this.$qs.stringify(
       {})).then((res)=>{
         this.list=res.data.list;
       }).catch((err)=>{
         console.log(err)
       });
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

@media all and (max-width:1366px){
  .cz{
  margin:21px 0;
  background:#fff;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:7px;
   .box{
     .amount{
       font-size:11px;
        padding-top:140px;
     }
     input{
          border:1px solid #ccc;
          height:28px;
          width:175px;
          margin-left:17px;
          border-radius:3px;
          padding-left:14px;
        }
     .zh{
       font-size:12px;
       span:nth-child(2){
          margin-left:17px;
       }
     }
     .btn{
          padding-bottom:132px;
          padding-top:82px;
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
}
</style>
