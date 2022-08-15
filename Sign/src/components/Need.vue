<template>
	<div class="Need">
    <div class="cont">
         <div class="text">
             <p id="to" style=" color: #fff;font-size: 4vw;">目前，实验室分为五个部门:</p>
           <p id="te" style=" color: #fff;font-size: 4vw;">策划部，运营部，美工部，软件部、运维部</p>
        </div>
    </div>
         <div class="container">
        <div class="left-box">
            <ul>
                <li class="active" @click="change(0)">
                    策划部
                </li>
                <li @click="change(1)">
                    运营部
                </li>
                <li @click="change(2)">
                    美工部
                </li>
                <li @click="change(3)">
                    软件部
                </li>
                <li @click="change(4)">
                    运维部
                </li>
            </ul>
        </div>
        <div class="border">
            <div class="line line1"></div>
        </div>
        <div class="right-box">
            <div class="rb active">
                <h4>关键词:策划、统筹、组织、创造力</h4>
                <p id="p1">策划发挥实验室的大脑功能</p>
                  <p id="p1">是优化人与人间配合</p>
                  <p id="p1">人与智能交互的重要环节</p>
                <p id="p1">如果你热爱互联网产品</p>
                 <p id="p1">如果你相信自己有着</p>
                  <p id="p1">不同于寻常人的非凡灵感，</p>
                <p id="p1">并怀揣着用你的创意和思维</p>
                  <p id="p1"> 去改变那些不完美的事情勇气</p>
                <p id="p1">让自己的创意可以落地为现实</p>
                <p id="p1"> 希望去发挥你的才能</p>
                <p id="p1"> 和与生俱来的与人沟通的魅力。</p>
                <p id="p1">那么，我们在策划部等着你。</p>
                <h5>纳新需求</h5>
                  <p id="p1"> 有着想象力与创造力，</p>
                   <p id="p1"> 能够挖掘需求，</p>
                <p id="p1"> 能够根据需求制定出合适的方案</p>
                <p id="p1">  能够协调统筹各部门工作进程与节奏</p>
                <p id="p1"> 能够搜集整理和分析数据</p>

            </div>
            <div class="rb">
                 <h4>关键词:运营、编辑、创作</h4>
                <p id="p1">运营是实验室重要的一环</p>
                  <p id="p1">能直接与用户群体进行对接</p>
                <p id="p1">主要负责桑梓微助手公众号的运营</p>
                 <p id="p1">推文的撰写以及视频的剪辑</p>
                   <p id="p1">与部分拍摄</p>
                <h5>纳新需求</h5>
                  <p id="p1"> 热爱文字，有一定的文字功底</p>
                <p id="p1"> 较强的辨证思维能力</p>
                <p id="p1">  对社会实时新闻的关注</p>
                <p id="p1"> 对校园趣事与问题的收集</p>
                 <p id="p1"> 愿意沟通，较好的执行力与耐心</p>
                <p id="p1">  有想法，愿意大胆做出尝试</p>
                <p id="p1"> 掌握秀米排版使用方法</p>
                <p id="p1"> 尝试过pr或Ai的优先考虑</p>
            </div>
            <div class="rb">
               <h4>关键词:视觉设计、手绘，记录美好</h4>
                <p id="p1">这里欢迎拥有想和新结识的伙伴</p>
                  <p id="p1">合作产出一个个作品的拥有目标、</p>
                <p id="p1">敢想敢做的新或老手绘画家</p>
                 <p id="p1">Logo、海报、插图、漫画、ui、动画</p>
                   <p id="p1">只要敢想敢做 </p>
                <p id="p1">你就可以在这里学到一项新技能</p>
                 <p id="p1">或者磨炼自己的绘画能力</p>
                  <p id="p1"> 迸发珍贵的灵感</p>
                <h5>纳新需求</h5>
                  <p id="p1"> 不限专业，欢迎有着</p>
                   <p id="p1"> 绘画热情的22级新生</p>
                <p id="p1"> 也欢迎有相关绘画经验、</p>
                 <p id="p1"> 有实力的老生加入我们</p>
                <p id="p1">  会使用photoshop，illustrater</p>
                <p id="p1"> 或其他绘画或设计软件的很加分哦</p>
                 <p id="p1"> 有毅力、有责任心、热爱绘画</p>
                <p id="p1">  可以与小伙伴们一起积极沟通</p>
            </div>
            <div class="rb">
               
                 <h4>关键词:程序设计、编码、web开发 </h4>
                <p id="p1">一个技术大牛云集的部门</p>
                    <p id="p1">通过编程将想象变成现实</p>
                 <p id="p1">通过代码将一个个线上活动的策划</p>
                   <p id="p1">变成实实在在可供大家使用的程序 </p>
                <p id="p1">来到软件部，你将收获：</p>
                 <p id="p1">迷人的发际线</p>
                  <p id="p1"> 高超的编程技术</p>
                    <p id="p1">大牛学长学姐的手把手代码</p>
                 <p id="p1">敲敲敲指导，项目、</p>
                  <p id="p1">比赛也可以抱大腿哦...</p>
                 
                <h5>纳新需求</h5>
                  <p id="p1"> 兴趣！兴趣！还是兴趣！</p>
                <p id="p1"> 不要担心自己没有编程基础！</p>
                <p id="p1"> 如果你想成为技术大牛</p>
                <p id="p1">  如果你渴望用一串串代码</p>
                  <p id="p1"> 将心中的想法实现出来</p>
                 <p id="p1"> 只要你敢梦想，有恒心</p>
                  <p id="p1"> 肯吃苦，勤努力</p>
                <p id="p1">  我们要的就是你！</p>
            </div>
             <div class="rb">
                    <h4>关键词:维护、管理、检测 </h4>
                <p id="p1">运维是各类产品的幕后维护师</p>
                  <p id="p1">这是统筹桑梓社区的所有服务器</p>
                 <p id="p1">负责站点维护的地方</p>
                   <p id="p1">我们致力于服务的稳定性 </p>
                <p id="p1">旨在保证桑梓所产出的</p>
                 <p id="p1">每个项目平稳的运行</p>
                 <p id="p1">保证大家流畅的体验</p>
                  <p id="p1">也注重其安全性</p>
                  <p id="p1"> 在这里学长可以带你们</p>
                   <p id="p1"> 走进安全攻防的网络世界</p>
                    <p id="p1">带你参加如CTF的网络安全竞赛</p>
                 <p id="p1">除此之外，我们也负责</p>
                  <p id="p1">管理协调实验室硬件设施...</p>
                 
                <h5>纳新需求</h5>
                  <p id="p1">  对Linux感兴趣</p>
                <p id="p1">  对网络世界有一颗好奇探索的心</p>
                <p id="p1"> 自律，能够按时完成任务</p>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
	export default {
		name:'Need',
         data() {
            return {
            lis: [],
            rbs:[],
            line:[]
            }
        },
        mounted(){
            this.lis=document.querySelectorAll('li'),
            this.rbs=document.querySelectorAll('.rb'),
            this.line=document.querySelector('.line')
        },
        methods:{
            change(index){
                this.lis.forEach((item1)=>{
                    item1.classList.remove('active');
            this.rbs.forEach((item2)=>{   
                item2.classList.remove('active');
            })
        this.lis[index].classList.add('active');
        this.rbs[index].classList.add('active');
        this.line.className='line line'+(index+1); //index是从0开始，所以这里要+1
    })
}
            }
        }
