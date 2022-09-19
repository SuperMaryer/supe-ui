# Plate Num Select

车牌选择组件

### 基础用法示例：
<div>
  <plate-num-select v-model="plateNum" />
</div>
<script>
export default {
  data() {
    return {
      plateNum: ''
    }
  }
}
</script>

### 基础用法代码：
::: details 点击查看代码
```html
<template>
  <div>
    <supe-plate-num-select v-model="plateNum" />
  </div>
</template>

<script>
  export default{
    data() {
      return {
        plateNum: '',
      }
    }
  }
</script>
```
:::
### Attributes

| 参数             | 说明         | 类型        | 是否必要 | 默认值 |
|     ---------    | ------------ | ----------- | -------- | ------ |
| value / v-model  | 绑定值       | String      |  -       | -      |