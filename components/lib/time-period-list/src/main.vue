<template>
<div class="s-time-period-list">
    <h4 v-if="title" class="s-time-period-list-title">{{title}}</h4>
    <div class="s-time-period-list-content">
      <!-- 0-23小时 0表示0-1 23表示23-24 -->
      <ul class="s-time-period-list-top">
        <li v-for="(item, index) in new Array(24)" :key="index">{{index}}</li>
      </ul>
      <!-- 背景小时、半小时分割线 高度随数据变化 -->
      <ul class="s-time-period-list-bottom">
        <li v-for="(item, index) in new Array(47)" :key="index" :style="{height: `${list.length * 20}px`}"></li>
      </ul>
      <!-- 时间段bar 跨天特殊处理 -->
      <ul class="s-time-period-list-bar-wrap">
        <li v-for="item in list" :key="item.id" :title="`${item.name}(${item.startTime}-${item.endTime})`">
          <span class="s-time-period-list-left-bar" :style="leftBarStyle(item)"></span>
          <span class="s-time-period-list-right-bar" :style="rigthBarStyle(item)">{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
export default {
  name: 'SupeTimePeriodList',
	props: {
		list: {
			type: Array,
			default: () => {
        return []
      }
		},
    title: {
      type: String,
      default: ''
    },
    barColor: {
      type: String,
      default: '#f3ad7a'
    },
	},
  methods: {
    leftBarStyle(item) {
      const cur = dayjs().format('YYYY-MM-DD');
      const startDate = `${cur} ${item.startTime}`;
      const endDate = `${cur} ${item.endTime}`;
      // 判断开始时间是否大于结束时间 ==> 分开两段
      const isAfter = dayjs(startDate).isAfter(dayjs(endDate));
      // 计算时间bar占比 及 定位
      if (!isAfter) {
        return {}
      } else {
        const width = (dayjs(endDate).diff(dayjs(`${cur} 00:00:00`))* 100 / (25*3600*1000) ) + '%';
        return {
          left: '0px',
          width,
          maxWidth: width,
          borderTopRightRadius: '8px',
          borderBottomRightRadius: '8px',
          backgroundColor: item.color || this.barColor,
        }
      }
    },
    rigthBarStyle(item) {
      const cur = dayjs().format('YYYY-MM-DD');
      const startDate = `${cur} ${item.startTime}`;
      const endDate = `${cur} ${item.endTime}`;
      // 判断开始时间是否大于结束时间 ==> 分开两段
      const isAfter = dayjs(startDate).isAfter(dayjs(endDate));
      // 计算时间bar占比 及 定位
      let left = (dayjs(startDate).diff(dayjs(`${cur} 00:00:00`))* 100 / (24*3600*1000)) + '%';
      if (!isAfter) {
        const width = (dayjs(endDate).diff(dayjs(startDate))* 100 / (24*3600*1000)) + '%'
        return {
          left,
          width,
          maxWidth: width,
          borderRadius: '10px',
          backgroundColor: item.color || this.barColor,
        }
      } else {
        const width = (dayjs(`${cur} 23:59:59`).diff(dayjs(startDate))* 100 / (24*3600*1000) ) + '%';
        return {
          left,
          width,
          maxWidth: width,
          borderTopLeftRadius: '8px',
          borderBottomLeftRadius: '8px',
          backgroundColor: item.color || this.barColor,
        }
      }
    }
  }
}
</script>
