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
    // styleObj: {
    //   type: Object,
    //   default: () => {
    //     return {};
    //   },
    // },
    // 自动播放
    autoPlay: {
      type: Boolean,
      default: false,
    },
    // 鼠标移过去是播放还是暂停
    hoverAction: {
      type: String,
      default: "play",
    },
    // 外界也可以控制它是否播放
    active: {
      type: Boolean,
      default: false,
    },
    // text: {
    // type: String,
    // default: ''
    // }
  },
  data() {
    return {
      // 是否处于文本动画中
      isPlaying: false,
      // 是否显示副本文本，如果文本内容超出范围时，需要显示
      isTmpTextVisible: false,
      // 左边的滚动尺寸
      translateX: 0,
      isMouseHover: false,
    };
  },
  computed: {
    scrollStyle() {
      return {
        transform: `translateX(${this.translateX}px)`,
      };
    },
    contentClass() {
      // 长度太长，且不在播放中，且没有自动播放时，显示省略号
      if (this.isTmpTextVisible && !this.isPlaying && !this.autoPlay) {
        return "tooltip";
      }
      return "";
    },
  },
  watch: {
    // text() {
    //     this.checkTmpVisible();
    // },
    active() {
      if (this.active) {
        // 如果外部传入开始播放，则开始播放
        this.play();
      } else {
        // 如果active为false，但是设置了鼠标移过去要播放，且鼠标正在上面，则不要停止
        if (this.hoverAction === "play" && this.isMouseHover) {
          this.play();
        } else {
          this.stop();
        }
      }
    },
  },
  methods: {
    async checkTmpVisible() {
      await this.$nextTick();

      let containerWidth = this.$refs.scroll.offsetWidth;
      let contentWidth = this.$refs.content.scrollWidth;

      this.isTmpTextVisible = containerWidth < contentWidth;

      if (this.autoPlay) {
        await this.$nextTick();
        this.play(true);
      }
    },
    play(shouldReplay = false) {
      // 如果文本不会超长，那么就无所谓播放了
      if (!this.isTmpTextVisible) {
        return;
      }

      // 如果需要重新播放，而且在播放中，则先停止
      if (shouldReplay && this.isPlaying) {
        this.stop();
      }

      if (this.isPlaying) {
        return;
      }

      this.isPlaying = true;

      this.$emit("update:active", true);

      let contentWidth = this.$refs.content.scrollWidth;

      this.playInter = setInterval(() => {
        this.translateX -= 1;

        if (Math.abs(this.translateX) >= contentWidth / 2) {
          this.translateX = 0;
        }
      }, 20);
    },
    stop(resetX = true) {
      this.isPlaying = false;
      // 通知外部绑定的播放变量修改为false
      this.$emit("update:active", false);

      if (resetX) {
        this.translateX = 0;
      }

      clearInterval(this.playInter);
    },
    pause() {
      this.stop(false);
    },
    resume() {
      this.play();
    },
    mouseEnterHandler() {
      this.isMouseHover = true;
      // 如果有设置鼠标移过去就暂停，则暂停
      if (this.hoverAction === "pause") {
        this.pause();
      }
      // 如果有设置鼠标移过去就滚动，则滚动
      if (this.hoverAction === "play") {
        this.play();
      }
    },
    mouseLeaveHandler() {
      this.isMouseHover = false;
      // 如果有设置鼠标移过去就暂停，且自动播放，或者active为true，则恢复播放
      if (this.hoverAction === "pause" && (this.autoPlay || this.active)) {
        this.resume();
      }
      // 如果有设置鼠标移过去就播放，且没有自动播放，且active为false，则停止播放
      if (
        this.hoverAction === "play" &&
        !this.autoPlay &&
        this.active === false
      ) {
        this.stop();
      }
    },
  },
  mounted() {
    this.checkTmpVisible();
  },
  beforeDestroy() {
    clearInterval(this.playInter);
  },
};
</script>