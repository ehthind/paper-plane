<template>
  <div class="about">
    <el-time-picker
      is-range
      v-model="value4"
      range-separator="To"
      start-placeholder="Start time"
      end-placeholder="End time">
    </el-time-picker>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
    }
  }
}
</script>
