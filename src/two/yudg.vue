<template>
  <div>
    <div class="box">
      <div class="top">
        <p>
          <span>手机号：</span>
          <input type="text" />
          <button>查询</button>
        </p>
      </div>
      <div class="con">
        <header>
          <span class="name">客户姓名</span>
          <span>电话号码</span>
          <span>
            租赁方式
            <el-dropdown>
              <span class="el-dropdown-link">
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>时租</el-dropdown-item>
                <el-dropdown-item>日租</el-dropdown-item>
                <el-dropdown-item>月租</el-dropdown-item>
                <el-dropdown-item>顺风车</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </span>
          <span>车型</span>
          <span>证件类型</span>
          <span>证件号码</span>
          <span>取车时间</span>
          <span>操作</span>
        </header>
        <ul>
          <li>
            <span>
              <el-checkbox v-model="checked1"></el-checkbox>
              <!-- <input type="checkbox" value="1"> -->
              周一天
            </span>
            <span>13467890909</span>
            <span>日租</span>
            <span>SUA</span>
            <span>居民身份证</span>
            <span>412766299812567830</span>
            <span>2019-05-21</span>
            <span>
              <i class="el-icon-goods"></i>
              <i class="el-icon-delete"></i>
            </span>
          </li>
          <li>
            <span>
              <el-checkbox v-model="checked2"></el-checkbox>
              周一天
            </span>
            <span>13467890909</span>
            <span>日租</span>
            <span>SUA</span>
            <span>居民身份证</span>
            <span>412766299812567830</span>
            <span>2019-05-21</span>
            <span>
              <i class="el-icon-goods"></i>
              <i class="el-icon-delete"></i>
            </span>
          </li>
          <li>
            <span>
              <el-checkbox v-model="checked3"></el-checkbox>
              周一天
            </span>
            <span>13467890909</span>
            <span>日租</span>
            <span>SUA</span>
            <span>居民身份证</span>
            <span>412766299812567830</span>
            <span>2019-05-21</span>
            <span>
              <i class="el-icon-goods"></i>
              <i class="el-icon-delete"></i>
            </span>
          </li>
          <li>
            <span>
              <el-checkbox v-model="checked4"></el-checkbox>
              周一天
            </span>
            <span>13467890909</span>
            <span>日租</span>
            <span>SUA</span>
            <span>居民身份证</span>
            <span>412766299812567830</span>
            <span>2019-05-21</span>
            <span>
              <i class="el-icon-goods"></i>
              <i class="el-icon-delete"></i>
            </span>
          </li>
          <li>
            <span>
              <el-checkbox v-model="checked5"></el-checkbox>
              周一天
            </span>
            <span>13467890909</span>
            <span>日租</span>
            <span>SUA</span>
            <span>居民身份证</span>
            <span>412766299812567830</span>
            <span>2019-05-21</span>
            <span>
              <i class="el-icon-goods"></i>
              <i class="el-icon-delete"></i>
            </span>
          </li>
          <li>
            <span>
              <el-checkbox v-model="checked6"></el-checkbox>
              周一天
            </span>
            <span>13467890909</span>
            <span>日租</span>
            <span>SUA</span>
            <span>居民身份证</span>
            <span>412766299812567830</span>
            <span>2019-05-21</span>
            <span>
              <i class="el-icon-goods"></i>
              <i class="el-icon-delete"></i>
            </span>
          </li>
          <li>
            <span>
              <el-checkbox v-model="checked7"></el-checkbox>
              周二二
            </span>
            <span>13467890909</span>
            <span>日租</span>
            <span>SUA</span>
            <span>居民身份证</span>
            <span>412766299812567830</span>
            <span>2019-05-21</span>
            <span>
              <i class="el-icon-goods"></i>
              <i class="el-icon-delete"></i>
            </span>
          </li>
          <li>
            <span>
              <el-checkbox v-model="checked8"></el-checkbox>
              周二二
            </span>
            <span>13467890909</span>
            <span>日租</span>
            <span>SUA</span>
            <span>居民身份证</span>
            <span>412766299812567830</span>
            <span>2019-05-21</span>
            <span>
              <i class="el-icon-goods"></i>
              <i class="el-icon-delete"></i>
            </span>
          </li>
        </ul>
      
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false,
      checked7: false,
      checked8: false,
      checked9: false,
      checked10: false,
    };
  },
  mounted(){
        this.$axios.post('http://172.25.1.66:8080/order/findAll')
        .then((response)=>{
           console.log(response);
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
  margin: 20px 0px 30px 0px;
  height: 690px;
  background: #fff;
  border-radius: 15px;
  .top {
    height: 80px;
    border-bottom: 1px solid #e8e8e8;
    p {
      display: flex;
      align-items: center;
      margin-left: 32px;
      input {
        border: 1px solid #e8e8e8;
        width: 200px;
        height: 40px;
        border-radius: 8px;
        margin: 5px 35px 0 20px;
      }
      button {
        color: #000;
        background: #ffe009;
        padding: 5px 20px;
        border-radius: 5px;
        font-size: 16px;
        margin-top: 5px;
      }
    }
  }
  .con {
    height: 480px;
    header {
      font-size: 18px;
      color: #333;
      font-weight: normal;
      text-align: center;
      border-bottom: 1px solid #e8e8e8;
      display: flex;
      span{
            display: inline-block;
            text-align: center;
          }
          span:nth-of-type(4),span:nth-of-type(3),span:nth-of-type(5){
            flex: 1;
          }
          span:nth-of-type(8){
            width: 120px;
            text-align: center;
          }
          span:nth-of-type(7) {
            width: 180px;
            text-align: center;
          }
          span:nth-of-type(6) {
            width: 290px;
            text-align: center;
          }
          span:nth-of-type(5) {
            width: 140px;
            text-align: center;
          }
          .name{
            text-align: center;
           width: 300px;
          }
           span:nth-of-type(3) {
            min-width: 200px;
            text-align: center;
          }
          span:nth-of-type(2) {
            width: 140px;
            text-align: left;
          }
    }
    ul{
          height: 511px;
          overflow:auto;
      li{
          display: flex;
          span{
            display: inline-block;
            text-align: center;
          }
        span:nth-child(4),span:nth-child(3),span:nth-child(2),span:nth-child(5){
            flex: 1;
          }
          span:nth-child(8){
            width: 120px;
            text-align: center;
          }
          span:nth-child(7) {
            width: 180px;
            text-align: center;
          }
          span:nth-child(6) {
            width: 260px;
            text-align: center;
          }
          // span:nth-child(5) {
          //   width: 140px;
          //   text-align: center;
          // }
          span:nth-child(1) {
            width: 240px;
            text-align: center;
          }
          // span:nth-child(3) {
          //   width: 130px;
          //   text-align: center;
          // }
          // span:nth-child(2) {
          //   width: 130px;
          //   text-align: center;
          // }
          border-bottom: 1px solid #e8e8e8;
      }
    }
   
  }
}
@media all and (max-width: 1366px){
  .box {
  margin: 14px 0px 21px 0px;
  height: 483px;
 
  border-radius: 11px;
  .top {
    height: 56px;
   
    p {
      font-size: 14px;
     
      margin-left: 22px;
      input {
        border: 1px solid #e8e8e8;
        width: 140px;
        height: 28px;
        border-radius: 6px;
        margin: 3px 24px 0 14px;
      }
      button {
        
        padding: 4px 14px;
        border-radius: 4px;
         -webkit-transform-origin-x: 0;
        font-size: 11px;
        margin-top: 3px;
      }
    }
  }
  .con {
    height: 336px;
    header {
      font-size: 12px;
     
      border-bottom: 1px solid #e8e8e8;
      
      span{
           
            font-size:16px;
          }
          span:nth-of-type(8){
            width: 84px;
           
          }
          span:nth-of-type(7) {
            width: 126px;
          
          }
          span:nth-of-type(6) {
            width: 203px;
           
          }
          span:nth-of-type(5) {
            min-width: 98px;
           
          }
          .name{
           
           width: 210px;
          }
           span:nth-of-type(3) {
            min-width: 140px;
          }
          span:nth-of-type(2) {
            width: 98px;
           
          }
    }
    ul{
          height: 358px;
         
      li{
          span{
            font-size:14px;
          }
          span:nth-child(8){
            width: 84px;
          }
          span:nth-child(7) {
            width: 126px;
          }
          span:nth-child(6) {
            width: 182px;
          }
          span:nth-child(1) {
            width: 168px;
          }
          border-bottom: 1px solid #e8e8e8;
      }
    }
   
  }
}
}
</style>
