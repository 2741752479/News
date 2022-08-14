
<template>
<div class="ltest">
    <div class="top">纳新问卷测试</div>
        <p id="quest" v-show="isshow" >Question</p>
        <div class="content" v-show="isshow1">
            <p>你认为你是否有探索未知的精神与为之努力的热情？</p>
            <div class="btn" @click="To2">A、是</div>
            <div class="btn" @click="Tof">B、不是</div>
        </div>
        <div class="content" v-show="isshow2">
            <p>你认为以下哪个方面对你来说最有吸引力？</p>
            <div class="btn" @click="To3">A、将创意化为现实</div>
            <div class="btn" @click="To3">B、记录生活中的美</div>
            <div class="btn" @click="To3">C、用代码和逻辑去创作</div>
            <div class="btn" @click="To3">D、去引导项目的进行</div>
        </div>
        <div class="content" v-show="isshow3">
            <p>对于一个程序而言，你对什么更感兴趣？</p>
            <div class="btn1" @click="To5">A、研究它的界面，发现其中美的原理</div>
            <div class="btn1" @click="To6">B、钻研它的代码，发现其从1变为100的过程</div>
            <div class="btn1" @click="To8">C、发现它的不足，指出将其变得更好的方向</div>
            <div class="btn1" @click="To7">D、维护它的稳定，成为其最可靠的骑士</div>
        </div>
        <div class="content" v-show="isshow5">
            <p>与你而言，更倾向于用线条与颜色还是文字来记录生活？</p>
            <div class="btn" @click="Toc">A、线条与颜色</div>
            <div class="btn" @click="To12">B、文字</div>
        </div>
        <div class="content" v-show="isshow6">
            <p>你是否有一定的编程基础？</p>
            <div class="btn" @click="Toe">A、是</div>
            <div class="btn" @click="To10">B、否</div>
        </div>
         <div class="content" v-show="isshow7">
            <p>你对网络安全技术相关知识是否有进行过了解，并能够进行实战？</p>
            <div class="btn" @click="Tod">A、有</div>
            <div class="btn" @click="To11">B、无</div>
        </div>
         <div class="content" v-show="isshow8">
            <p>你是否参与过活动的策划（如出游，晚会等），或对其感兴趣？</p>
            <div class="btn" @click="Toa">A、是</div>
            <div class="btn" @click="To9">B、否</div>
        </div>
        <div class="content" v-show="isshow9">
            <p>在不看手机的情况下你能否对最经常使用的一个app界面与功能做出描述？</p>
            <div class="btn" @click="Toa">A、是，且能够清晰描述</div>
            <div class="btn" @click="To12">B、是，可能捎带些模糊</div>
        </div>
        <div class="content" v-show="isshow10">
            <p>你是否愿意为学习程序编写花费对应的时间与精力？</p>
            <div class="btn" @click="Toe">A、是</div>
            <div class="btn" @click="Tof">B、否</div>
        </div>
        <div class="content" v-show="isshow11">
            <p>你是否愿意为踏入网络安全的领域花费对应的时间与精力？</p>
            <div class="btn" @click="Tod">A、是</div>
            <div class="btn" @click="Tof">B、否</div>
        </div>
        <div class="content" v-show="isshow12">
            <p>于一个产品而言，你认为优秀的宣传重要还是良好的使用体验重要？</p>
            <div class="btn" @click="Tob">A、优秀的宣传</div>
            <div class="btn" @click="Toa">B、良好的使用体验</div>
        </div>
         <div class="content1" v-show="isshowa">
            <p id="depart">适合你的部门是：</p>
            <h3>策划部</h3>
            <div id="intro">策划是优化人与智能交互的重要环节，</div>
            <div id="intro">如果你热爱互联网产品,</div>
            <div id="intro">并怀揣着将其变为实际的勇气，</div>
            <div id="intro">且你相信自己有着不同于寻常人的非凡灵感，</div>
            <div id="intro">有着敏捷的思维能力和良好的表达能力，</div>
            <div id="intro">我们在策划等你。</div>
            <div id="intro">来实验室发展后，策划师，产品经理，全栈工程</div>
            <div id="intro">师等发展方向由你选择</div>
            <div class="Back" @click="Rback">返回主页</div>
        </div>
        <div class="content1" v-show="isshowb">
            <p id="depart">适合你的部门是：</p>
            <h3>运营部</h3>
            <div id="intro">运营是实验室重要的一环，</div>
            <div id="intro">直接与用户群体进行对接。</div>
            <div id="intro">如果你喜欢写作，喜欢与人交流，</div>
            <div id="intro">那么运营部是你的不二选择。</div>
            <div id="intro">我们有高自由度的创作环境，</div>
            <div id="intro">原创的文章拥有者完全的著作权。</div>
            <div id="intro">在这里不仅可以体验到</div>
            <div id="intro">运营近七万用户关注的公众号，</div>
            <div id="intro">还可以体验到</div>
            <div id="intro">运营一个项目的乐趣。</div>
            <div class="Back" @click="Rback">返回主页</div>
        </div>
        <div class="content1" v-show="isshowc">
            <p id="depart">适合你的部门是：</p>
            <h3>美工部</h3>
            <div id="intro">美工是汇聚和创造世界美的工程师，</div>
            <div id="intro">这里支持一切自由想象的翅膀</div>
            <div id="intro">化作一张张形式不限、内容不限的美丽图画；</div>
            <div id="intro">这里欢迎拥有：</div>
            <div id="intro">想和新结识的伙伴合作产出一个个作品的目标、</div>
            <div id="intro">敢想敢做的新或老手绘画家；</div>
            <div id="intro">这里主要负责为桑梓的一个个项目</div>
            <div id="intro">镀上相衬的图片外衣以及精致内里，</div>
            <div id="intro">为想象披上肉眼可见的成果与真实。</div>
            <div class="Back" @click="Rback">返回主页</div>
        </div>
         <div class="content1" v-show="isshowd">
            <p id="depart">适合你的部门是：</p>
            <h3>运维部</h3>
            <div id="intro">运维是各类产品的幕后维护师，</div>
            <div id="intro">这里是统筹桑梓社区的所有服务器，</div>
            <div id="intro">负责站点维护的地方。</div>
            <div id="intro">我们不是“黑客”，</div>
            <div id="intro">但拥有和黑客斗智斗勇的实力。</div>
            <div id="intro">这里主要负责为桑梓的一个个项目</div>
            <div id="intro">有学长可以带你们走进安全攻防的网络世界，</div>
            <div id="intro">带你参加如CTF的网络安全竞赛，</div>
            <div id="intro">一探其神秘面纱。</div>
            <div class="Back" @click="Rback">返回主页</div>
        </div>
          <div class="content1" v-show="isshowe">
            <p id="depart">适合你的部门是：</p>
            <h3>软件部</h3>
            <div id="intro">代码是互联网的必要条件，</div>
            <div id="intro">用最基础的0和1将想象编为现实。</div>
            <div id="intro">迷人的发际线只是表象，</div>
            <div id="intro">高超的编程技术才是真。</div>
            <div id="intro">这里有：</div>
            <div id="intro">大牛学长学姐的手把手</div>
            <div id="intro">带你将十八般代码耍的有模有样，</div>
            <div id="intro">这里有：</div>
            <div id="intro">实际的项目让你上手。</div>
            <div id="intro">只要有梦想，有恒心，肯吃苦，勤努力，</div>
             <div id="intro">软件工程师，系统设计师均不在话下。</div>
        
            <div class="Back" @click="Rback">返回主页</div>
        </div>
            <div class="content1" v-show="isshowf">
            <p id="depart">对不起，可能您并不适合网络创新实验室，感谢您抽时间参与。</p>
            <div class="Back" @click="Rback">返回主页</div>
        </div>
