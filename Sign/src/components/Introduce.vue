<template>
    <div class="Introduce">
  <div class="tabbar">
  <mt-navbar v-model="selected" >
        <ul>
            <li class="item active" >
                 <mt-tab-item id="1">
                     <i class="fa fa-heart-o"></i>
                     <p>实验室介绍</p>
                     </mt-tab-item>     
            </li>
            <li class="item">
             <mt-tab-item id="2" >
                <i class="fa fa-user-o"></i>
                <p>我们</p>
                </mt-tab-item>
            </li>
            <li class="item">
             <mt-tab-item id="3">
                 <i class="fa fa-bell-o"></i>
                <p>关于部门</p>
                </mt-tab-item>   
            </li>
             <li class="item">
             <mt-tab-item id="4">
                 <i class="fa fa-star-o"></i>
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
            }
        },
        mounted(){
           this.$router.push({
            path: '/One'
          })
        },
    watch: {
    'selected': {
      handler: function () {
        if (this.selected === '1') {
          this.$router.push({
            path: '/One'
          })
        }
        if (this.selected === '2') {
          this.$router.push('/We')
        } 
        if (this.selected === '3') {
          this.$router.push('/About')
        } 
          if (this.selected === '4') {
          this.$router.push('/Need')
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
   overflow: hidden;
}
.cont{
  background-color: rgb(122, 157, 247);
  width: 100%;
  height: 40rem;
  padding-top: 1vw;
  overflow: hidden;

}
.tabbar{
    /* 相对定位 */
    width: 100%;
    background-color:white;
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
    height: 5rem;
    margin-left: 1vw;
    margin-right: 1vw;
}

.tabbar ul li{
    /* 相对定位 */
    position: relative;
    z-index: 1;
    width: 4rem;
    height: 90px;
   
    /* 弹性布局 居中 */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 4vw;
    margin-right: 3.2vw;
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