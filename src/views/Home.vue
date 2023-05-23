<template>
  <div class="home" >
    <Carousel />
  </div>
</template>

<style scoped>
.home{
  margin-top: 1%;
  /* display: none; */
  /* margin-bottom: -57px; */ 
}


</style>

<script>
import Carousel from '@/components/Carousel'
export default{
  components:{
    Carousel,
  }
}
</script>
