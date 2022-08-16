<template>
  <div id="app">
    <div class="content">
         <router-view/>
    </div>
  </div>
</template>
<script>
  export default {
    name: "app",
    methods: {
//禁止滚动条滚动
stop(){
var mo=function(e){e.preventDefault();};
document.body.style.overflow='hidden';
document.addEventListener("touchmove",mo,false);
}
}
  }
</script>
<style>

  .top{
        width:100%;
        height:15vw;
        border: 1px solid rgba(0, 0, 0, .2);
        box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
        font-size: 5vw;
        line-height: 15vw;
        text-align: center;
    }
    i{
  display: block;
  margin-bottom: 3vw;
}
#tos{
  width:25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tabbar{
    /* 相对定位 */
    /* width: 100%;
    background-color:white;
    border-radius: 0px;
    bottom: 0rem;
    display: flex;
    position:absolute;
    height: 80px; */
     border: 1px solid rgba(0, 0, 0, .2);
     background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
        height: 10%;
        width: 100%;
        bottom: 0rem;
        position:absolute;
        display: flex;
}
 .fa{
    /* 字体图标大小 */
    font-size: 30px;
    transition: 0.5s;
}
</style>
