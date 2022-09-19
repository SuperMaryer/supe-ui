# Linear Text

滚动文字

### 示例：  
<linear-text>我是渐变文字</linear-text>
<linear-text><div>我是渐变文字1</div></linear-text>
<linear-text :styleObj="styleObj">我是渐变文字50px</linear-text>
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

### 代码：
::: details 点击查看代码
```html
<template>
  <supe-linear-text>我是渐变文字</supe-linear-text>
  <supe-linear-text><div>我是渐变文字1</div></supe-linear-text>
  <supe-linear-text :styleObj="styleObj">我是渐变文字50px</supe-linear-text>
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
```
:::
### Attributes

| 参数      | 说明         | 类型        | 是否必要 | 默认值 |
| --------- | ------------ | ----------- | --------  | ------ |
| styleObj   | 文字样式同style  | Object     | false    | -      |
| default    | 滚动文字         | Slot       | false    | -      |
