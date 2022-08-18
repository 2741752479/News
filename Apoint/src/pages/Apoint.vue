<template>
    <div class="Apoint" >
    <div class="top">
      <div class="arrow-left arrow-box" >
          <b class="left" @click="Retur"><i class="left-arrow1"></i><i class="left-arrow2"></i></b>
          </div>
          面试列表</div>
    <table>
    <tr>
      <th id="Nam">成员姓名</th>
      <th id="depart">意向部门</th>
      <th id="stas">状态</th>
      <th id="dos">操作</th>
    </tr>
    <Tdview  v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id" :Adv="Adv" :Dela="Dela" :Del="Del" :Ret="Ret">
    </Tdview>
     </table>
     <div class="depa" @click="change">
      <p id="depa1" >当前部门：{{department[currentIndex]}}</p>
      <p id="depar2">点击更换部门</p>
     </div>
      <div class="butn" @click="Next">下一位成员</div>
  </div>
</template>

<script>
import axios from 'axios'
import Tdview from '../components/Tdview.vue'
export default {
    name:'Apoint',
    components:{Tdview},
    data(){
        return{
          todos:'',
          groceryList:[],
          state:[],
          currentIndex:localStorage.getItem('currentIndex')|0,
          department:['策划部','运营部','美工部','软件部','运维部']
        }
    },
   
    created: function(){
        this.getmessage();
    },
    methods:{
        Retur(){
            this.$router.replace('/')
        },
      getmessage(){
          axios.get(`/admin/line/${this.department[this.currentIndex]}`).then(res=>{
             this.groceryList =res.data.data
             var t=0
             var flag=1
             for(var i=0;i<this.groceryList.length;i++){
                if(this.groceryList[i].state==="finished"){
                  flag=0
                }
             }
              if(flag){
                 for(var i=0;i<this.groceryList.length;i++){
                     this.groceryList[i].state='未开始'
                  }
              }
              else{
                 for(var i=0;i<this.groceryList.length;i++){
                         if(this.groceryList[i].state==="finished"){
                              this.groceryList[i].state='已结束'
                              t=i+1
                          }
                          else{
                              this.groceryList[t].state='进行中'
                              break
                          }
                    }
                for(var j=t+1;i<this.groceryList.length;j++){
                    if(this.groceryList[j].state==="finished"){
                              this.groceryList[j].state='已结束'
                    }
                    else{
                        this.groceryList[j].state='未开始'
                    }
                     
                  }
              }   
          }).catch(function(err){
              console.log(err);
          })    
      },
      change(){
        this.currentIndex=(this.currentIndex+1)%5
          localStorage.setItem('currentIndex',this.currentIndex)
          this.getmessage()
      },
      Next(){
         axios.get(`/admin/next/${this.department[this.currentIndex]}`).then(res=>{
             console.log(res)
             this.getmessage()
          }).catch(function(err){
              console.log(err);
          })    
      },
      Adv(stunum){
           axios({
                method:'post',
                url:`/admin/advance/${this.department[this.currentIndex]}`,
                data:{
                    department:this.department[this.currentIndex],
                    stuNum: stunum
                }
              }).then(res=>{
                  if(res.data.code===200){
                        // localStorage.setItem('department1', this.department1)
                        // localStorage.setItem('department2', this.department2)  
                        // this.num1=res.data.data
                        // this.show1=true
                         this.getmessage()
                  }
              })
      },
      Dela(stunum){
           axios({
                method:'post',
                url:`/admin/delay/${this.department[this.currentIndex]}`,
                data:{
                    department:this.department[this.currentIndex],
                    stuNum: stunum
                }
              }).then(res=>{
                  if(res.data.code===200){
                        // localStorage.setItem('department1', this.department1)
                        // localStorage.setItem('department2', this.department2)  
                        // this.num1=res.data.data
                        // this.show1=true
                         this.getmessage()
                  }
              })
      },
       Del(stunum){
           axios({
                method:'post',
                url:`/admin/delete/${this.department[this.currentIndex]}`,
                data:{
                    department:this.department[this.currentIndex],
                    stuNum: stunum
                }
              }).then(res=>{
                  if(res.data.code===200){
                         this.getmessage()
                  }
              })
      },
      Ret(stunum){
           axios({
                method:'post',
                url:'/admin/reset',
                data:{
                    department:this.department[this.currentIndex],
                    stuNum: stunum
                }
              }).then(res=>{
                  if(res.data.code===200){
                         this.getmessage()
                  }
              })
      }

    }
}
</script>
<style scoped>
.arrow-box {
  margin-left: 1.5vw;
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
border-left: 10px transparent ;
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
      table {
    	width: 100%;
      border-collapse: collapse;
    }
     
    th {
    	height: 14vw;
      font-size: 3vw;
      text-align: center;
    }
    #Nam{
      width: 20%;
    }
    #depart{
       width: 30%;
    }
    #stas{
         width: 15%;
    }
    #dos{
         width: 35%;
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
        position:fixed;
        background-color:white;
    }
    .depa{
      display: flex;
       height: 15vw;
        width: 40vw;
        border: 1px solid black;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        bottom: 8rem;
        position: fixed;
        margin: auto 55%;
        opacity: 0.9;
    }
    #depa1{
      font-size: 4.5vw;
    }
    #depar2{
      font-size: 2.5vw;
      color: rgb(91, 90, 92);
    }
</style>