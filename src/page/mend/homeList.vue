<template>
  <div class="homelist">
      <div class="list">
        <h5>最新订单</h5>
        <el-table :data="tableData" style="width: 100%" :cell-style="{padding:'22px 0',fontSize:'13px',color:'#333'}"  :header-cell-style="rowClass">
            <el-table-column prop="carNum" label="车牌号"></el-table-column>
            <el-table-column prop="name" label="客户名称"></el-table-column>
            <el-table-column prop="orderStatus" label="订单状态"></el-table-column>
            <el-table-column prop="orderDate" label="下单日期"></el-table-column>
            <el-table-column prop="creationDate" label="生成日期"></el-table-column>
            <el-table-column prop="orderAmount" label="订单金额"></el-table-column>
            <el-table-column prop="guanli" label="管理"></el-table-column>
        </el-table>
        <div class="block">
            <el-pagination
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        tableData: [{
            carNum: '豫A5421',
            name: '王小虎',
            orderStatus: '已完成',
            orderDate:"2019-05-21",
            creationDate:"2019-05-21",
            orderAmount:44,
            guanli:"查看"
          }, {
            carNum: '豫A5421',
            name: '王小虎',
            orderStatus: '已完成',
            orderDate:"2019-05-21",
            creationDate:"2019-05-21",
            orderAmount:44,
            guanli:"查看"
          }, {
            carNum: '豫A5421',
            name: '王小虎',
            orderStatus: '已完成',
            orderDate:"2019-05-21",
            creationDate:"2019-05-21",
            orderAmount:44,
            guanli:"查看"
          }, {
            carNum: '豫A5421',
            name: '王小虎',
            orderStatus: '已完成',
            orderDate:"2019-05-21",
            creationDate:"2019-05-21",
            orderAmount:44,
            guanli:"查看"
        }]
    }
  },
  methods: {
      rowClass({ row,rowIndex}) {
        console.log(rowIndex) //表头行标号为0
        return {
            padding:"22px 0",
            fontSize:"18px",
            color:"#333",
            fontWeight:"normal"
        }
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
.homelist{
    padding: 0 31px 30px 31px;
    .list{
        padding: 0 29px;
        background: #fff;
        border-radius: 13px;
        h5{
            height: 79px;
            line-height: 79px;
            font-size: 18px;
            color: #333;
            border-bottom: 1px solid #e8e8e8;
        }
    }
    .block{
        height: 90px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
}
</style>
