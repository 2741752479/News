<template>
	<div class="we">
    <div class="cont">
         <div class="text">
             <p id="to" style=" color: #fff;font-size: 6vw;">我们：</p>
           <p id="te" style=" color: #fff;font-size: 4vw;">开发服务在校师生的各类大小系统</p> 
         <p id="te" style=" color: #fff;font-size: 4vw;">负责微信公众号"桑梓微助手”的运营</p> 
         <p  id="te" style=" color: #fff;font-size: 4vw;"> 负责华大新社区平台的搭建工作</p>
          <p  id="te" style=" color: #fff;font-size: 4vw;"> 各类网络与信息系统相关的创新活动</p>
           <p  id="te" style=" color: #fff;font-size: 4vw;">管理全校移动端最大的教务生活服务平台</p>
             <p id="te" style=" color: #fff;font-size: 4vw;">(刚进学校不认路？课程安排不知道？)</p>
         <p  id="te1" style=" color: #fff;font-size: 4vw;">(网费水电在哪交、一卡通怎么充值？)</p>
         <p  id="te" style=" color: #fff;font-size: 5vw;"> “桑梓微助手”通通帮你解决！</p> 
        </div>
    </div>
    </div>
</template>

<script>
	export default {
		name:'We',
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
  margin-top: 10vw;
}
#te1{
   margin-top: 4vw;  
}

.cot{
  padding-left: 20vw;
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

    margin-left: 6vw;
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