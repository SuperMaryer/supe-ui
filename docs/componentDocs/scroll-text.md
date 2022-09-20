# Scroll Text

滚动文字

### 示例一：鼠标移上去才滚动的文本
<scroll-text class="scroll-text-wrap">我是一段足够长的需要鼠标移上去才开始滚动起来的文本</scroll-text>

### 代码：
::: details 点击查看代码
```html
<template>
  <supe-scroll-text class="scroll-text-wrap">
    我是一段足够长的需要鼠标移上去才开始滚动起来的文本
  </supe-scroll-text>
</template>
```
:::

### 示例二：自动滚动的文本
<scroll-text class="scroll-text-wrap" :autoPlay="true">我是一段足够长的需要滚动起来显示的文本</scroll-text>

### 代码：
::: details 点击查看代码
```html
<template>
  <supe-scroll-text class="scroll-text-wrap" :autoPlay="true">
    我是一段足够长的需要滚动起来显示的文本
  </supe-scroll-text>
</template>
```
:::

### 示例三：自动滚动的文本，鼠标移上去就暂停滚动
<scroll-text class="scroll-text-wrap" :autoPlay="true" hoverAction="pause">我是一段足够长的需要滚动起来显示的文本，鼠标移上去就暂停滚动</scroll-text>

### 代码：
::: details 点击查看代码
```html
<template>
  <supe-scroll-text class="scroll-text-wrap" :autoPlay="true" hoverAction="pause">
    我是一段足够长的需要滚动起来显示的文本
  </supe-scroll-text>
</template>
```
:::

### 示例四：自动滚动的文本，带除了文本之外的其他元素
<scroll-text class="scroll-text-wrap" :autoPlay="true">我是一段足够长的需要滚动起来显示的文本，前面还有个图标，一起滚动</scroll-text>

### 代码：
::: details 点击查看代码
```html
<template>
<supe-scroll-text class="scroll-text-wrap" :autoPlay="true">
  <img src="http://www.baidu.com/" alt="placeholder" width="20px"/>
  我是一段足够长的需要滚动起来显示的文本，前面还有个图标，一起滚动
</supe-scroll-text>
</template>
```
:::

<style lang="scss" scoped>
.view-supe-scroll-text {
  padding: 20px;
  border: 1px solid #007acc;
  text-align: left;
}
.supe-scroll-text-title {
  color: #007acc;
}
.scroll-text-wrap {
  padding: 20px;
  margin: 20px 10px;
  width: 160px;
  border: 1px solid #007acc;
}
</style>
### Attributes

| 参数        | 说明                     | 类型        | 是否必要 | 可选值       |  默认值 |
|---------    | ------------             | ----------- | -------- | ------       |  ------ |
| default     | 滚动文字                 | Slot        | false    | -            |  -      |
| autoPlay    | 是否自动播放             | Boolean     | false    | false/true   |  false  |
| hoverAction | 鼠标移上去控制播放/暂停  | String     | false     | play/pause   |  play   |
| active      | 外界也可以控制它是否播放 | Boolean     | false     | false/true   |  play   |
