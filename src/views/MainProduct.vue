<template>
  <div>
    <el-tabs :tab-position="tabPosition" style="height: 200px" class="tabs" type="border-card">
      <el-tab-pane label="New fancy electronic products">New fancy electronic products</el-tab-pane>
      <el-tab-pane label="Config">Config</el-tab-pane>
      <el-tab-pane label="Role">Role</el-tab-pane>
      <el-tab-pane label="Task">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

let width = window.matchMedia("(max-width: 500px)");

export default {
  name: "MainProduct",
  data(){
    return{
      tabPosition: 'top',
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>
div{ 
  width: 100%;
}
.tabs{ 
  width: 85%;
  position: relative;
  left: 7%;
  top: 10px;
}
</style>
