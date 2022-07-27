# Card

卡片组件

### 示例：

<s-card
    imgSrc="/supe-ui/vue.png"
    summary="react learn" 
  />

### 代码：

```html
<template>
  <s-card
    imgSrc="/supe-ui/vue.png"
    summary="react learn"
  />
</template>
```

### Attributes

| 参数      | 说明         | 类型        | 是否必要 | 默认值 |
| --------- | ------------ | ----------- | -------- | ------ |
| width     | 卡片宽度     | Number      | false    | -      |
| imgSrc    | 图片资源地址 | String      | true     | -      |
| imgHeight | 图片高度     | String      | false    | -      |
| summary   | 卡片概述     | String/Slot | false    | -      |
| footer    | 卡片底部     | Slot        | false    | -      |
