<template>
  <div
    class="s-scroll-text"
    ref="scroll"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
  >
    <div
      ref="content"
      class="s-scroll-text-content"
      :style="scrollStyle"
      :class="contentClass"
    >
      <span class="s-scroll-text-label">
        <slot />
      </span>
      <span class="s-scroll-text-label" v-if="isTmpTextVisible">
        <slot />
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "SupeScrollText",
  props: {
    styleObj: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>