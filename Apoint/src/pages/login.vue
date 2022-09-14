<template>
  <div class="login" style="overflow:hidden">
    <div class="content"> 
            <div class="sgn"> 
                <p>账号：</p>
                <input id='ipt1' type="text"  v-model="user.admin"/>
            </div>
            <div class="sgn">
                <p>密码：</p>
                <input id='ipt3' type="password"  v-model="user.password"/>
            </div>
            <div class="sgn1">
                <div class="butn" @click="Signup">登录</div>
            </div>
        </div>
  </div>
</template>

<script>
    import { MessageBox } from 'mint-ui'
import {LoginPostData} from '../api/index'  // 后端登录接口
export default {
    name:'login',
    data() {
        return {
            user:{
                admin:'',
                password:''
            },
            userToken:'', // 用于存储从后台获取的token
        }
    },
    methods:{
        Signup(){
            LoginPostData(this.user.admin,this.user.password)
      .then((res)=>{ 
      // 将token存到userToken中     
        this.userToken = res.data.data
        // 将token本地存储到回话中
        localStorage.setItem('token', this.userToken);
        // 如果code为200则跳转到NewReport页面
        if(res.data.code === 200){
            console.log(res.data.data)
            MessageBox('登录成功')
        this.$router.push({name:'Hview'})
        }else{
        //  
            MessageBox('登录失败')
        }
      })
      .catch(err=>{
        console.log(err);
      })
    }
    },
    created:{
       
    }
}
</script>

<style scoped>
p{
    opacity: 0.8;
}
.content{
    margin-top:10vw;
        display: flex;
        padding-top:1rem;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
.sgn{
        margin: 15px;
        height: 20%;
        width: 90%;
}
.sgn1{
        margin: 20vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
        width: 90%;
    }
#ipt1{ 
        padding-left: 4vw; 
        height: 15vw;
        width:98%;
        border: 1px solid rgba(0, 0, 0, .2);
        background:url(../../static/Person.png) no-repeat;
        border-radius:12px;
        background-size: 1rem;
        background-position: 95% 50%;
        font-size: 20px;
    }
    #ipt3{ 
        padding-left: 4vw; 
        height: 15vw;
        width:98%;
        border: 1px solid rgba(0, 0, 0, .2);
        background:url(../../static/IDCard.png) no-repeat;
        border-radius:12px;
        background-size: 1rem;
        background-position: 95% 50%;
        font-size: 20px;
    }
    input:focus{
        outline: 0;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 5px rgba(81, 203, 238, 1);
    }
    .butn{
        border: 1px solid rgba(0, 0, 0, .2);
        box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
        border-radius:8px;
        font-size: 5vw;
        line-height: 15vw;
        text-align: center;
        height: 15vw;
        width: 30vw;
         margin: auto
        /* bottom: 1rem;
        margin: auto 20%;
        position:absolute; */
    }
</style>