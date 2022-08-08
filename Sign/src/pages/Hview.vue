<template>
    <div class="hview">
        <div class="top">欢迎加入桑梓实验室！</div>
        <div class="content">
            <div class="btn1">
                <p style="font-size: 4vw;margin-top: 4vw;">实验室介绍</p>
                <p style="font-size: 1vw;opacity:0.9">看看实验室都有些什么吧</p>
            </div>
            <div class="btn2">
                <p style="font-size: 4vw;margin-top: 4vw;">问卷测试</p>
                <p style="font-size: 1vw;opacity:0.9">测试看看你适合哪一个部门吧</p>
            </div>
            <div class="btn3" @click="getsign">
                <p style="font-size: 4vw;margin-top: 4vw;">纳新报名</p>
                <p style="font-size: 1vw;opacity:0.8">赶紧填写报名表参与纳新吧</p>
            </div>
            <div class="btn4" @click="getapply">
                <p style="font-size: 4vw;margin-top: 4vw;">面试预约</p>
                <p style="font-size: 1vw;opacity:0.8">预约你的面试吧</p>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        name:'Hview',
        methods:{
             getsign(){
                this.$router.push('Sign')
            },
            getapply(){
                this.$router.push('Login')
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
    .btn1,.btn2,.btn3,.btn4{
        position: relative;
        height: 17vw;
        width: 60%;
        border: 1px solid rgba(0, 0, 0, .2);
        box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
        border-radius:8px;
        margin: 40px;
    }
    .btn1::before{
    content:"";
    position: absolute;
    top:4vw;
    left:2vw;
    width: 17vw;
    height: 17vw;
    background:url(../../static/1.png) no-repeat;
    background-size:10vw auto;
    }
     .btn2::before{
    content:"";
    position: absolute; 
    top:4vw;
    left:2vw;
    width: 17vw;
    height: 17vw;
    background:url(../../static/2.png) no-repeat;
    background-size:10vw auto;
    }
     .btn3::before{
    content:"";
    position: absolute; 
    top:3vw;
    left:2vw;
    width: 17vw;
    height: 17vw;
    background:url(../../static/3.png) no-repeat;
    background-size:10vw auto;
    }
     .btn4::before{
    content:"";
    position: absolute;
    top:4vw;
    left:2vw;
    width: 17vw;
    height: 17vw;
    background:url(../../static/Calendar.png) no-repeat;
    background-size:10vw auto;
    }
    p{
        margin-left: 18vw;
    }
</style>
    