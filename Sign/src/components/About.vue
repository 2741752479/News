<template>
  <div class="Intro">
     <div class="cont"> 
            <div class="text">
             <p id="to" style=" font-size: 6vw;">无论部门：</p>
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
</template>
<script>
export default {
    name:'About',
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
        }
      
      }
}
</script>

<style scoped>
#to{
  margin-bottom:5vw ;
}
#te1{
     margin-top: 3vw;
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
    font-size: 25px;
    transition: 0.5s;
}
.text{
     padding: 6vw;
     height: 80%;
    margin-left: 10vw;
    margin-right: 6vw;
    margin-top: 6vw;
    position: relative;
    color: #fff;
    font-size: 4vw;
    letter-spacing: 3px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    --count: 20;
    /* 执行动画: 动画名 时长 分步过渡(这里分6步) 停留在最后一帧 */
    /* 时长要根据字数而定,字数多的话要适当延长 */
    animation: typing 1.8s steps(var(--count)) forwards;
    -webkit-box-reflect: below 1px linear-gradient(transparent 30%,rgba(0,0,0,0.05));
}
/* 光标 */
.text::after{
    content: "";
    width: 2px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #fff;
    animation: blink 2s linear infinite;
}

/* 定义动画 */
/* 光标闪烁 */
@keyframes blink {
    0%,49%{
        opacity: 0;
    }
    50%,100%{
        opacity: 1;
    }
}
/* 打字动画 */
@keyframes typing {
    0%{
        width: 0;
    }
    100%{
        width: calc(var(--count) * 65px);
    }
}
</style>