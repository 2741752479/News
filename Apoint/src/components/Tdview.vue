<template>
    <tr>
        <td id="Nam">{{todo.stuName}}</td>
        <td id="depart">{{todo.department}}</td>
        <td id="stas"  :class="{
						color1:todo.state==='已结束',
						color2:todo.state==='进行中',
						color3:todo.state==='未开始',
					}">{{todo.state}}</td>
        <td id="dos">
            <a id @click="todo.state=='已结束'? reset(todo.stuNum): Advance(todo.stuNum)"  :class="{
						color1:todo.state==='已结束',
						color2:todo.state==='进行中'|'未开始',
					}">{{todo.state=='已结束'? '重置':'提前'}}</a>
             <a @click="Delay(todo.stuNum)" v-show="todo.state=='已结束'? false:true">延后</a>
              <a @click="Delete(todo.stuNum)">删除</a>
         </td>
    </tr>
</template>
<script>
export default {
    name:'Tdview',
     props:['todo','todos','isshow','Adv','Dela','Del','Ret'],
     methods:{
        Advance(stunum){
            this.Adv(stunum)
        },
        Delay(stunum){
            this.Dela(stunum)
        },
        Delete(stunum){
            this.Del(stunum)
        },
        reset(stunum){
             this.Ret(stunum)
        }
     }
}
</script>
<style scoped>

     td{
	    border: 1px #E2E8F0 solid;
        border-left: 0px;
        height: 10vw;
        font-size: 3vw;
        text-align: center;
        color: #5d5d5f;
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
a{
   display: block;
   padding: auto;
}
    #dos{
      padding-left:1vw ;
      padding-right: 1vw;
      display: flex;
   
         justify-content: space-between;
         align-items: center;
    }
    .color3 {
        color: #21ea7b !important;
        }
        .color2{
           color: #5d5d5f;
        }
        .color1{
           color:#949495;
        }
</style>>
