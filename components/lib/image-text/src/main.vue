<template>
  <div class="s-image-text">
    <div class="s-image-text-background" :style="styleObj">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SupeImageText',
  props: {
    styleObj: {
      type: Object,
      default: () => {
        return {}
      }
    },
  }
}
</script>