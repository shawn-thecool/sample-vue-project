<template>
  <div class="app">
    <h1>sample-vue-project</h1>
    <router-view></router-view>
    <!-- <count></count> -->
    <popup></popup>
  </div>
</template>

<script>
// import Count from '@comp/count/Count'
import Popup from '@comp/commons/popup/Popup'

export default {
  name: 'app',
  components: {
    // Count,
    Popup
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/app.scss';

* {
  color: $black;
}
</style>
