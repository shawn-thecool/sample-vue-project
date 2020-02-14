<template>
  <div>
    <h2>index page</h2>
    <button type="button" @click="addPopup({})">popup open</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapMutations } = createNamespacedHelpers('popup')

export default {
  name: 'page-index',
  methods: {
    ...mapMutations(['addPopup'])
  }
}
</script>

<style></style>
