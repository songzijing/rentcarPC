export default{
    setRem(){
        var clientWidth=window.innerWidth;
        var uiwidth  = 750; // ui设计稿的宽度
        var nowRem=(clientWidth/uiwidth*100);
        document.querySelector('html').style.fontSize=parseInt(nowRem,10)+"px";
    }
}