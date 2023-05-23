<template>
  <div id="common">
    <!--<router-link to="/">Home</router-link> |-->
    <!--<router-link to="/about">About</router-link>-->
    <!-- <Header /> -->
    <!-- <Right></Right> -->
    <!-- <MyContent></MyContent> -->
    <!--<MyFooter style="position: absolute;bottom: -240px;width: 100%"></MyFooter>-->
    <!-- <router-view></router-view> -->
    <Common />
  </div>
  
</template>

<script setup>
import Common from '@/views/CommonLayout.vue'
</script>


<style>
*{margin: 0;}
:root{
  height: 100%;
}
:root > body{
  height: 100%;
}
:root > body > #app > #common{
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100% !important;
}
</style>
