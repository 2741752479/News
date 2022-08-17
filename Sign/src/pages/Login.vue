<template>
  <div class="login">
    <div class="top">面试预约(登录)</div>
        <div class="content"> 
            <div class="sgn"> 
                <p>您的姓名：</p>
                <input id='ipt1' type="text"  v-model="stuName"/>
            </div>
            <div class="sgn">
                <p>您的学号：</p>
                <input id='ipt3' type="text"  v-model="stuNum"/>
            </div>
            <div class="sgn">
                <p>您的联系方式:</p>
                <input id='ipt2' type="text"  v-model="phoneNum"/>
            </div>
             <div class="sgn1">
                 <h2>请核对上述信息与报名时相同</h2>
                <div class="butn" @click="Signup">登录</div>
            </div>
        </div>
      
  </div>
  
</template>

<script>
import axios from 'axios'
import { MessageBox } from 'mint-ui'
export default {
    name:'Login',
    data(){
        return{
          stuName:'',
             stuNum:'',
             phoneNum:'',
            docmHeight: document.documentElement.clientHeight, //默认屏幕高度
            showHeight: document.documentElement.clientHeight, //实时屏幕高度
            btnshow1:true
        }
    },
      watch:{
        showHeight:function(){
            if(this.docmHeight>this.showHeight){
                this.btnshow1=false
            }else{
                this.btnshow1=true
            }
        }
    },
      mounted () {
    // 对手机机型的判断
      window.onresize = ()=>{
        return(()=>{
        this.showHeight = document.documentElement.clientHeight||document.body.clientHeight;
        })()
        }
    },
    methods:{
      Signup(){
           if(this.stuName!==''&&this.stuNum!==''&&this.phoneNum!==''){
            try{
                axios({
                method:'post',
                url:'/student/login',
                data:{
                    phoneNum: this.phoneNum,
                    stuName: this.stuName,
                    stuNum: this.stuNum
                }
              }).then(res=>{
                  if(res.data.code===200){
                      MessageBox('登录成功').then(action=>{
                            localStorage.setItem('stuName', this.stuName)
                            localStorage.setItem('stuNum', this.stuNum)
                            localStorage.setItem('phoneNum', this.phoneNum)
                            this.$router.push({
                                path: '/Apoint'
                            })
                            
                        })  
                  }
                  else if(res.data.code===401||res.data.code===404){
                    MessageBox('您未报名')
                  }
              })
              .catch(res => {
              MessageBox.alert('请输入正确信息')
            })
            } catch(e){
                    MessageBox('请输入正确信息')
            }
        }
      }
      }
    }
</script>

<style scoped>
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
    }
    .sgn1{
        margin: 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
        width: 90%;
    }
    p{
        font-size: 18px;
        margin: 2vw;
    }
    h2{
        color: #cad0d3;
        font-size: 4vw;
        bottom: 25vw;
        /* margin: 20vw 18vw; */
        margin-top:40vw;
        margin-left: 18vw;
        margin-right: 18vw;
        margin-bottom: 3vw;
        /* position:absolute;
                opacity:1; */
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
    }
    #ipt2{ 
        padding-left: 4vw; 
        height: 12vw;
        width:95%;
        border: 1px solid rgba(0, 0, 0, .2);
        background:url(../../static/Phone.png) no-repeat;
        border-radius:5px;
        background-size: 1rem;
        background-position: 95% 50%;
        font-size: 20px;
    }
    #ipt3{ 
        padding-left: 4vw; 
        height: 12vw;
        width:95%;
        border: 1px solid rgba(0, 0, 0, .2);
        background:url(../../static/IDCard.png) no-repeat;
        border-radius:5px;
        background-size: 1rem;
        background-position: 95% 50%;
        font-size: 20px;
    }
    input:focus{
        outline: 0;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 5px rgba(81, 203, 238, 1);
    }
     #ipt5{ 
        padding-left: 4vw; 
        height: 12vw;
        width:95%;
        border: 1px solid rgba(0, 0, 0, .2);
        background:url(../../static/Upload.png) no-repeat;
        border-radius:5px;
        background-size: 1rem;
        background-position: 95% 50%;
        font-size: 20px;
    }
    #ipt6{ 
        padding-left: 4vw; 
        height: 12vw;
        width:95%;
        border: 1px solid rgba(0, 0, 0, .2);
        background:url(../../static/Upload.png) no-repeat;
        border-radius:5px;
        background-size: 1rem;
        background-position: 95% 50%;
        font-size: 20px;
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
         margin: auto
        /* bottom: 1rem;
        margin: auto 20%;
        position:absolute; */
    }
</style>
