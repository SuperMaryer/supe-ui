# supe-ui 组件库

### 介绍
**个人组件库, js通过webpack打包, sass通过gulp打包并压缩**

### 组件文档
https://supermaryer.github.io/supe-ui/

### 快速开始
#### 1. 安装组件库

```bash
npm i supe-ui
```

#### 2. 运行组件库

```javascript
// 全部引入
import 'supe-ui/dist/css/index.css';
import SUI from 'supe-ui';
Vue.use(SUI);


// 按需引入
import 'supe-ui/dist/css/demo.css';
import { Demo } from 'supe-ui';
Vue.use(Demo);
```