</script>
<style scoped>

h4{
    margin-bottom: 5vw;
    color: #fff;
}
#p1{
    font-size: 4vw;
    margin: 3px;
    padding:0px;
    color: rgb(254, 251, 251);
}
h5{
    margin-top: 5vw;
    color: #fff;
}
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
   background-color: rgb(122, 157, 247);
}
.cont{
  width: 100%;
background-color: rgb(122, 157, 247);
  padding-top: 2vw;
padding: 5px;
padding-left:2vw;
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
li{
    list-style: none;
}
.container{
    width: 100%;
    height: 600px;
    overflow: hidden;
    padding: auto;
    display: flex;
    
    background-color: rgb(122, 157, 247);
}
.left-box{
    width: 25%;
    display: flex;
    justify-content: center;
    
    background-color: rgb(122, 157, 247);
}
.left-box li{
    padding: 9vw 0;
    line-height: 34px;
    color: rgb(119, 109, 109);
    cursor: pointer;
    display: flex;
    /* 过渡效果 */
    transition: 0.2s ease-out;
}
.left-box .fa{
    font-size: 30px;
    margin-right: 15px;
    width: 34px;
    height: 30px;
    line-height: 34px;
    text-align: center;
}
/* li选中态 */
.left-box li.active{
    color:#fff;
}
/* .left-box li.active .fa{
    color: #e74c3c;
} */
.border{
    height: 500px;
    width: 1px;
    background-color: #ddd;
}
/* .border .line{
    width: 6px;
    height: 45px;
    background-color: #e74c3c;
    margin-left: -2px;
    margin-top: 25px;
    transition: 0.4s ease-in-out;
} */
/* 分别设置各个红色小块的垂直位置 */
.border .line1{
    margin-top: 10vw;
}
.border .line2{
    margin-top: 65px;
}
.border .line3{
    margin-top: 150px;
}
.border .line4{
    margin-top: 170px;
}
.border .line5{
    margin-top: 225px;
}
.right-box{
    flex: 1;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
.right-box .rb{
    width: 100%;
    height: 100%;
    display: flex;
   margin-top: 18vw;
   margin-left: 6vw;
    flex-direction: column;
    color: #333;
    position: absolute;
    /* 默认隐藏 */
    top: -350px;
    opacity: 0;
    transition: 0.4s ease-in-out;
}
.right-box .fa{
    font-size: 64px;
}
.right-box h1{
    margin: 30px 0 40px 0;
}
.right-box p{
    padding: 0 30px;
}
/* 右侧内容区选中态 */
.right-box .rb.active{
    top: 0;
    opacity: 1;
}
</style>