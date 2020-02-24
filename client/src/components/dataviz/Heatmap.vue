<template>
  <div>
    <div id="d3Container">d3 test</div>
    <div v-my-directive="1"></div>
  </div>
</template>

<script>
// import * as d3 from 'd3'
export default {
  name:'test-d3',
  mounted(){
    console.log('d3', this.$d3);
  }
}
</script>

<style>

</style>