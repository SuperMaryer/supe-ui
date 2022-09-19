import ScrollText from './src/main.vue';

ScrollText.install = function(Vue) {
  Vue.component(ScrollText.name, ScrollText);
}

export default ScrollText;