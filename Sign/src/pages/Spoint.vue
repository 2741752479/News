<template>
  <div class="spoint">
    <div class="top">
       <div class="arrow-left arrow-box" >
          <b class="left" @click="Retur"><i class="left-arrow1"></i><i class="left-arrow2"></i></b>
          </div>
          面试预约</div>
        <div class="content"> 
            <div class="sgn"> 
                <p>您的姓名：</p>
                <div id='ipt1' >{{stuName}}</div>
            </div>
            <div class="sgn">
                <p>您的学号：</p>
                <div id='ipt2' >{{stuNum}}</div>
            </div>
            <div class="sgn">
                <p>您的联系方式:</p>
                <div id='ipt3' >{{phoneNum}}</div>
            </div>
    </div>
    <p id="p1">排队人数:</p>
    <div class="per"> 
        <div class="Depart1">
           <p>{{department1}}</p>
           <p v-show="show1">{{num1}}人</p>
          </div>
        <div class="Depart2">
          <p>{{department2}}</p>
           <p v-show="show2">{{num2}}人</p>
        </div>
    </div>
    <h2>当轮到面试时，会于桑梓微助手公众号进行通知</h2>
    <div class="butn" @click="change">修改面试预约信息</div>
  </div>
</template>

<script>
import axios from 'axios'
import { MessageBox } from 'mint-ui'
export default {
    name:'Spoint',
     data(){
        return{
          show1:false,
          show2:false,
            stuName:'',
            stuNum:'',
            phoneNum:'',
            department1:'',
            department2:'',
            num1:'',
            num2:''
        }
    },
    created: function(){
        this.getwish();
    },
    methods:{
      Retur(){
        this.$router.replace('/')
      },
        getwish(){
            this.stuName=localStorage.getItem('stuName'),
            this.stuNum=localStorage.getItem('stuNum'),
            this.phoneNum=localStorage.getItem('phoneNum'),
            this.department1=localStorage.getItem('department1')
            this.department2=localStorage.getItem('department2')
            //发请求
            if(this.department1!==''){
                axios({
                method:'post',
                url:'/student/wait',
                data:{
                    department:this.department1,
                    stuNum: this.stuNum
                }
              }).then(res=>{
                  if(res.data.code===200){
                        // localStorage.setItem('department1', this.department1)
                        // localStorage.setItem('department2', this.department2)  
                        this.num1=res.data.data
                        this.show1=true
                  }
              })
            }
            if(this.department2!==''){
              axios({
                method:'post',
                url:'/student/wait',
                data:{
                    department:this.department2,
                    stuNum: this.stuNum
                }
              }).then(res=>{
                  if(res.data.code===200){
                        // localStorage.setItem('department1', this.department1)
                        // localStorage.setItem('department2', this.department2)  
                        this.num2=res.data.data
                        this.show2=true
                  }
              })
            }
                
          },
        change(){ 
          this.$router.push({
              path: '/Apoint'
          })
        }
    }
}
</script>
<style scoped>
.arrow-box {
margin-top: 2vh;
width: 30px;
height: 30px;
position: fixed;
}
 
.left {
width: 20px;
height: 20px;
position: absolute;
left: 0;
top: 0;
z-index: 2;
}
.left-arrow1,
.left-arrow2 {
width: 0;
height: 0;
display: block;
position: absolute;
left: 0;
top: 0;
z-index: 5;
border-top: 10px transparent dashed;
border-left: 10px transparent dashed;
border-bottom: 10px transparent dashed;
border-right: 10px white solid;
overflow: hidden;
}
 
.left-arrow1 {
border-right: 10px black solid;
}
.left-arrow2 {
left: 1px;
border-right: 10px white solid;
}
     .butn{
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
    h2{
        font-size: 3vw;
        text-align: center;
        bottom: 25vw;
        margin: auto 5%;
        position:absolute;
        opacity: 0.7;
    }
    .per{
      margin: 1rem;
      width: 90%;
      height:40% ;
      display: flex;
      justify-content: space-between;
    }
    #p1{
      margin-left: 7vw;
      margin-top: 4vw;
    }
    .Depart1{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width:45%;
      height: 30vw;
      border: 1px solid rgba(0, 0, 0, .2);
      box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
      border-radius:8px;
      text-align: center;
      
    }
    .Depart2{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width:45%;
      height: 30vw;
      border: 1px solid rgba(0, 0, 0, .2);
      box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
      border-radius:8px;
       text-align: center;
    }
    /* p{
      font-size: 18px;
      margin-left: 1.5rem;
      margin-top: 1rem;
    } */
     .content{
        display: flex;
        padding-top:1rem;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .sgn{
        margin: 5px;
        height: 20%;
        width: 90%;
        opacity:0.8;
    }
    p{
        font-size: 18px;
        margin: 2vw;
    }
      #ipt1{ 
        padding-left: 4vw; 
        height: 12vw;
        width:95%;
        border: 1px solid rgba(0, 0, 0, .2);
        background:url(../../static/Person.png) no-repeat;
        border-radius:5px;
        background-size: 1rem;
        background-position: 95% 50%;
        font-size: 20px;
        line-height:12vw ;
    }
    #ipt2{ 
        padding-left: 4vw; 
        height: 12vw;
        width:95%;
        border: 1px solid rgba(0, 0, 0, .2);
        background:url(../../static/IDCard.png) no-repeat;
        border-radius:5px;
        background-size: 1rem;
        background-position: 95% 50%;
        font-size: 20px;
        line-height:12vw ;
    }
    #ipt3{ 
        padding-left: 4vw; 
        height: 12vw;
        width:95%;
        border: 1px solid rgba(0, 0, 0, .2);
        background:url(../../static/Phone.png) no-repeat;
        border-radius:5px;
        background-size: 1rem;
        background-position: 95% 50%;
        font-size: 20px;
        line-height:12vw ;
    }
</style>