<template>
  <div class="order">
     <List>
      <span slot="one">姓名</span>
      <span slot="two">车牌号</span>
      <span slot="three">手机号</span>
      <span slot="four">订单状态</span>
      <span slot="seven" class="self">安全隐患</span>

      <li slot="cont">
        <span slot="one_cont">IU</span>
        <span slot="two_cont">豫A5421</span>
        <span slot="three_cont">15766666666</span>
        <span slot="four_cont">驾驶中</span>
        <span slot="seven_cont" class="no">无</span>
      </li>
      <li slot="cont">
        <span slot="one_cont">IU</span>
        <span slot="two_cont">豫A5421</span>
        <span slot="three_cont">15766666666</span>
        <span slot="four_cont">驾驶中</span>
        <span slot="seven_cont" class="no">无</span>
      </li>
      <li slot="cont">
        <span slot="one_cont">IU</span>
        <span slot="two_cont">豫A5421</span>
        <span slot="three_cont">15766666666</span>
        <span slot="four_cont">驾驶中</span>
        <span slot="seven_cont" class="no">无</span>
      </li>
      <li slot="cont">
        <span slot="one_cont">IU</span>
        <span slot="two_cont">豫A5421</span>
        <span slot="three_cont">15766666666</span>
        <span slot="four_cont">驾驶中</span>
        <span slot="seven_cont" class="no">无</span>
      </li>
      <li slot="cont">
        <span slot="one_cont">IU</span>
        <span slot="two_cont">豫A5421</span>
        <span slot="three_cont">15766666666</span>
        <span slot="four_cont">驾驶中</span>
        <span slot="seven_cont" class="no">无</span>
      </li>
      <li slot="cont">
        <span slot="one_cont">IU</span>
        <span slot="two_cont">豫A5421</span>
        <span slot="three_cont">15766666666</span>
        <span slot="four_cont">驾驶中</span>
        <span slot="seven_cont" class="no">无</span>
      </li>
     </List>
     <!-- 分页器 -->
    <Page>
      <router-link to="/mend" slot="goback">返回</router-link> 
    </Page>
  </div>
</template>

<script>
import List from './component/list_slot';
import Page from './component/page'

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
      List,
      Page
  }
}
</script>

<style scoped lang="less">
.order{
  padding: 0 31px 30px 31px;
  .self{
    width: 72px;
    flex: none;
  }
  .list ul>li span.no{
    text-align: center;
    flex: none;
    width: 72px;
    color: #333;
  }
}
@media all and (max-width: 1366px){
  .order{
    padding: 0 22px 21px 22px;
    .self{
      width: 50px;
    }
    .list ul>li span.no{
      width: 50px;
    }
  }
}
</style>
