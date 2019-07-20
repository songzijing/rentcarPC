<template>
  <div>
    <div class="box" >
    <div class="box-s"  >
      <h2>用户信息</h2>
      <el-row >
        <el-col :span="12" style="text-align:center" >
          <div class="grid-content bg-purple">
            <ul class="tab">
              <li><label for="">姓名： </label><input type="text" v-model="secont.userName"><span>*</span></li>
              <li><label for="">邮箱：</label><input type="text" class="gray" v-model="secont.email"></li>
              <li><label for="">积分：</label><input type="text" class="gray" v-model="secont.integral"></li>
              <li><label for="">紧急联系人：</label><input type="text" v-model="secont.contact"><span>*</span></li>
            </ul>
          </div>
        </el-col>
        <el-col :span="12" >
          <div class="grid-content bg-purple-light">
             <ul class="tab" >
              <li><label for="">手机号：</label><input type="text" v-model="secont.phone" ><span>*</span></li>
              <li><label for="">证件号：</label><input type="text" v-model="secont.identity"><span>*</span></li>
              <li><label for="">平价币：</label><input type="text" class="gray" v-model="secont.pjmoney"></li>
              <li><label for="">紧急联系人号码：</label><input type="text" v-model="secont.emergency"><span>*</span></li>
            </ul>
          </div>
        </el-col>
      </el-row>
      <h2>订单信息</h2>
      <el-row>
        <el-col :span="12" style="text-align:center">
          <div class="grid-content bg-purple">
            <ul class="tab">
              <li><label for="">定金：</label><input type="text" v-model="secont.rentMoney" ><span>*</span></li>
              <li><label for="">还车时间：</label><input type="text" v-model="secont.returnTime"><span>*</span></li>
            </ul>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
             <ul class="tab">
              <li><label for="">取车时间：</label><input type="text" v-model="secont.collectionTime"><span>*</span></li> 
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="inner">
      <h2>车辆信息</h2>
      <div class="info">
       <img src="./../assets/img/acceptance_1.png" alt="">
        <div>
          <p>{{secont.brand}}</p>
          <p>车牌号：{{secont.license}}</p>
          <p>{{secont.type}} {{secont.driveType}}  乘坐{{secont.seat}}人</p>
          <p>日租价：{{secont.rentMoney}}</p> 
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      secont:[]
    };
  },
  mounted(){
     this.$axios.post('http://wlz.in.8866.org:30167/order/findOrderNo',this.$qs.stringify({
          orderNo:this.$store.state.orderNO
        }))
        .then((res)=>{
           this.secont=res.data;
           console.log(this.secont);
        })
        .catch((err)=>{
            throw err;
        })
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
.box {
  height: 700px;
  background: #fff;
  border-radius: 15px;
  margin: 20px 0px 0px 0px;
  .box-s{
    margin-top:10px;
      h2{
        height:45px;
        line-height: 45px;
        margin:0px 0px 0px 163px;
        font-size:18px;
     }
     .tab{
       li{
         height:60px;
         label{
           display:inline-block;
            width:146px;
            text-align:right;
            font-size:16px;
         }
         input{
           width:248px;
           height:40px;
           border:1px solid #00a0e9;
           border-radius: 5px;
           margin:0px 0px 0px 0px;
           text-indent: .6rem;
         }
         .gray{
           border:1px solid #e8e8e8;
         }
         span{
           color:#fa020e;
           margin-left: 10px;
         }
       } 
     }
  }
  .inner{
    overflow: hidden;
    h2{
      height:45px;
        line-height: 45px;
        margin:12px 0px 12px 163px;
        font-size:18px;
    }
    .info{
         display: flex;
         overflow: hidden;
         width: 550px;
         height:155px;
         background: #fafafa;
         img{
             float: left;
              width:320px;
              height:130px;
              padding:40px 50px 0px 37px;
           }
         div{
           text-align: left;
          p{
            height:30px;
            flex: 1;
          }
         }
       }
  }
  button{
    float: right;
    color:#fff;
    font-size:20px;
    padding:10px 20px;
    background: #ffe009;
    border-radius: 5px;
    margin:-100px 300px 0px 0px ;
  }

}
@media all and (max-width: 1366px){
  .box {
  height: 490px;
  
  border-radius: 11px;
  margin: 14px 0px 0px 0px;
  .box-s{
    margin-top:7px;
      h2{
        height:32px;
        line-height: 32px;
        margin:0px 0px 0px 114px;
        font-size:13px;
     }
     .tab{
       li{
         height:42px;
         label{
          
            width:102px;
           
            font-size:12px;
         }
         input{
           width:173px;
           height:28px;
           border:1px solid #00a0e9;
           border-radius: 4px;
           margin:0px 0px 0px 0px;
           text-indent: .4rem;
         }
         .gray{
           border:1px solid #e8e8e8;
         }
         span{
          
           margin-left: 7px;
         }
       } 
     }
  }
  .inner{
    
    h2{
      height:32px;
        line-height: 32px;
        margin:8px 0px 8px 114px;
        font-size:13px;
    }
    .info{
        
         width: 385px;
         height:109px;
        
         img{
             
              width:224px;
              height:91px;
              padding:28px 35px 0px 26px;
           }
         div{
           
          p{
            height:21px;
            font-size: 12px;
          }
         }
       }
  }
  button{
    
    font-size:14px;
    padding:7px 14px;
   
    border-radius: 4px;
    margin:-70px 210px 0px 0px ;
  }

}
}
</style>
