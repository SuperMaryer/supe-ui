<template>
  <div class="view-linear-text">
    <supe-linear-text>我是渐变文字</supe-linear-text>
    <supe-linear-text><div>我是渐变文字1</div></supe-linear-text>
    <supe-linear-text :styleObj="styleObj">我是渐变文字50px</supe-linear-text>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      styleObj: {
        fontSize: '60px'
      }
    }
  }
}
</script>
