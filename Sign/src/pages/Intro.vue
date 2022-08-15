<template>
  <div class="Intro">
        <div class="conte">
             <router-view />
        </div>
        <Introduce></Introduce>
  </div>
</template>

<script>
import Introduce from '../components/Introduce.vue';
export default {
    name:'Intro',
     components: {Introduce }

}
</script>

<style>
</style>