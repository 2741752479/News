<template>
  <div class="sign">
    <div class="top">
       <div class="arrow-left arrow-box" >
          <b class="left" @click="Retur"><i class="left-arrow1"></i><i class="left-arrow2"></i></b>
          </div>
          报名列表</div>
    <table>
    <tr>
      <th id="Nam">成员姓名</th>
      <th id="depart">意向部门</th>
      <th id="school">学院</th>
      <th id="major">专业</th>
      <th id="phone">联系方式</th>
      <th id="Num">学号</th>
      
    </tr>
    <Td  v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id">
    </Td>
  </table>
  </div>
</template>

<script>
  import { SelectSign } from '../api/index'
import axios from 'axios'
import Td from '../components/Td'
export default {
    name:'Sign',
    components:{Td},
    data(){
        return{
          groceryList:[]
        }
    },
    created: function(){
          this.getmessage();
    },
    methods:{
       Retur(){
            this.$router.replace('/Hview')
        },
       getmessage(){
        SelectSign().then(res=>{
          console.log(res.data.data)
            this.groceryList =res.data.data
        }
        ).catch(function(err){
              console.log(err);
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
    	width: 125%;
      border-collapse: collapse;
    }
     
    th {
    	height: 14vw;
      font-size: 3vw;
      text-align: center;
    }
    #major{
      width: 20%;
    }
    #Nam{
      width: 15%;
    }
    #depart{
       width: 25%;
    }
    #school{
       width: 20%;
    }
    #phone{
         width: 20%;
    }
    #Num{
         width: 20%;
    }
    
</style>