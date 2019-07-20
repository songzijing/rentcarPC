<template>
  <div>
    <Test>
      <div class="head" slot="feiy">
        <ul>
          <li>
            <router-link to="/mend" class="router-link-active">结算管理</router-link>
          </li>
        </ul>
      </div>
    </Test>
    <div class="box">
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <p>验车</p>
            <div class="check">
              <ul>
                <li>
                  车体
                  <span>(有无划痕)</span>
                  <div class="li-box">
                   <el-radio v-model="car_a" label="1-1">
                    有
                   </el-radio>
                   <el-radio v-model="car_a" label="1-2">
                    无
                   </el-radio>
                  </div>
                </li>
                <li>
                  车灯
                  <span>(是否完整)</span>
                   <div class="li-box">
                  <el-radio v-model="car_b" label="2-1">
                    是
                  </el-radio>
                  <el-radio v-model="car_b" label="2-2">
                    否
                  </el-radio>
                  </div>
                </li>
                <li>
                  电瓶
                  <span>(是否损坏)</span>
                  <div class="li-box">
                  <el-radio v-model="car_c" label="8-1">
                    是
                  </el-radio>
                  <el-radio v-model="car_c" label="8-2">
                    否
                  </el-radio>
                  </div>
                </li>
                <li>
                  油表
                  <span>(是否满格)</span>
                  <div class="li-box">
                  <el-radio v-model="car_d" label="3-1">
                    是
                  </el-radio>
                  <el-radio v-model="car_d" label="3-2">
                    否
                  </el-radio>
                  </div>
                </li>
                <li>
                  刹车
                  <span>(是否损坏)</span>
                  <div class="li-box">
                  <el-radio v-model="car_e" label="4-1">
                    是
                  </el-radio>
                  <el-radio v-model="car_e" label="4-2">
                   否
                  </el-radio>
                  </div>
                </li>
                <li>
                  空调
                  <span>(运营状况)</span>
                  <div class="li-box">
                  <el-radio v-model="car_f" label="5-1">
                    好
                  </el-radio>
                  <el-radio v-model="car_f" label="5-2">
                    坏
                  </el-radio>
                  </div>
                </li>
                <li>
                  违章
                  <span>(是否违章)</span>
                  <div class="li-box">
                  <el-radio v-model="car_g" label="6-1">
                    是
                  </el-radio>
                  <el-radio v-model="car_g" label="6-2">
                    否
                  </el-radio>
                  </div>
                </li>
                <li>
                  试驾
                  <span>(是否完整)</span>
                  <div class="li-box">
                  <el-radio v-model="car_h" label="7-1">
                    是
                  </el-radio>
                  <el-radio v-model="car_h" label="7-2">
                    否
                  </el-radio>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <p>结算</p>
            <div class="account">
              <div class="top">
                <div class="block">
                  <span class="demonstration ti">租车时间 :</span>
                  <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
                </div>
                <div class="block">
                  <span class="demonstration">-</span>
                  <el-date-picker
                    v-model="value2"
                    align="right"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="pickerOptions"
                  ></el-date-picker>
                </div>
              </div>
              <div class="con">
                <span>支付方式 :</span>
                <div class="con-s">
                  <input type="text" :value="font" />
                  <el-dropdown>
                    <span class="el-dropdown-link">
                      <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item @click.native="ty(index)" v-for='(item,index) in type' :key='index'>{{item}}</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
              </div>
              <div class="bo">
                <span>支付金额 :</span>
                <p class="bo-s" contenteditable="true"></p>
              </div>
              <div class="foot">
                <button @click="finish">完成</button>
                
                </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Test from "./../components/test";

export default {
  data() {
    return {
      type:['微信','支付宝','银行卡'],
      font:"",
      car_a: "1-1",
      car_b: "",
      car_c: "",
      car_d: "",
      car_e: "",
      car_f: "",
      car_g: "",
      car_h: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      value2: ""
    };
  },
  methods: {
      ty(index){
        this.font=this.type[index];
      },
      finish(){
        alert('结算完成');
      }
  },
  components: {
    Test
  }
};
</script>

