<template>
  <div class="app">
    <h1>sample-vue-project</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import '@/assets/scss/app.scss';

* {
  color: $black;
}
</style>
