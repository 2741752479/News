
<template>
  <div class="We" >
     <div class="cont"> 
        <div class="hed" >
            <div class="tet" style="overflow: scroll;" >   
                 <p id="te2" style="font-size: 7vw;">我们:</p>
                <p id="te" style="font-size: 4vw;">开发服务在校师生的各类大小系统</p> 
              <p id="te" style="font-size: 4vw;">负责微信公众号"桑梓微助手”的运营</p> 
              <p  id="te" style=" font-size: 4vw;"> 负责华大新社区平台的搭建工作</p>
                <p  id="te" style="font-size: 4vw;">各类网络与信息系统</p>
                <p  id="te" style="font-size: 4vw;">相关的创新活动</p>
                <p  id="te" style="font-size: 4vw;">管理全校移动端最大的</p>
                <p  id="te" style="font-size: 4vw;">教务生活服务平台</p>
                  <p id="te" style="font-size: 4vw;">(刚进学校不认路？)</p>
                  <p id="te" style="font-size: 4vw;">(课程安排不知道？)</p>
              <p  id="te" style=" font-size: 4vw;">(网费水电在哪交)</p>
              <p id="te" style="font-size: 4vw;">(一卡通怎么充值？)</p>
              <p  id="te1" style=" font-size: 5vw;"> “桑梓微助手”通通帮你解决！</p> 
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
        }
      }
}
</script>

<style scoped>
.cont{
  width: 100%;
  height: 100%;
  display: flex;
}
.hed{

  width: 100%;
  height: 90%;
  padding-left:9vw;
  padding-right:9vw;
  padding-top:6vw;
  display: flex;
  justify-content: center;
 
}
.tet{
 
  padding-right: 1vw;
  height: 33rem;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
#te{
     margin-top: 6vw;
}
#te1{
  margin-top: 7vw;
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
/* .text{
   display: flex;
    flex-wrap: wrap;
     height: 100% !important;
    justify-content: space-between;
    position: relative;
    color: #fff;
    font-size: 4vw;
    letter-spacing: 3px;
   
    white-space: nowrap;
    overflow: hidden;
    --count: 20;
    /* 执行动画: 动画名 时长 分步过渡(这里分6步) 停留在最后一帧 */
    /* 时长要根据字数而定,字数多的话要适当延长 */
    /* animation: typing 1.8s steps(var(--count)) forwards;
    -webkit-box-reflect: below 1px linear-gradient(transparent 30%,rgba(0,0,0,0.05)); */

/* 光标 */
/* .text::after{
    content: "";
    width: 2px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #fff;
    animation: blink 2s linear infinite;
} */

/* 定义动画 */
/* 光标闪烁 */
/* @keyframes blink {
    0%,49%{
        opacity: 0;
    }
    50%,100%{
        opacity: 1;
    }
}
/* 打字动画 */
/* @keyframes typing {
    0%{
        width: 0;
    }
    50%{
      width: 60%;
    }
    100%{
        width:100%;
    }
} */ 
/* @keyframes wrapper-gradient {

  0% {

    transform: translateY(-100%);

  }

  100% {

    transform: translateY(0);

  }

}

@keyframes img-gradient {

  0% {

    transform: translateY(100%);

  }

  100% {

    transform: translateY(0);

  }

}
.hed {

  display: inline-block;

  overflow: hidden;

  animation: wrapper-gradient 2s linear;

}

.text {

  animation: img-gradient 2s linear;

} */
</style>