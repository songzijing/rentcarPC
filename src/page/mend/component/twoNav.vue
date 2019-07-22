<template>
  <div>
      <ul class="two_nav">
      <li @click="orderCli">
        <router-link to="/mend/ordertotal">
          <img src="../../../assets/img/home_icon1.png" alt="">
          <div class="info">
            <p>下单总数</p>
            <p>{{orderLen}}</p>
          </div>
        </router-link>
      </li>
      <li @click="imgCli">
        <router-link to="/mend/imgnum">
          <img src="../../../assets/img/home_icon2.png" alt="">
          <div class="info">
            <p>上传照片数量</p>
            <p>6</p>
          </div>
        </router-link>
      </li>
      <li @click="vipCli">
        <router-link to="/mend/vip">
          <img src="../../../assets/img/home_icon3.png" alt="">
          <div class="info">
            <p>会员总数</p>
            <p>{{vipLen}}</p>
          </div>
        </router-link>
      </li>
      <li @click="onlineCli">
        <router-link to="/mend/online">
          <img src="../../../assets/img/home_icon4.png" alt="">
          <div class="info">
            <p>在线客户</p>
            <p>{{onlineLen}}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderLen:0,
      vipLen:0,
      onlineLen:0
    }
  },
  methods: {
    orderCli(){
      this.$store.commit("orderName");
    },
    imgCli(){
      this.$store.commit("imgName");
    },
    vipCli(){
      this.$store.commit("vipName");
    },
    onlineCli(){
      this.$store.commit("onlineName");
    }
  },
  mounted() {
    // 下单总数数据长度
    this.$axios.post('http://wlz.in.8866.org:30167/orderid/getorderid').then((res)=>{
      this.orderLen = res.data.orderscount;
    }).catch((err)=>{
      throw err;
    });

  this.$axios.post('http://wlz.in.8866.org:30167/order/getorder').then((res)=>{
      this.vipLen = res.data.vipcount;
    }).catch((err)=>{
      throw err;
    });

    this.$axios.post('http://wlz.in.8866.org:30167/onclient/getonclient').then((res)=>{
      this.onlineLen = res.data.onclient.length;
    }).catch((err)=>{
      throw err;
    });
  }
}
</script>

<style scoped lang="less">
.two_nav{
    font-size: 18px;
    padding-bottom: 30px;
    display: flex;
    li{
      flex: 1;
      margin-right: 26px;
      padding: 25px 21px 25px 25px;
      background: #fff;
      border-radius: 13px;
      a{
        display: flex;
        color: #333;
        img{
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
        .info{
          flex: 1;
          text-align: center;
          p:last-child{
            font-size: 24px;
            color: #ffe009;
            margin-top: 34px;
          }
        }
      }
      &:last-child{
        margin-right: 0;
      }
    }
  }
  @media all and (max-width: 1366px){
    .two_nav{
      font-size: 13px;
      padding-bottom: 21px;
      li{
        margin-right: 18px;
        padding: 17px 15px 17px 17px;
        border-radius: 9px;
        a{
          img{
            width: 70px;
            height: 70px;
          }
          .info{
            p:last-child{
              font-size: 17px;
              margin-top: 24px;
            }
          }
        }
      }
    }
  }
</style>
