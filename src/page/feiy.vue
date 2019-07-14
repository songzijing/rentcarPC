<template>
  <div>
    <Test>
      <div class="head" slot="feiy">
        <ul>
          <li>
            <router-link to="/mend">结算管理</router-link>
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
                  <el-radio v-model="a" label="1">
                    <span class="radio">有</span>
                  </el-radio>
                  <el-radio v-model="a" label="2">
                    <span class="radio">无</span>
                  </el-radio>
                </li>
                <li>
                  车灯
                  <span>(是否完整)</span>
                  <el-radio v-model="b" label="5">
                    <span class="radio">是</span>
                  </el-radio>
                  <el-radio v-model="b" label="6">
                    <span class="radio">否</span>
                  </el-radio>
                </li>
                <li>
                  电瓶
                  <span>(是否损坏)</span>
                  <el-radio v-model="c" label="3">
                    <span class="radio">是</span>
                  </el-radio>
                  <el-radio v-model="c" label="4">
                    <span class="radio">否</span>
                  </el-radio>
                </li>
                <li>
                  油表
                  <span>(是否满格)</span>
                  <el-radio v-model="radio" label="15">
                    <span class="radio">是</span>
                  </el-radio>
                  <el-radio v-model="radio" label="16">
                    <span class="radio">否</span>
                  </el-radio>
                </li>
                <li>
                  刹车
                  <span>(是否损坏)</span>
                  <el-radio v-model="radio" label="13">
                    <span class="radio">是</span>
                  </el-radio>
                  <el-radio v-model="radio" label="14">
                    <span class="radio">否</span>
                  </el-radio>
                </li>
                <li>
                  空调
                  <span>(运营状况)</span>
                  <el-radio v-model="radio" label="11">
                    <span class="radio">好</span>
                  </el-radio>
                  <el-radio v-model="radio" label="12">
                    <span class="radio">坏</span>
                  </el-radio>
                </li>
                <li>
                  违章
                  <span>(是否违章)</span>
                  <el-radio v-model="radio" label="9">
                    <span class="radio">是</span>
                  </el-radio>
                  <el-radio v-model="radio" label="10">
                    <span class="radio">否</span>
                  </el-radio>
                </li>
                <li>
                  试驾
                  <span>(是否完整)</span>
                  <el-radio v-model="radio" label="7">
                    <span class="radio">是</span>
                  </el-radio>
                  <el-radio v-model="radio" label="8">
                    <span class="radio">否</span>
                  </el-radio>
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
                <span class="demonstration ti">租车时间:</span>
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
              </div> 
              <div class="bo">
                <span>支付金额 :</span>
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
      radio: "1",
      a:"2",
      b:"3",
      c:"4"
    };
  },
  methods: {},
  components: {
    Test
  }
};
</script>

<style scoped lang="less">
.box {
  margin: 0 30px 0 30px;
  background: #fff;
  border-radius: 10px;
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    p {
      font-size: 18px;
      color: #333333;
      margin: 30px 0 10px 28px;
    }
    .check,
    .account {
      margin: 0 0 0 30px;
    }
    .check {
      border-right: 1px solid #ccc;
      ul {
        &:last-child {
          margin-bottom: 25px;
        }
        li {
          font-size: 16px;
          margin-top: 17px;
          span {
            margin: 0 232px 0 15px;
            color: #999999;
            font-size: 14px;
          }
          .el-radio {
            width: 44px;
          }
          .radio {
            margin-left: 2px;
          }
        }
      }
    }
    .account{
      .top{
        overflow: hidden;
        .el-date-editor.el-input{
          width: 150px;
        }
        .block{
          float: left;
          .el-input--prefix .el-input__inner{
              height:35px;
          }
          .demonstration{
            margin:0 3px;
            font-size:16px;
          }
          .ti{
            margin-right:20px;
          }
        }
        
      }
      .con{
          span{
               font-size:16px;
           }
      }
      .bo{
        span{
          font-size:16px;
        }
      }
    }
  }
}
</style>
