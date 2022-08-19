<template>
    <div class="hview" style="overflow:hidden">
        <div class="top">纳新管理界面</div>
        <div class="content" >
            <div class="btn1" @click="getSign" style="overflow:hidden">
                报名成员列表
            </div>
           <div class="btn4" @click="getApoint" style="overflow:hidden">
               预约成员列表
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'Hview',
        methods:{
             getSign(){
                this.$router.push('Sign')
            },
            getApoint(){
                this.$router.push('Apoint')
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
    .btn1,.btn4{
        position: relative;
        height: 23vw;
        width: 73%;
        border: 1px solid rgba(0, 0, 0, .2);
        box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
        border-radius:8px;
        margin: 5vw;
        margin-top: 8vw;
        line-height: 23vw;
        text-align: center;
        font-size: 5vw;
    }
    .btn1::before{
    content:"";
    position: absolute;
    top:6vw;
    left:3vw;
    width: 20vw;
    height: 20vw;
    background:url(../../static/1.png) no-repeat;
    background-size:12vw auto;
    }

     .btn4::before{
    content:"";
    position: absolute;
    top:6vw;
    left:3vw;
    width: 20vw;
    height: 20vw;
    background:url(../../static/Calendar.png) no-repeat;
    background-size:12vw auto;
    }
</style>
    