
<template>
  <div class="We" >
     <div class="cont"> 
        <div class="hed" >
           <div class="arrow-left arrow-box" @click="Retur">
          <b class="left"  @click="Retur"><i class="left-arrow1"></i><i class="left-arrow2"></i></b>
          </div>
            <div class="tet" style="overflow: scroll;" >   
                 <p id="te" style="font-size: 7vw;">我们:</p>
                <p id="te" style="font-size: 4vw;">开发服务在校师生的各类大小系统</p> 
              <p id="te" style="font-size: 4vw;">负责微信公众号"桑梓微助手”的运营</p> 
              <p  id="te" style=" font-size: 4vw;"> 负责华大新社区平台的搭建工作</p>
                <p  id="te" style="font-size: 4vw;">各类网络与信息系统</p>
                <p  id="te" style="font-size: 4vw;">相关的创新活动</p>
                <p  id="te" style="font-size: 4vw;">管理全校移动端最大的</p>
                <p  id="te" style="font-size: 4vw;">教务生活服务平台</p>
                  <p id="te" style="font-size: 4vw;">(刚进学校不认路？)</p>
                  <p id="te" style="font-size: 4vw;">(课程安排不知道？)</p>
              <p  id="te" style=" font-size: 4vw;">(网费水电在哪交)</p>
              <p id="te" style="font-size: 4vw;">(一卡通怎么充值？)</p>
              <p  id="te1" style=" font-size: 4.5vw;"> “桑梓微助手”通通帮你解决！</p> 
            </div>
          </div> 
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
     </div>
</template>
<script>
export default {
    name:'We',
      methods: {
      Go1(){
          this.$router.replace({
            path: '/Intro'
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
        },
         Retur(){
            this.$router.replace('/')
        }
      }
}
</script>

<style scoped>
.arrow-box {
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
.cont{
  width: 100%;
  height: 100%;
  display: flex;
}
.hed{

  width: 100%;
  height: 90%;
 
  padding-top:1vh;
 
 
}
.tet{
 
 
  height: 85vh;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
#te{
     margin-top: 2vh;
}
#te1{
  margin-top: 4vh;
}
.Intro{
     width: 100%;
     height: 100%;
    overflow:hidden;
}
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
    font-size: 25px;
    transition: 0.5s;
}

</style>