<template>
  <div class="s-linear-text">
    <div class="s-linear-text-background" :style="styleObj">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SupeLinearText',
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