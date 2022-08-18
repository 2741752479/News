
<template>
  <div class="sign">
    <div class="top">
        <div class="arrow-left arrow-box" >
          <b class="left" @click="Retur"><i class="left-arrow1"></i><i class="left-arrow2"></i></b>
        </div>
        纳新报名</div>
    <div class="content" > 
        <div class="sgn">
            <p>您的姓名：</p>
            <input id='ipt1' type="text" v-model="stuName"/>
        </div>
        <div class="sgn">
            <p>您的联系方式:</p>
            <input id='ipt2' type="text" v-model="phoneNum"/>
        </div>
        <div class="sgn">
            <p>您的学号：</p>
            <input id='ipt3' type="text" v-model="stuNum"/>
        </div>
        <div class="sgn">
            <p>您所在的学院：</p>
            <select v-model="academy" id='ipt4'>
                <option value=""></option>
                <option value="哲学与社会发展学院">哲学与社会发展学院</option>
                <option value="国际关系学院">国际关系学院</option>
                <option value="新闻与传播学院">新闻与传播学院</option>
                <option value="华文学院">华文学院</option>
                <option value="统计学院">统计学院</option>
                 <option value="信息科学与工程学院">信息科学与工程学院</option>
                <option value="计算机科学与技术学院">计算机科学与技术学院</option>
                <option value="材料科学与工程学院">材料科学与工程学院</option>
                <option value="化工学院">化工学院</option>
                <option value="机电与自动化学院">机电与自动化学院</option>
                 <option value="建筑学院">建筑学院</option>
                <option value="土木工程学院">土木工程学院</option>
                <option value="厦航学院">厦航学院</option>
                <option value="音乐舞蹈学院">音乐舞蹈学院</option>
                <option value="国际学院">国际学院</option>
                <option value="旅游学院">旅游学院</option>
                <option value="医学院">医学院</option>
                <option value="法学院">法学院</option>
                <option value="经济与金融学院">经济与金融学院</option>
                <option value="工商管理学院">工商管理学院</option>
                <option value="政治与公共管理学院">政治与公共管理学院</option>
                <option value="外国语学院">外国语学院</option>
                <option value="文学院">文学院</option>
                <option value="数学科学学院">数学科学学院</option>
                <option value="工学院">工学院</option>
                 <option value="体育学院">体育学院</option>
                <option value="美术学院">美术学院</option>
            </select>
        </div>
        <div class="sgn">
            <p>您想要参加的部门(首选):</p>
           <select v-model="department1" id='ipt5'>
                <option value=""></option>
                <option value="软件部">软件部</option>
                <option value="策划部">策划部</option>
                <option value="运维部">运维部</option>
                <option value="运营部">运营部</option>
                <option value="美工部">美工部</option>
            </select>
        </div>
        <div class="sgn">
            <p>您想要参加的部门(次选):</p>
            <select v-model="department2" id='ipt6'>
                <option value=""></option>
                <option value="软件部">软件部</option>
                <option value="策划部">策划部</option>
                <option value="运维部">运维部</option>
                <option value="运营部">运营部</option>
                <option value="美工部">美工部</option>
                </select>
        </div>
        <div class="sgn"><div class="submit" @click="Submit" >提交</div> </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { MessageBox } from 'mint-ui'
export default {
    name:'Sign',
    data(){
        return{
            academy:'',
            stuName:'',
            stuNum:'',
            phoneNum:'',
            department1:'',
            department2:'',
            docmHeight: document.documentElement.clientHeight, //默认屏幕高度
            showHeight: document.documentElement.clientHeight, //实时屏幕高度
            btnshow:true
        }
    },
    // watch:{
    //     showHeight:function(){
    //         if(this.docmHeight>this.showHeight){
    //             this.btnshow=false
    //         }else{
    //             this.btnshow=true
    //         }
    //     }
    // },
    //   mounted () {
    // // 对手机机型的判断
    //   window.onresize = ()=>{
    //     return(()=>{
    //     this.showHeight = document.documentElement.clientHeight||document.body.clientHeight;
    //     })()
    //     }
    // },
    methods:{
        Retur(){
            this.$router.replace('/')
        },
        Submit(){
            var reg = /^[\u4E00-\u9FA5]{2,4}$/;
            var myregex = /^[0-9]*$/
            let show = myregex.test(this.phoneNum)
            if (!(reg.test(this.stuName))) {
               MessageBox('请输入姓名');
            }
            else if (this.phoneNum === ''||!show||this.phoneNum.length!=11)
            {
                MessageBox('请输入正确号码');
            }
            else if (this.stuNum === ''||this.stuNum.length!==10)
            {
                MessageBox('请输入正确学号');
            }
            else if (this.x==='') {
                MessageBox('请输入所在学院');
            }
            else if (this.department1==='') {
                MessageBox('请输入想参加的部门');
            }
            else {
                axios({
                    method:'post',
                    url:'/student/apply',
                    data:{
                        department1:this.department1,
                        department2:this.department2,
                        phoneNum:this.phoneNum,
                        stuName:this.stuName,
                        stuNum:this.stuNum,
                        academy:this.academy,
                    }
                }).then(res=>{
                    if(res.data.code===200){
                        MessageBox('提交成功').then(action=>{
                            // localStorage.setItem('stuName', this.stuName)
                            // localStorage.setItem('stuNum', this.stuNum)
                            // localStorage.setItem('phoneNum', this.phoneNum)
                            // localStorage.setItem('department1', this.department1)
                            // localStorage.setItem('department2', this.department2)
                            // localStorage.setItem('x', this.x)
                            this.$router.push({
                                path: '/'
                            })
                        })
                    }
                    else if(res.data.code===403){
                        MessageBox('您已报名过')
                    }
                    
                })
            }
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
    .content{
        display: flex;
        padding-top:1rem;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        overflow: scroll;
    }
    .sgn{
        margin: 4px;
        height: 20vw;
        width: 90%;
    }
    .submit{
        border: 1px solid rgba(0, 0, 0, .2);
       margin: auto;
        border-radius:9px;
        font-size: 5vw;
        line-height: 15vw;
        text-align: center;
        height: 14vw;
        width: 60vw;
        /* bottom: 1rem;
        margin: auto ;
        position:absolute; */
    }
    p{
        font-size: 18px;
        margin: 1vw;
    }
    input:focus{
        outline: 0;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 5px rgba(81, 203, 238, 1);
    }
    #ipt1{ 
        padding-left: 4vw; 
        height: 10vw;
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
        /* height: 12vw; */
        height: 10vw;
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
        height: 10vw;
        width:95%;
        border: 1px solid rgba(0, 0, 0, .2);
        background:url(../../static/IDCard.png) no-repeat;
        border-radius:5px;
        background-size: 1rem;
        background-position: 95% 50%;
        font-size: 20px;
    }
    #ipt4{ 
        padding-left: 4vw; 
        height: 10.5vw;
        width:100%;
        border: 1px solid rgba(0, 0, 0, .2);
        background:url(../../static/Home.png) no-repeat;
          border-radius:5px;
        background-size: 1rem;
        background-position: 95% 50%;
        font-size: 20px;
        appearance:none
    }
    #ipt5{ 
        padding-left: 4vw; 
        height: 10.5vw;
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
        height: 10.5vw;
        width:100%;
        border: 1px solid rgba(0, 0, 0, .2);
        background:url(../../static/Upload.png) no-repeat;
         border-radius:5px;
        background-size: 1rem;
        background-position: 95% 50%;
        font-size: 20px;
        appearance:none
    }
    option{
         opacity: 0;
    }
</style>