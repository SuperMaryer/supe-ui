import Vue from 'vue'
import App from './App.vue'

// import '../components/css/demo.scss'
// import '../components/css/card.scss'
// import Demo from '../components/lib/demo/index.js'
// import Card from '../components/lib/card/index.js'
// // use 实际上执行 Demo.install方法，在方法里面实际执行Vue.component('name', demo)
// Vue.use(Demo)
// Vue.use(Card)

// 全部引入
import 'supe-ui/dist/css/index.css';
import SUI from 'supe-ui';
Vue.use(SUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
