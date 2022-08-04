# Time Period List

时间条列表组件

### 示例：

<time-period-list
    title="Time Period List"
    :list="list"
  />
<script>
  export default{
    data() {
      return {
        list: [{
            "id": "1",
            "name": "早班",
            "color": "#f9dcc6",
            "startTime": "06:00:00",
            "endTime": "14:00:00"
        }, {
            "id": "2",
            "name": "中班",
            "color": "#f3ad7a",
            "startTime": "14:00:00",
            "endTime": "22:00:00"
        }, {
            "id": "3",
            "name": "夜班",
            "color": "#802100",
            "startTime": "22:00:00",
            "endTime": "06:00:00"
        }, {
            "id": "4",
            "name": "巡检-中午",
            "color": "#f48431",
            "startTime": "12:00:00",
            "endTime": "14:00:00"
        }, {
            "id": "5",
            "name": "巡检-下午",
            "color": "#eb6400",
            "startTime": "14:00:00",
            "endTime": "18:00:00"
        }, {
            "id": "6",
            "name": "保养-全天",
            "color": "#7ddcf7",
            "startTime": "08:30:00",
            "endTime": "18:30:00"
        }, {
            "id": "7",
            "name": "保养-上午",
            "color": "#41c2e7",
            "startTime": "08:30:00",
            "endTime": "12:00:00"
        }, {
            "id": "8",
            "name": "保养-下午",
            "startTime": "15:00:00",
            "endTime": "18:00:00"
        }]
      }
    }
  }
</script>
### 代码：

```html
<template>
  <supe-time-period-list
    title="Time Period List"
    :list="list"
  />
</template>
<script>
export default {
  data() {
    return {
      list: [{
        "id": "1",
        "name": "早班",
        "color": "#f9dcc6",
        "startTime": "06:00:00",
        "endTime": "14:00:00"
      }, {
        "id": "2",
        "name": "中班",
        "color": "#f3ad7a",
        "startTime": "14:00:00",
        "endTime": "22:00:00"
      }, {
        "id": "3",
        "name": "夜班",
        "color": "#802100",
        "startTime": "22:00:00",
        "endTime": "06:00:00"
      }, {
        "id": "4",
        "name": "巡检-中午",
        "color": "#f48431",
        "startTime": "12:00:00",
        "endTime": "14:00:00"
      }, {
        "id": "5",
        "name": "巡检-下午",
        "color": "#eb6400",
        "startTime": "14:00:00",
        "endTime": "18:00:00"
      }, {
        "id": "6",
        "name": "保养-全天",
        "color": "#7ddcf7",
        "startTime": "08:30:00",
        "endTime": "18:30:00"
      }, {
        "id": "7",
        "name": "保养-上午",
        "color": "#41c2e7",
        "startTime": "08:30:00",
        "endTime": "12:00:00"
      }, {
        "id": "8",
        "name": "保养-下午",
        "startTime": "15:00:00",
        "endTime": "18:00:00"
      }]
    }
  },
}
</script>
```

### Attributes

| 参数      | 说明         | 类型        | 是否必要 | 默认值 | 备注 |
| --------- | ------------ | ----------- | ------ | ----- | ----- |
| title     | 时间条列表名称   | String    | false |  -  |  -  |
| list      | 卡片条列表数据   | Array     | true  |  -  |  -  |
| barColor  | 卡片条颜色      | String     | false |  #f3ad7a | list item color优先级高于该属性 |

### List Item Attributes
| 参数      | 说明         | 类型        | 是否必要 | 默认值 | 格式  |
| --------- | ------------ | ----------- | ------ | ----- | ----- |
| id         | 唯一标识     | String      | true    | -    | -    |
| name       | 名称         | String      | true    | -    | -    |
| startTime  | 开始时间     | String       | false    | -   | 08:00:00 |
| endTime    | 开始时间     | String       | false    | -   | 22:00:00 |
| color      | 背景颜色     | String       | false    | - | 没有值则使用barColor颜色 |
