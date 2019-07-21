<template>
  <div class="login">
    <div class="l-left">
      <img src="./../assets/img/login_bg.jpg" alt />
    </div>
  <div class="l-right">
      <div class="top">
        <img src="./../assets/img/logo.png" alt class="pic" />
        <p>
          平价
          <sup>TM</sup>分时租车
        </p>
      </div>
      <form action>
        <p>
          <i class="el-icon-user icon"></i>
          <input type="text" placeholder="请输入账号" required v-model="user" />
        </p>
        <p>
          <i class="el-icon-lock icon"></i>
          <input type="password" placeholder="请输入密码" required v-model="pass" />
        </p>
        <p id="boo">
           <!-- @change="keep()" -->
          <el-checkbox v-model="checked" @change="keep()">保持登录状态</el-checkbox>
          <a href>忘记密码？</a>
        </p>
        <p>
          <button @click="fn">登录</button>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      user: "",
      pass: "",
      list: [],
    
    };
  },
  beforeMount(){

    let str= JSON.parse(localStorage.getItem('checked_'));
    this.checked=str;
    this.user=localStorage.getItem('userName_');
    this.pass=localStorage.getItem('passWord_');
   }, 
  mounted() {
    this.$axios
      .post(
        " http://wlz.in.8866.org:30167/admin/findAdmin",
        this.$qs.stringify({
          name: "aaa",
          password: 123
        })
      )
      .then(response => {
        this.list = response.data;
        console.log(this.list); 
      })
      .catch(err => {
        // throw err;
         this.$store.commit("isflag"); 
      });   
  },
  methods: {
    keep(){
          console.log(0);
       if(!this.checked){  
          localStorage.setItem('userName_',this.user);
          console.log(localStorage.getItem('userName_'));
          localStorage.setItem('passWord_',this.pass);
          localStorage.setItem('checked_',!this.checked); 
       }
    },
  fn() {
        if (this.user == this.list[0].name && this.pass == this.list[0].password) {
          this.$store.commit("isflag"); 
        } else {
          alert("账号或密码错误");
        }
    
   }
  },
  components: {}
};
</script>

<style scoped  lang="less">
.login {
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  .l-left {
    width: 60%;
    height: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .l-right {
    margin: 0px 50px;
    flex: 1;
    .top {
      margin: 120px 0px 0px 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 140px;
        height: 140px;
      }
      p {
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        margin: 0px 0px 0px 0px;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      p:nth-child(4) {
        border: none;
        margin-top: 150px;
      }
      p {
        width: 600px;
        height: 70px;
        line-height: 70px;
        border-bottom: 1px solid #e6e6e6;
        margin-top: 20px;
        color: #999999;
        input {
          margin-left: 25px;
          height: 26px;
          width: 543px;
          font-size: 18px;
        }

        button {
          width: 100%;
          color: #fff;
          background: #ffe009;
          border-radius: 35px;
          height: 70px;
          line-height: 70px;
          font-size: 24px;
        }

        .icon {
          font-size: 26px;
        }
        a {
          float: right;
          color: #999999;
        }
        .el-checkbox {
          color: #999999;
        }
      }
    }
  }
}

@media all and (max-width: 1366px) {
  .login {
    width: 100%;
    height: 100%;
    .l-left {
      width: 60%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .l-right {
      margin: 0px 35px;
      flex: 1;
      .top {
        margin: 84px 0px 0px 0px;

        img {
          width: 98px;
          height: 98px;
        }
        p {
          font-size: 16px;

          margin: 0px 0px 0px 0px;
        }
      }
      form {
        p:nth-child(4) {
          border: none;
          margin-top: 105px;
        }
        p {
          width: 420px;
          height: 48px;
          line-height: 48px;
          border-bottom: 1px solid #e6e6e6;
          margin-top: 14px;

          input {
            margin-left: 12px;
            height: 13px;
            width: 380px;
            font-size: 12px;
          }

          button {
            width: 100%;

            border-radius: 18px;
            height: 48px;
            line-height: 48px;
            font-size: 16px;
          }

          .icon {
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
