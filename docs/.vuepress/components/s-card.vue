<template>
    <div class="s-card" :style="width ? {width: width + 'px'} : {}">
        <div class="s-card-img">
            <img :src="imgSrc" alt="">
        </div>
        <div v-if="summary" class="s-card-summary">
            {{summary}}
        </div>
        <div v-else class="s-card-summary">
            <slot></slot>
        </div>
        <slot name="footer"></slot>
    </div>
</template>
<script>
export default {
    name: 'SupeCard',
    props: {
        // 卡片宽度
        width: {
            type: Number,
            default: 270
        },
        // 卡片图片资源地址
        imgSrc: {
            type: String,
            default: ''
        },
        // 卡片图片高度
        imgHeight: {
            type: Number,
            default: 152
        },
        // 卡片概要
        summary: {
            type: String,
            default: ''
        },
    }
}
</script>
<style lang="sass" >
@import './card.scss'
</style>