<template>
  <div>
    <div class="box">
    <div class="box-s">
      <h2>用户信息</h2>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <ul class="tab">
              <li><label for="">姓名：</label><input type="text"><span>*</span></li>
              <li><label for="">邮箱：</label><input type="text" class="gray"></li>
              <li><label for="">积分：</label><input type="text" class="gray"></li>
              <li><label for="">紧急联系人：</label><input type="text"><span>*</span></li>
            </ul>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
             <ul class="tab">
              <li><label for="">手机号：</label><input type="text"><span>*</span></li>
              <li><label for="">证件号：</label><input type="text"><span>*</span></li>
              <li><label for="">平价币：</label><input type="text" class="gray"></li>
              <li><label for="">紧急联系人号码：</label><input type="text"><span>*</span></li>
            </ul>
          </div>
        </el-col>
      </el-row>
      <h2>订单信息</h2>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <ul class="tab">
              <li><label for="">定金：</label><input type="text"><span>*</span></li>
              <li><label for="">还车时间：</label><input type="text"><span>*</span></li>
            </ul>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
             <ul class="tab">
              <li><label for="">取车时间：</label><input type="text"><span>*</span></li> 
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
        margin:0px 0px 0px 26px;
     }
     .tab{
       li{
         label{
           display:inline-block;
            width:146px;
            text-align:right;
         }
         input{
           width:248px;
           height:40px;
           border:1px solid #00a0e9;
           border-radius: 5px;
           margin:0px 0px 0px 0px;
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
}
</style>
