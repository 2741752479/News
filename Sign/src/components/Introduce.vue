<template>
    <div class="Introduce">
      <div class="tabbar">
            <div id="tos" @click="Go1">
                <i class="fa fa-heart-o"></i>
                <p>实验室介绍</p>    
            </div>
             <div id="tos" @click="Go2">
                <i class="fa fa-user-o"></i>
                <p>我们</p>
              </div>
             <div id="tos" @click="Go3">
                 <i class="fa fa-bell-o"></i>
                <p>关于部门</p>
                </div>   
             <div id="tos" @click="Go4">
                 <i class="fa fa-star-o"></i>
                <p>部门介绍</p>
              </div>     
    </div>
</div>
</template>

<script>
	export default {
		name:'Introduce',
    mounted(){
        this.$router.replace({
        path: '/One'
      })
    },
    methods: {
      Go1(){
          this.$router.replace({
            path: '/One'
          })
        },
       Go2(){
          this.$router.replace({
            path: '/We'
          })
        },
         Go3(){
          this.$router.replace({
            path: '/About'
          })
        },
        Go4(){
           this.$router.replace('/Need')
        }
      
      }
    }
</script>
<style>
i{
  display: block;
  margin-bottom: 3vw;
}
#tos{
  width:25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tabbar{
    /* 相对定位 */
    /* width: 100%;
    background-color:white;
    border-radius: 0px;
    bottom: 0rem;
    display: flex;
    position:absolute;
    height: 80px; */
     border: 1px solid rgba(0, 0, 0, .2);
     background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
        height: 10%;
        width: 100%;
        bottom: 0rem;
        position:absolute;
        display: flex;
}
 .fa{
    /* 字体图标大小 */
    font-size: 30px;
    transition: 0.5s;
}
</style>