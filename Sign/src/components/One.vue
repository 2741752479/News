<template>
	<div class="One">
    <div class="cont">
         <div class="text">
             <p id="te" style=" color: #fff;font-size: 6vw;">我们是:</p> 
         <p id="te" style=" color: #fff;font-size: 4vw;">华侨大学网络创新实验室(桑梓实验室)</p> 
        <p  id="te" style=" color: #fff;font-size: 4vw;">成立于1993年</p> 
         <p  id="te" style=" color: #fff;font-size: 4vw;"> 隶属于华侨大学信息化建设与管理处</p>
          <p  id="te" style=" color: #fff;font-size: 4vw;"> 目前为校区直属技术团队</p>
           <p  id="te" style=" color: #fff;font-size: 4vw;">是华大的信息化基石</p>
         <p  id="te" style=" color: #fff;font-size: 4vw;">是华大最优秀的信息化团队</p>
         <p  id="te" style=" color: #fff;font-size: 4vw;">在二十余年的时间里</p>
         <p  id="te" style=" color: #fff;font-size: 4vw;">一直代表着华侨大学学生组织里</p>
          <p  id="te" style=" color: #fff;font-size: 4vw;">互联网技术以及服务的最高水平。</p>
          <p  id="te" style=" color: #fff;font-size: 4vw;">从曾经的网络杂志，桑梓年华论坛，</p>
          <p  id="te" style=" color: #fff;font-size: 4vw;">到如今集教务、生活服务</p>
         <p   id="te" style=" color: #fff;font-size: 4vw;">于一身的微信服务平台</p>
       <p  id="te" style=" color: #fff;font-size: 4vw;">——桑梓微助手</p>
         <p  id="te" style=" color: #fff;font-size: 4vw;">实验室一直致力于</p>
           <p  id="te" style=" color: #fff;font-size: 4vw;">利用互联网技术服务华大师生</p>
           <p  id="te" style=" color: #fff;font-size: 4vw;">以及不断探索学习最新的知识。</p>
        </div>
    </div>
    </div>
</template>

<script>
	export default {
		name:'One',
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
background-color: rgb(122, 157, 247);
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