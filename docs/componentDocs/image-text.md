# Image Text

滚动文字

### 示例：  
<image-text>我是图片背景文字</image-text>
<image-text><div>我是图片背景文字</div></image-text>

### 代码：
::: details 点击查看代码
```html
<template>
  <supe-image-text>我是图片背景文字</supe-image-text>
  <supe-image-text><div>我是图片背景文字</div></supe-image-text>
</template>
```
:::
### Attributes

| 参数      | 说明         | 类型        | 是否必要 | 默认值 |
| --------- | ------------ | ----------- | --------  | ------ |
| styleObj   | 文字样式同style  | Object     | false    | -      |
| default    | 滚动文字         | Slot        | false    | -      |
