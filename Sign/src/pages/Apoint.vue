<template>
    <div class="Apoint" >
        <div class="top">面试预约</div>
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
            <div class="sgn1">
              <p>您想要参加的部门(首选):</p>
                <!-- <input id='ipt6' type="text" v-model="department2"/> -->
                <select v-model="department1" id='ipt5'>
                <option value=""></option>
                <option value="软件部">软件部</option>
                <option value="策划部">策划部</option>
                <option value="运维部">运维部</option>
                <option value="运营部">运营部</option>
                <option value="美工部">美工部</option>
                </select>
            </div>
            <div class="sgn1">
                <p>您想要参加的部门(次选):</p>
                <!-- <input id='ipt6' type="text" v-model="department2"/> -->
                <select v-model="department2" id='ipt6'>
                <option value=""></option>
                <option value="软件部">软件部</option>
                <option value="策划部">策划部</option>
                <option value="运维部">运维部</option>
                <option value="运营部">运营部</option>
                <option value="美工部">美工部</option>
                </select>
            </div>
        </div>
      <div class="butn" @click="Submit">提交</div>
    </div>
</template>

<script>
import axios from 'axios'
import { MessageBox } from 'mint-ui'
export default {
    name:'Apoint',
    data(){
        return{
            stuName:'',
            stuNum:'',
            phoneNum:'',
            department1:'',
            department2:''
        }
    },
    created: function(){
        this.getUserInfo();
    },
    methods: {
        getUserInfo(){
            this.stuName=localStorage.getItem('stuName'),
            this.stuNum=localStorage.getItem('stuNum'),
            this.phoneNum=localStorage.getItem('phoneNum')
        },
        Submit(){
            if(!(this.department1!==''||this.department2!=='')){
                MessageBox('请至少选择一个部门')
            }
           else{ 
            try{
                axios({
                method:'post',
                url:'/student/order',
                data:{
                    department1:this.department1,
                     department2:this.department2,
                        stuNum: this.stuNum
                }
              }).then(res=>{
                if(this.department1===this.department2){
                     MessageBox('请勿选择相同部门哦')
                }
                else{
                    if(res.data.code===200){
                        console.log(res)
                      MessageBox('提交成功').then(action=>{
                        localStorage.setItem('department1', this.department1)
                        localStorage.setItem('department2', this.department2)
                            this.$router.push({
                                path: '/Spoint'
                            })
                        })
                    }
                    else if(res.data.code===401){
                        MessageBox('您未报名')
                    }
                    }
              })
              .catch(res => {
            })
            } catch(e){
            } 
            }
        },
    data() {
        return {
            
            clientHeight:document.documentElement.clientHeight,
            showBtn: true,// 控制按钮盒子显示隐藏

        }
    },
    // mounted() {
    //     window.onresize= ()=>{
    //         if(this.clientHeight>document.documentElement.clientHeight*1.5) {
    //                 this.showBtn =false
    //         }else{
    //             this.showBtn = true
    //         }
    //     }
    // }
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
        opacity:0.8;
    }
    .sgn1{
        margin: 5px;
        height: 20%;
        width: 90%;
    }
    p{
        font-size: 18px;
        margin: 2vw;
    }
    /* h2{
        color: #cad0d3;
        font-size: 4vw;
        bottom: 25vw;
        margin: 1vw 24vw;
        position:absolute;
        opacity:1;
    } */
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
        background:url(../../static/Person.png) no-repeat;
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
    input:focus{
        outline: 0;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 5px rgba(81, 203, 238, 1);
    }
     #ipt5{ 
        padding-left: 4vw; 
        height: 12.5vw;
        width:100%;
        border: 1px solid rgba(0, 0, 0, .2);
        background:url(../../static/Upload.png) no-repeat;
        border-radius:5px;
        background-size: 1rem;
        background-position: 95% 50%;
        font-size: 20px;
        appearance:none
    }
    #ipt6{ 
        padding-left: 4vw; 
        height: 12.5vw;
        width:100%;
        border: 1px solid rgba(0, 0, 0, .2);
        background:url(../../static/Upload.png) no-repeat;
        border-radius:5px;
        background-size: 1rem;
        background-position: 95% 50%;
        font-size: 20px;
        appearance:none
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

</style>