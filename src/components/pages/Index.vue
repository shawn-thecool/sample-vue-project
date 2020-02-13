<template>
  <div>
    <h2>index page</h2>
    <button type="button" @click="m_toggle">{{ this.m_isShow }}</button>
  </div>
</template>

<script>
import toggle from '@mixins/toggle'
console.log('imp', toggle)

export default {
  name: 'page-index',
  mixins: [toggle],
  data() {
    return {
      message: 'goodbye',
      bar: 'def'
    }
  },
  created() {
    console.log(this.$data)
    // => { message: "goodbye", foo: "abc", bar: "def" }
  },
  mounted() {
    console.log('mounted', this)
  },
  methods: {}
}
</script>

<style></style>
