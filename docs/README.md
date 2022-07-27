# 快速开始

#### 安装组件库
```bash
npm i supe-ui
```

#### 引用组件库
> 在 main.js 中引用组件库

```javascript
// 全部引入
import 'supe-ui/dist/css/index.css';
import MUI from 'supe-ui';
Vue.use(MUI);


// 按需引入
import 'supe-ui/dist/css/demo.css';
import { Demo } from 'supe-ui';
Vue.use(Demo);
```

