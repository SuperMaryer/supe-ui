<template>
  <div class="view-time-period-list">
    <supe-time-period-list
      :list="list"
      title="Time period Demo"
    ></supe-time-period-list>
  </div>
</template>

<script>
import MockData from "./mock.js";
export default {
  data() {
    return {
      list: MockData.listData
    }
  },
}
</script>
