<template>
  <div class="app">
    <h1>sample-vue-project</h1>
    <router-view></router-view>
    <count></count>
  </div>
</template>

<script>
import Count from '@comp/count/Count'
export default {
  name: 'app',
  components:{
    Count
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/app.scss';

* {
  color: $black;
}
</style>
