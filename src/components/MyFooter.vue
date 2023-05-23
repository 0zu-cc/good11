<template>
  <div class="footer">
    <div class="box-bottom bk" >
      <div class="box-bottom-top">
        <div>网站首页 <span>联系我们</span></div>
        <div class="to">相关链接：<span>北京教育园区</span> <span>融职教育</span>
        <a href="https://beian.miit.gov.cn/#/Integrated/index">鄂ICP备2022000720号-1</a>
        </div>
        <div class="to">合作资讯：<span>010-1241552681</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import {NSpace, NCard} from 'naive-ui'

export default defineComponent({
  components: {
    NSpace,
    NCard
  }
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.footer{
  position: relative;
  background: #001529;
  width: 100%;
  height: 57px;
  margin-bottom: -57px;
  /* display: none; */
}
.box-bottom {
  height: 4em;
  margin-top: 0.4em;
  color: #FFFFFF;
  font-size: 14px;
}
.box-bottom-top {
  position: flex;
  width: 214px;
  margin: 0 auto;
}
</style>
