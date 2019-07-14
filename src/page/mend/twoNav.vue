<template>
  <div>
      <ul class="two_nav">
      <li>
        <router-link to="/">
          <div class="img"></div>
          <div class="info">
            <p>下单总数</p>
            <p>567</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <div class="img"></div>
          <div class="info">
            <p>上传照片数量</p>
            <p>666</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <div class="img"></div>
          <div class="info">
            <p>会员总数</p>
            <p>88</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <div class="img"></div>
          <div class="info">
            <p>在线客户</p>
            <p>30</p>
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

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang="less">
.two_nav{
    font-size: 18px;
    padding: 0 31px 30px 31px;
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
        .img{
          width: 100px;
          height: 100px;
          background: red;
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
</style>
