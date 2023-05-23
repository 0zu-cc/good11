<template>
  <div style="height: 100%;">
    <Header />

    <div class="body">
      <router-view></router-view>
      <el-backtop :bottom="100">
        <div id="up-to-top">回到顶部</div>
      </el-backtop>
    </div>
    
    <Footer />
  </div>
  
</template>

<script>
import Header from '@/components/MyHeader'
import Footer from "@/components/MyFooter";

export default {
  components:{
    Header,Footer,
  }
}
</script>

<style scoped>
.body{
  min-height: calc(100vh - 154px);
}
@media (max-width: 1000px) {
  .body{ 
    min-height: calc(100vh - 5rem) !important;
  }
}
.el-backtop{
  width: 100px;
}
#up-to-top{
  height: 100%;
  width: 100%;
  background-color: var(--el-bg-color-overlay);
  box-shadow: var(--el-box-shadow-lighter);
  text-align: center;
  line-height: 40px;
  color: #1989fa;
}
</style>
