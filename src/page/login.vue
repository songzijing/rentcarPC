<template>
  <div class="login">
       <div class="l-left">
         <img src="./../assets/img/login_bg.png" alt="">
        </div>
       <div class="l-right">
         <div class="top">
           <img src="./../assets/img/logo.png" alt="" class="pic">
           <p>平价<sup>TM</sup>分时租车</p>
         </div>
         <form action="">
           <p>
             <i class="el-icon-user icon" ></i>
             <input type="text" placeholder="请输入账号">
          </p> 
          <p>
             <i class="el-icon-lock icon"></i>
             <input type="text" placeholder="请输入密码">
            </p>
          <p>
              <el-checkbox v-model="checked">保持登录状态</el-checkbox>
              <a href="">忘记密码？</a>
            </p>
            <p>
              <button>登录</button>
              </p>
         </form>
       </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
         checked: false
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped  lang="less">
  .login{
    width:100%;
    height: 100%;
    background: white;
    display: flex;
    .l-left{
      width: 60%;
      height:100%;
      overflow: hidden;
      img{
      width: 100%;
      height:100%;
     }
    }
    .l-right{
      margin:0px 50px;
      flex:1;
      .top{
        margin:120px 0px 0px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
          width: 140px;
          height:140px;
        }
        p{
          font-size:24px;
          font-weight:bold;
          text-align: center;
          margin:0px 0px 0px 0px;
        }
      }
      form{
        display: flex;
        flex-direction: column;
        align-items: center;
        p:nth-child(4){
            border:none;
            margin-top:150px;
        }
        p{
          width: 600px;
          height:70px;
          line-height: 70px;
          border-bottom:1px solid #e6e6e6;
          margin-top:20px;
          color:#999999;
          input{
            margin-left:25px;
            height:26px;
            width: 543px;
            font-size:18px;
          }
          button{
            width: 100%;
            color:#fff;
            background: #ffe009;
            border-radius: 35px;
            height:70px;
            line-height: 70px;
            font-size:24px;
          }
          .icon{
            font-size:26px;
          }
          a{
            float:right;
            color:#999999;
          }
          .el-checkbox{
               color:#999999;
          }
        }
      }
    }
    

  }
</style>
