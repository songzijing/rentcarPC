<template>
  <div class="look">
    <div class="back" @click="show">
        <img src="../../assets/img/back.png">
    </div>
    <!-- 查看信息列表 -->
    <ul class="list">
      <li>
        <label for="userName">客户名称：</label>
        <input type="text" id="userName">
      </li>
      <li>
        <label for="carNum">车牌号：</label>
        <input type="text" id="carNum">
      </li>
      <li>
        <label for="phoneNum">手机号：</label>
        <input type="text" id="phoneNum">
      </li>
      <li>
        <label for="cardNum">证件号：</label>
        <input type="text" id="cardNum">
      </li>
      <li>
        <label >下单时间：</label>
        <input type="text"> ——— <input type="text">
      </li>
      <li>
        <label for="payment">支付金额：</label>
        <input type="text" id="payment">
      </li>
      <li>
        <label for="orderState">订单状况：</label>
        <input type="text" id="orderState">
      </li>
      <li>
        <label for="shop">门店：</label>
        <input type="text" id="shop">
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        
      }
    },
    methods: {
        show(){
            this.$store.commit("isshow");
        }
    },
    components: {
      
    }
  }

</script>

<style scoped lang="less">
.look{
    height: 100%;
    background: #fff;
    border-radius: 13px;
    font-size: 14px;
    color: #333;
    .back{
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 33px;
    }
    a{
        display: block;
    }
    .list{
        width: 37%;
        margin: 0 auto 120px auto;
        li{
            margin-bottom: 20px;
            &:nth-child(5) input{
                width: 150px;
                height: 40px;
            }
        }
        input{
            width: 251px;
            height: 40px;
            border-radius: 5px;
            border: solid 1px #d2d2d2;
            text-indent: 14px;
            &:focus{
                border: 1px solid #00a0e9;
                border-shadow: 0 0 3px #00a0e9;
            }
        }
        label{
            display: inline-block;
            width: 80px;
            text-align: right;
            margin-right: 13px;
        }
    }
}
</style>
