<template>
  <div class="Intro">
     <div class="cont"> 
            <div class="text">
             <p id="te" style="font-size: 6vw;">我们是:</p> 
         <p id="te" style=" font-size: 4vw;">华侨大学网络创新实验室(桑梓实验室)</p> 
        <p  id="te" style="font-size: 4vw;">成立于1993年</p> 
         <p  id="te" style="font-size: 4vw;"> 隶属于华侨大学信息化建设与管理处</p>
          <p  id="te" style=" font-size: 4vw;"> 目前为校区直属技术团队</p>
           <p  id="te" style="font-size: 4vw;">是华大的信息化基石</p>
         <p  id="te" style="font-size: 4vw;">是华大最优秀的信息化团队</p>
         <p  id="te" style=" font-size: 4vw;">在二十余年的时间里</p>
         <p  id="te" style=" font-size: 4vw;">一直代表着华侨大学学生组织里</p>
          <p  id="te" style=" font-size: 4vw;">互联网技术以及服务的最高水平。</p>
          <p  id="te" style=" font-size: 4vw;">从曾经的网络杂志，桑梓年华论坛，</p>
          <p  id="te" style=" font-size: 4vw;">到如今集教务、生活服务</p>
         <p   id="te" style="font-size: 4vw;">于一身的微信服务平台</p>
       <p  id="te" style=" font-size: 4vw;">——桑梓微助手</p>
         <p  id="te" style="font-size: 4vw;">实验室一直致力于</p>
           <p  id="te" style="font-size: 4vw;">利用互联网技术服务华大师生</p>
           <p  id="te" style=" font-size: 4vw;">以及不断探索学习最新的知识。</p>
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
    name:'Intro',
      methods: {
      Go1(){
          this.$router.push({
            path: '/Intro'
          })
        },
       Go2(){
          this.$router.push({
            path: '/We'
          })
        },
         Go3(){
          this.$router.push({
            path: '/About'
          })
        },
        Go4(){
           this.$router.push('/Need')
        }
      
      }
}
</script>

<style scoped>
#te{
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