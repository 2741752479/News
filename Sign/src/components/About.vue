<template>
  <div class="About" >
     <div class="cont"> 
        <div class="hed" >
           <div class="arrow-left arrow-box">
          <b class="left" @click="Retur"><i class="left-arrow1"></i><i class="left-arrow2"></i></b>
          </div>
            <div class="tet" style="overflow: scroll;" >   
                  <p id="te1" style=" font-size: 6vw;">无论部门：</p>
           <p id="te1" style=" font-size: 4vw;">我们需要乐观向上，</p>
            <p id="te1" style=" font-size: 4vw;">负责肯干的你的加入</p>
           <p id="te1" style=" font-size: 4vw;">现有的技能并不决定一切</p>
           <p  id="te1" style=" font-size: 4vw;">态度才是最重要的方面，有胆你就来！</p> 
         <p id="te1" style=" font-size: 4vw;">跨部门学习体验机会</p> 
         <p  id="te1" style=" font-size: 4vw;"> 想学UI设计，想学活动运营</p>
          <p  id="te1" style="font-size: 4vw;"> 想学编程？实验室各部门大佬带你飞！</p>
        <p id="te1" style=" font-size: 4vw;">想参与校内各种各样的比赛</p>
         <p  id="te1" style=" font-size: 4vw;">却苦于没有优秀的队友</p>
         <p  id="te1" style="font-size: 4vw;">和实验室的伙伴们一起报名吧！</p> 
         <p  id="te1" style=" font-size: 4vw;">还有指导老师带着大家一起奋斗！</p> 
          <p id="te1" style=" font-size: 4vw;">字节 谷歌 阿里 腾讯 百度 京东 …</p>
         <p  id="te1" style=" font-size: 4vw;">乃至厦门本地优秀互联网公司</p>
         <p  id="te1" style=" font-size: 4vw;">均有往届学长学姐。</p> 
         <p  id="te1" style=" font-size: 4vw;">可通过实验室获得内推机会！</p> 
          <p  id="te1" style=" font-size: 4vw;">还可享受团建、聚餐…实验室一切福利</p> 
            </div>
          </div> 
          <div class="tabbar">
            <div id="tos" @click="Go1">
                <i class="fa fa-heart-o"></i>
                <p>实验室介绍</p>    
            </div>
             <div id="tos" @click="Go2">
                <i class="fa fa-user-o"></i>
                <p>我们</p>
              </div>
             <div id="tos" @click="Go3">
                 <i class="fa fa-bell-o"></i>
                <p>关于部门</p>
                </div>   
             <div id="tos" @click="Go4">
                 <i class="fa fa-star-o"></i>
                <p>部门介绍</p>
              </div>     
          </div>
        </div>
     </div>
</template>
<script>
export default {
    name:'We',
      methods: {
      Go1(){
          this.$router.replace({
            path: '/Intro'
          })
        },
       Go2(){
          this.$router.replace({
            path: '/We'
          })
        },
         Go3(){
          this.$router.replace({
            path: '/About'
          })
        },
        Go4(){
           this.$router.replace('/Need')
        },
         Retur(){
            this.$router.replace('/')
        }
      }
}
</script>

<style scoped>
.arrow-box {
width: 30px;
height: 30px;
position: fixed;
}
 
.left {
width: 20px;
height: 20px;
position: absolute;
left: 0;
top: 0;
z-index: 2;
}
.left-arrow1,
.left-arrow2 {
width: 0;
height: 0;
display: block;
position: absolute;
left: 0;
top: 0;
z-index: 5;
border-top: 10px transparent dashed;
border-left: 10px transparent dashed;
border-bottom: 10px transparent dashed;
border-right: 10px white solid;
overflow: hidden;
}
 
.left-arrow1 {
border-right: 10px black solid;
}
.left-arrow2 {
left: 1px;
border-right: 10px white solid;
}
.cont{
  width: 100%;
  height: 100%;
  display: flex;
}
.hed{

  width: 100%;
  height: 90%;

  padding-top:1vh;
 
 
}
.tet{
  height: 85vh;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
#te1{
     margin-top: 2vh;
}
#te{
  margin-top: 6vh;
}
.Intro{
     width: 100%;
     height: 100%;
    overflow:hidden;
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
    font-size: 25px;
    transition: 0.5s;
}

</style>