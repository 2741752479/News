<template>

    <div>
      
            <!-- tab-container
            <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                
            </mt-tab-container-item>
            </mt-tab-container> -->
  <div class="cont">
    <div class="cot" v-show="isShow"> 
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
     <router-view></router-view>
  </div>
  <div class="tabbar">
  <mt-navbar v-model="selected" >
        <ul>
           
            <li class="item active" id="1">
                 <mt-tab-item id="1">
                     <i class="fa fa-heart-o"></i>
                     <p>实验室介绍</p>
                     </mt-tab-item>
               
            </li>
          
         
            <li class="item" id="2">
             <mt-tab-item id="2" >
                <i class="fa fa-user-o"></i>
                <p>我们</p>
                </mt-tab-item>
            </li>
        
      
            <li class="item" id="3">
             <mt-tab-item id="3">
                 <i class="fa fa-bell-o"></i>
                <p>关于部门</p>
                </mt-tab-item>
                
            </li>
             <li class="item" id="4">
             <mt-tab-item id="4">
                 <i class="fa fa-bell-o"></i>
                <p>部门介绍</p>
                </mt-tab-item>
                
            </li>
           
        </ul>
        </mt-navbar>
    </div>
</div>
</template>

<script>
	export default {
		name:'Introduce',
        data(){
            return{
                selected:'1',
                isShow:true
            }
        },
         watch: {
    'selected': {
      handler: function () {
        if (this.selected === '1') {
          this.$router.push({
            path: '/Introduce'
          })
           this.isShow=true
        }
        if (this.selected === '2') {
          this.$router.push('/We'),
          this.isShow=false
        } 
        if (this.selected === '3') {
          this.$router.push('/About')
          this.isShow=false
        } 
          if (this.selected === '4') {
          this.$router.push('/Need')
          this.isShow=false
        } 
      }
    }
  }
      }
</script>
<style scoped>
p{
  margin-top: 4vw;
}
#te{
  margin: 3vw;
}
.cot{
  padding-left: 7vw;
   padding-right: 10vw;
}
.cont{
  background-color: #2962ff60;
  width: 100%;
  height: 200rem;
  padding-top: 2vw;

}
.tabbar{
    /* 相对定位 */

    background-color: #2962ff60;
    border-radius: 0px;
    bottom: 0rem;
    display: flex;
    position:absolute;
}
.tabbar ul{
    /* 去掉前面的小黑点 */
    list-style: none;
    /* 让li横向排列 */
    display: flex;
    width: 100%;
    height: 5.5rem;
}

.tabbar ul li{
    /* 相对定位 */
    position: relative;
    z-index: 1;
    width: 4rem;
    height: 80px;
   
    /* 弹性布局 居中 */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 4vw;
    margin-right: 4vw;
    /* 光标变小手 */
    cursor: pointer;
    /* 设置过渡 */
    transition: 1s;
    padding-bottom: 5vw;
}
.tabbar ul li img{
    width: 80%;
    height: 80%;
    /* 对图片进行剪切，保留原始比例 */
    object-fit: cover;
    /* 图片在容器的正中间 */
    object-position: center;
    /* 圆形图片 */
    border-radius: 50%;
}
.tabbar ul li .fa{
    /* 字体图标大小 */
    font-size: 28px;
    transition: 0.5s;
}
body{
    /* 100%窗口高度 */
    height: 100vh;
    /* 弹性布局 水平+垂直居中 */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #222;
}

.text{


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