</div>
</template>

<script>
import axios from 'axios'
import { MessageBox } from 'mint-ui'
export default {
    name:'Ltest',
    data(){
        return{
            isshow:true,
            isshow1:true,isshow2:false,isshow3:false,isshow4:false,isshow5:false,
            isshow6:false,isshow7:false,isshow8:false,isshow9:false,isshow10:false,
            isshow11:false,isshow12:false,isshowa:false,isshowb:false,isshowc:false,
            isshowd:false,isshowe:false,isshowf:false,
        }
    
    },
    methods:{
        To2(){
            this.isshow1=false,
            this.isshow2=true
        },
        To3(){
            this.isshow2=false,
            this.isshow3=true
        },
        To5(){
            this.isshow3=false,
            this.isshow5=true
        },
        To6(){
            this.isshow3=false,
            this.isshow6=true
        },
        To7(){
            this.isshow3=false,
            this.isshow7=true
        },
        To8(){
            this.isshow3=false,
            this.isshow8=true
        },
        To9(){
            this.isshow8=false,
            this.isshow9=true
        },
        To10(){
            this.isshow6=false,
            this.isshow10=true
        },
        To11(){
            this.isshow7=false,
            this.isshow11=true
        },
        To12(){
            this.isshow5=false,
            this.isshow9=false,
            this.isshow12=true
        },
        Toa(){
            this.isshow=false,
            this.isshow8=false,
            this.isshow9=false,
            this.isshow12=false,
            this.isshowa=true
        },
        Tob(){
            this.isshow=false,
            this.isshow12=false,
            this.isshowb=true
        },
        Toc(){
            this.isshow=false,
            this.isshow5=false,
            this.isshowc=true
        },
        Tod(){
            this.isshow=false,
            this.isshow7=false,
            this.isshow11=false,
            this.isshowd=true
        },
        Toe(){
            this.isshow=false,
            this.isshow6=false,
            this.isshow10=false,
            this.isshowe=true
        },
        Tof(){
            this.isshow=false,
            this.isshow1=false,
            this.isshow11=false,
            this.isshow10=false,
            this.isshowf=true
        },
        Rback(){
            this.$router.push({path: '/'})
        }
    }
}
</script>
    
