<template>
  <div>
    <el-carousel :interval="3000000" type="card" height="620px" arrow="always">
      <el-carousel-item v-for="item in 1" :key="item">
        <img alt="创意小家电与微电子产品" src="../assets/图片1.png" />
      </el-carousel-item>
      <el-carousel-item>
        <img alt="创意小家电与微电子产品" src="../assets/图片2.png" 
             style="transform:scaleX(1.25) scaleY(1.322) translateY(6.1px);" />
      </el-carousel-item>
      <el-carousel-item>
        <img alt="创意小家电与微电子产品" src="../assets/图片3.png" />
      </el-carousel-item>
      <el-carousel-item>
        <img alt="创意小家电与微电子产品" src="../assets/图片4.png" 
             style="transform:scaleX(1.12) scaleY(1.09) translateY(8px);"/>
      </el-carousel-item>
        
    </el-carousel>
  </div>
</template>

<script>
export default{
  data(){
    return{}
  },
  methods:{
  }
}
</script>

<style scoped>
:deep .el-carousel__arrow{
  background-color: #000;
}

.el-carousel__item{
  line-height: 600px;
}
.el-carousel__item img{
  vertical-align: middle;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