<style scoped lang="less">
.box {
  margin: 0 21px 0 21px;
  background: #fff;
  border-radius: 10px;
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    p {
      font-size: 18px;
      color: #333333;
      margin: 21px 0 10px 28px;
    }
    .check,
    .account {
      margin: 0 0 0 21px;
    }
    .check {
      border-right: 1px solid #ccc;
      ul {
        &:last-child {
          margin-bottom: 60px;
        }

        li {
            display:flex ;
            
          font-size: 16px;
          margin-top: 50px;
          span {
           
            color: #999999;
            font-size: 14px;
          }
          .li-box{
             flex:1;
             text-align: right;
             padding-right:21px;
          .el-radio {
            width: 44px;
          }
          .radio {
            margin-left: 2px;
          }
          }
        }
      }
    }
    .account {
      .top {
        overflow: hidden;
        margin-top: 42px;
        .el-date-editor.el-input {
          width: 220px;
        }
        .block {
          float: left;
          .el-input--prefix .el-input__inner {
            height: 40px;
          }
          .demonstration {
            margin: 0 15px;
            font-size: 16px;
          }
          .ti {
            margin-right: 40px;
          }
        }
      }
      .con {
        overflow: hidden;
        margin-top: 21px;
        span {
          float: left;
          font-size: 16px;
          margin: 9px 0px 0px 16px;
        }
        .con-s {
          input {
            float: left;
            background:#fff;
            width: 160px;
            height: 38px;
            border: none;
            border-radius: 5px;
            text-indent: 2rem;
          }
          float: left;
          width: 200px;
          height: 40px;
          border: 1px solid #dde0e7;
          border-radius: 5px;
          margin: 0px 0px 0px 48px;

          .el-icon--right {
            margin-left: -5px;
           
          }
        }
      }
      .bo {
        overflow: hidden;
        margin-top:21px;
        span {
          float: left;
          font-size: 16px;
          margin: 9px 0px 0px 16px;
        }
        .bo-s{
          float: left;
          overflow: hidden;
          width: 200px;
          height: 40px;
          line-height: 40px;
          border: 1px solid #dde0e7;
          border-radius: 5px;
          margin: 0px 0px 0px 48px;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-indent: 2rem;
        }
      }
      .foot{
        float:right;
        button{
          color: #fff;
          background: #ffe009;
          padding:10px 20px;
          font-size:16px;
          border-radius: 5px;
          margin:260px 50px 0px 0px;
        }
        p{
          font-size:14px;
          margin:60px 50px 0px 0px;
        }
      }
    }
  }
}
@media all and (max-width: 1366px){
  .box {
  margin: 0 21px 0 21px;
  border-radius: 7px;
  .grid-content {
    p {
      font-size: 12px;
      margin: 21px 0 7px 19px;
    }
    .check,
    .account {
      margin: 0 0 0 21px;
    }
    .check {
      ul {
        &:last-child {
          margin-bottom: 42px;
        }

        li {
          font-size: 12px;
          margin-top: 35px;
          span {
            font-size: 12px;
          }
          .li-box{
             padding-right:21px;
          .el-radio {
            width: 30px;
          }
          .radio {
            margin-left: 2px;
          }
          }
        }
      }
    }
    .account {
      overflow: hidden;
      .top {
        min-width: 438px;
        margin-top: 29px;
        .el-date-editor.el-input {
          width: 154px;
        }
        .block {
          .el-input--prefix .el-input__inner {
            height: 32px;
          }
          .demonstration {
            margin: 0 10px;
            font-size: 12px;
          }
          .ti {
            margin-right: 32px;
          }
        }
      }
      .con {
        margin-top: 21px;
        span {
          font-size: 12px;
          margin: 6px 0px 0px 12px;
        }
        .con-s {
          input {
            width: 112px;
            height: 27px;
            border-radius: 4px;
            text-indent: 1.5rem;
          }
          width: 140px;
          height: 32px;
          border-radius: 4px;
          margin: 0px 0px 0px 33px;

          .el-icon--right {
            margin-left: -4px;
          }
        }
      }
      .bo {
        margin-top:21px;
        span {
          font-size: 12px;
          margin: 6px 0px 0px 12px;
        }
        .bo-s{
          width: 140px;
          height: 32px;
          line-height: 32px;
          border-radius: 4px;
          margin: 0px 0px 0px 33px;
          text-indent: 1.5rem;
        }
      }
      .foot{
        button{
          padding:7px 14px;
          font-size:12px;
          border-radius: 4px;
          margin:182px 35px 0px 0px;
        }
        p{
          font-size:12px;
          margin:42px 35px 0px 0px;
        }
      }
    }
  }
}
}
</style>
