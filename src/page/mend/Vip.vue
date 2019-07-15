<template>
  <div class="order">
     <List>
      <span slot="one">姓名</span>
      <span slot="two">手机号</span>
      <span slot="three">证件号</span>
      <span slot="four">办卡时间</span>
      <span slot="five">到期时间</span>
      <span slot="seven" class="manage">管理</span>

      <li slot="cont">
        <span slot="one_cont">Jennie</span>
        <span slot="two_cont">15866666666</span>
        <span slot="three_cont">412727199605232622</span>
        <span slot="four_cont">2019-05-21</span>
        <span slot="five_cont">2019-05-21</span>
        <div slot="seven_cont" class="icon_del"><i class="el-icon-edit-outline"></i><i class="el-icon-delete"></i></div>
      </li>
      <li slot="cont">
        <span slot="one_cont">Jennie</span>
        <span slot="two_cont">15866666666</span>
        <span slot="three_cont">412727199605232622</span>
        <span slot="four_cont">2019-05-21</span>
        <span slot="five_cont">2019-05-21</span>
        <div slot="seven_cont" class="icon_del"><i class="el-icon-edit-outline"></i><i class="el-icon-delete"></i></div>
      </li>
      <li slot="cont">
        <span slot="one_cont">Jennie</span>
        <span slot="two_cont">15866666666</span>
        <span slot="three_cont">412727199605232622</span>
        <span slot="four_cont">2019-05-21</span>
        <span slot="five_cont">2019-05-21</span>
        <div slot="seven_cont" class="icon_del"><i class="el-icon-edit-outline"></i><i class="el-icon-delete"></i></div>
      </li>
      <li slot="cont">
        <span slot="one_cont">Jennie</span>
        <span slot="two_cont">15866666666</span>
        <span slot="three_cont">412727199605232622</span>
        <span slot="four_cont">2019-05-21</span>
        <span slot="five_cont">2019-05-21</span>
        <div slot="seven_cont" class="icon_del"><i class="el-icon-edit-outline"></i><i class="el-icon-delete"></i></div>
      </li>
      <li slot="cont">
        <span slot="one_cont">Jennie</span>
        <span slot="two_cont">15866666666</span>
        <span slot="three_cont">412727199605232622</span>
        <span slot="four_cont">2019-05-21</span>
        <span slot="five_cont">2019-05-21</span>
        <div slot="seven_cont" class="icon_del"><i class="el-icon-edit-outline"></i><i class="el-icon-delete"></i></div>
      </li>
     </List>
  </div>
</template>

<script>
import List from './component/list_slot';

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
      List
  }
}
</script>

<style scoped lang="less">
.order{
  padding: 0 31px 30px 31px;
  .manage{
    width: 78px;
    flex: none;
  }
  .icon_del{
    width: 78px;
    font-size: 24px;
    .el-icon-edit-outline{
      margin-right: 30px;
    }
  }
}
</style>
