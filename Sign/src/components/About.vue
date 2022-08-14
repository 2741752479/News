<template>
	<div class="About">
    <div class="cont">
         <div class="text">
             <p id="to" style=" color: #fff;font-size: 6vw;">无论部门：</p>
           <p id="te" style=" color: #fff;font-size: 4vw;">我们需要乐观向上，负责肯干的你的加入</p>
           <p id="te1" style=" color: #fff;font-size: 4vw;">现有的技能并不决定一切</p>
           <p  id="te1" style=" color: #fff;font-size: 4vw;">态度才是最重要的方面，有胆你就来！</p> 
         <p id="te" style=" color: #fff;font-size: 4vw;">跨部门学习体验机会</p> 
         <p  id="te1" style=" color: #fff;font-size: 4vw;"> 想学UI设计，想学活动运营</p>
          <p  id="te1" style=" color: #fff;font-size: 4vw;"> 想学编程？实验室各部门大佬带你飞！</p>
        <p id="te" style=" color: #fff;font-size: 4vw;">想参与校内各种各样的比赛</p>
         <p  id="te1" style=" color: #fff;font-size: 4vw;">却苦于没有优秀的队友</p>
         <p  id="te1" style=" color: #fff;font-size: 4vw;">和实验室的伙伴们一起报名吧！</p> 
         <p  id="te1" style=" color: #fff;font-size: 4vw;">还有指导老师带着大家一起奋斗！</p> 
          <p id="te" style=" color: #fff;font-size: 4vw;">字节 谷歌 阿里 腾讯 百度 京东 …</p>
         <p  id="te1" style=" color: #fff;font-size: 4vw;">乃至厦门本地优秀互联网公司</p>
         <p  id="te1" style=" color: #fff;font-size: 4vw;">均有往届学长学姐。</p> 
         <p  id="te1" style=" color: #fff;font-size: 4vw;">可通过实验室获得内推机会！</p> 
          <p  id="te" style=" color: #fff;font-size: 4vw;">还可享受团建、聚餐…实验室一切福利</p> 
        </div>
    </div>
    </div>
</template>

<script>
	export default {
		name:'About',
		/* beforeDestroy() {
			console.log('About组件即将被销毁了')
		},*/
		/* mounted() {
			console.log('About组件挂载完毕了',this)
			window.aboutRoute = this.$route
			window.aboutRouter = this.$router
		},  */
	}
</script>
<style scoped>
#to{
  margin-top: 2vw;
}
#te{
  margin-top: 5vw;
}
#te1{
   margin-top: 3vw;  
}
.cot{
  padding-left: 15vw;
   padding-right: 10vw;
}
.cont{
  width: 100%;
  height: 200rem;
  padding-top: 2vw;
padding: 5px;
padding-left:6vw;
}
.text{

    margin-left: 4vw;
    position: relative;
    color: #fff;
    font-size: 4vw;
    letter-spacing: 3px;
    width: 65px;
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