<style scoped>
    .content{
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    p{
        font-size: 20px;
        margin-left: 12vw;
         margin-right: 12vw;
        margin-bottom: 3vw;
        margin-top: 3vw;
    }
    .btn{
        position: relative;
        height: 17vw;
        width: 70%;
        border: 1px solid #0fabdf;
        border-radius:3px;
        margin: 3vw;
        line-height: 17vw;
        padding-left: 5vw;
        font-size: 5vw;
    }
     .btn1{
        position: relative;
        height: 17vw;
        width: 70%;
        border: 1px solid #0fabdf;
        border-radius:3px;
        margin: 3vw;
        line-height: 17vw;
        padding-left: 5vw;
        font-size: 3.5vw;
    }
    h2{
        margin-top: 5vw;
        margin-bottom: 8vw;
    }
    #intro{
        margin-left:11vw;margin-right:11vw;
        margin-bottom: 1vw;
        font-size:4vw;
        line-height: 8.5vw;
        border-bottom: 1px solid #184c5e;
    }
    .Back{
        border: 1px solid rgba(0, 0, 0, .2);
        box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
        border-radius:8px;
        font-size: 5vw;
        line-height: 15vw;
        text-align: center;
        height: 15vw;
        width: 60vw;
        bottom: 1rem;
        margin: auto 20%;
        position:absolute;
    }
    #quest{
        font-size: 4.5vw;
        margin-top: 9vw;
        opacity: 0.9;
    }
    #depart{
        margin-left: 7vw;
        font-size: 4.5vw;
        margin-top: 8vw;
        
    }
    h3{
        margin-left: 7vw;
        font-size: 6vw;
        margin-bottom: 3vw;
    }
</style>