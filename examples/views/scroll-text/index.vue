<template>
  <div class="view-supe-scroll-text">
    <h4 class="supe-scroll-text-title">自动滚动的文本</h4>
    <div class="supe-scroll-text-wrap">
      <supe-scroll-text :autoPlay="true">
        这是一段非常长的必须一定需要滚动的文本
      </supe-scroll-text>
    </div>
    <h4 class="supe-scroll-text-title">自动滚动的文本，鼠标移上去就暂停滚动</h4>
    <div class="supe-scroll-text-wrap">
      <supe-scroll-text :autoPlay="true" hoverAction="pause">
        这是一段非常长的必须一定需要滚动的文本
      </supe-scroll-text>
    </div>
    <h4 class="supe-scroll-text-title">鼠标移上去才滚动的文本</h4>
    <div class="supe-scroll-text-wrap">
      <supe-scroll-text> 这是一段需要鼠标移上去才滚动的文本 </supe-scroll-text>
    </div>
    <h4 class="supe-scroll-text-title">带除了文本之外的其他元素的滚动</h4>
    <div class="supe-scroll-text-wrap">
      <supe-scroll-text :autoPlay="true">
        <img src="http://www.baidu.com/" alt="placeholder" width="20px"/>
        这是一段非常长的必须一定需要滚动的文本，它前面还带了个图标(待图表导入后实现)
      </supe-scroll-text>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>
<style lang="scss" scoped>
.view-supe-scroll-text {
  padding: 20px;
  border: 1px solid #007acc;
  text-align: left;
}
.supe-scroll-text-title {
  color: #007acc;
}
.supe-scroll-text-wrap {
  margin: 40px 0;
  width: 160px;
}
</style>
