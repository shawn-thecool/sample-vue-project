<template>
  <div id="d3Container">d3 test</div>
</template>

<script>
import * as d3 from 'd3'
export default {
  name:'test-d3',
  mounted(){
    console.log('d3', d3);
  }
}
</script>

<style>

</style>