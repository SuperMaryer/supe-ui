<template>
  <div class="view-plate-num-select">
    <supe-plate-num-select
      v-model="plateNum"
    ></supe-plate-num-select>
    <supe-plate-num-select
      v-model="plateNum"
    ></supe-plate-num-select>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      plateNum: ''
    }
  },
}
</script>