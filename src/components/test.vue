<template>
  <div>
    <slot name='mend'></slot>
    <slot name='huiy'></slot>
    <slot name='chel'></slot>
    <slot name='yud'></slot>
    <slot name='feiy'></slot> 
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="less">
  .head{
    font-size:18px;
    height:70px;
    line-height:70px;
    background:#fff;
    margin:30px;
     ul{
       overflow:hidden;
       li{
         float:left;
         margin-right:160px;
         white-space:nowrap;
         text-align:center;
         a{
           color: #333;
         }
         .router-link-active{
           display:inline-block;
           width:100%;
           height:100%;
           border-bottom:2px solid #ffe009;
       }
      } 
       li:nth-child(1){
         margin-left:30px;
       }
     }
  }
  
 @media all and (max-width:1366px){
   .head{
    font-size:11px;
    -webkit-transform-origin-x: 0;
    height:49px;
    line-height:49px;
    background:#fff;
    margin:21px;
     ul{
       overflow:hidden;
       li{
         float:left;
         margin-right:112px;
         white-space:nowrap;
         text-align:center;
         a{
           color: #333;
           font-size:11px;
           -webkit-transform-origin-x: 0;
         }
         .router-link-active{
           display:inline-block;
           width:100%;
           height:100%;
           border-bottom:2px solid #ffe009;
       }
      } 
       li:nth-child(1){
         margin-left:21px;
       }
       
     }
  }
 }
</style>
