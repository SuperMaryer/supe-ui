import LinearText from './src/main.vue';

LinearText.install = function(Vue) {
  Vue.component(LinearText.name, LinearText);
}

export default LinearText;