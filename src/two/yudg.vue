<template>
  <div>
    <div class="box">
      <div class="top">
        <p>
          <span>手机号：</span>
          <input type="text" v-model="data" />
          <button  @click="check_info()" >查询</button>
        </p>
      </div>
      <div class="con">
        <header>
          <span class="name">客户姓名</span>
          <span>电话号码</span>
          <span>
            {{font}}
            <el-dropdown>
              <span class="el-dropdown-link">
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item  @click.native="ty(index)" v-for='(item,index) in type' :key='index'>{{item}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </span>
          <span>车型</span>
          <span>证件类型</span>
          <span>证件号码</span>
          <span>取车时间</span>
          <span>操作</span>
        </header>
        
        <ul v-if="aaa" id="dis">
         <p>
           <!-- <img src="./../assets/img/401.gif" alt="" id=img> -->
           {{this.dat}}
           </p>
          <li  v-for="(item,index) in list" :key="index" class="dis" >
            <span>
              <div id="check_">
              <el-checkbox v-model="item.id" ></el-checkbox>
              </div>
              {{item.userName}}
            </span>
            <span>{{item.phone}}</span>
            <span>{{item.rentStyle}}</span>
            <span>{{item.quality}}</span>
            <span>{{item.certificate}}</span>
            <span>{{item.identity}}</span>
            <span>{{item.collectionTime}}</span>
            <span>
            <router-link to="/yud/shoul"> <i class="el-icon-goods" @click="order(index)"></i></router-link> 
              <i class="el-icon-delete" @click="del(index)"></i>
            </span>
          </li>
              
        </ul>
        <ul v-else>
          <li v-for="(item,index) in lis" :key="index" class="dis">
            <span>
              <div id="check_">
              <el-checkbox v-model="item.id" ></el-checkbox>
              </div>
              {{item.userName}}
            </span>
            <span>{{item.phone}}</span>
            <span>{{item.rentStyle}}</span>
            <span>{{item.quality}}</span>
            <span>{{item.certificate}}</span>
            <span>{{item.identity}}</span>
            <span>{{item.collectionTime}}</span>
            <span>
              <router-link to="/yud/shoul"> <i class="el-icon-goods" @click="order(index)"></i></router-link> 
              <i class="el-icon-delete" @click="del(index)"></i>
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
      type:['时租','日租','月租','顺风车'],
      font:'租赁方式',
      list:[],
      lis:[],
      data:'',
      aaa:true,
      orderNo:'',
      dat:''
    };
  },
  mounted(){
        this.$axios.post('http://wlz.in.8866.org:30167/order/findAllData'
        ,this.$qs.stringify({
        }))
        .then((response,err)=>{
           this.list=response.data;
           console.log(this.list);
        })
        .catch((err)=>{
          this.dat='数据一不小心 上了天！！！'  
        })

  },
  methods: {
       ty(index){
        this.font=this.type[index];
      },
      check_info(){
        if(this.data==''){
          this.aaa=true;
        }else{
          this.aaa=false;
          }
        let x=new RegExp(this.data);
        this.lis=[];
        for(let i=0;i<this.list.length;i++){
          if(x.test(this.list[i].phone)){
            this.lis.push(this.list[i])
          }
        }
      },
      order(index){
        this.orderNo=this.list[index].orderNo;
        this.$store.commit('order',this.orderNo);
      },
      del(index){
           document.getElementsByClassName('dis')[index].style.display="none";
      }
  },
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
        text-indent: 1rem;
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
      p{
        position: relative;
        color: pink;
        font-size:24px;
        text-align: center;
        margin-top:10px;
        #img{
            position:absolute;
            top:30%;
            left:50%;
            transform: translate(-50%,30%);
            width:200px;
            height:200px;
            margin:30px 0 30px 0;
          }
      }
          height: 511px;
          overflow:auto;
      li{
          display: flex;
          span{
            display: inline-block;
            text-align: center;
            #check_{
              width:26px;
              height:100%;
              float: left;
              padding-left:42px;
            }
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
          span:nth-child(1) {
            width: 240px;
            text-align: center;
          }
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
        text-indent: .7rem;
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
            #check_{
              width:20px;
              height:100%;
              float: left;
              padding-left:32px;
            }
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
