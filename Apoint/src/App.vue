<template>
  <div id="app">
    <div class="content">
         <router-view/>
    </div>
  </div>
</template>
<script>
  export default {
    name: "app",
}
</script>
<style>
  .top{
        width:100%;
        height:15vw;
        border: 1px solid rgba(0, 0, 0, .2);
        box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
        font-size: 6vw;
        line-height: 15vw;
        text-align: center;
    }
</style>
