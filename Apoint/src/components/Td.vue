<template>
    <tr>
        <td id="Nam">{{todo.stuName}}</td>
        <td id="depart">{{todo.department1+' '+todo.department2}}</td>
        <td id="school">{{todo.academy}}</td>
        <td id="Right1">{{todo.major}}</td>
        <td id="phone">{{todo.phoneNum}}</td>
        <td id="Right">{{todo.stuNum}}</td>
         
    </tr>
</template>
<script>
export default {
    name:'Td',
    props:['todo']
}
</script>
<style scoped>
     td{
	    border: 1px #E2E8F0 solid;
        border-left: 0px;
        height: 12vw;
        font-size: 3vw;
        text-align: center;
        /* color: #96989c; */
        color: #717173;
        
    }
    #Right{
         border-right: 0px;
         width: 20%;
    }
    #Right1{
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
</style>>
