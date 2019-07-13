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
    font-size:16px;
    height:70px;
    line-height:70px;
    background:#fff;
    margin:30px;
     ul{
       list-style:none;
       overflow:hidden;
       li{
         float:left;
         margin-right:160px;
         white-space:nowrap;
         text-align:center;
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
  
 
</style>
