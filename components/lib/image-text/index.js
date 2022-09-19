import ImageText from './src/main.vue';

ImageText.install = function(Vue) {
  Vue.component(ImageText.name, ImageText);
}

export default ImageText;