<template>
  <div>
    <h2>index page</h2>
    <button type="button" @click="onClick">popup open</button>
  </div>
</template>

<script>
import { getPopups } from '@api/v1/popup.test.js'
import { createNamespacedHelpers } from 'vuex'
const { mapMutations } = createNamespacedHelpers('popup')

export default {
  name: 'page-index',
  methods: {
    ...mapMutations(['addPopup', 'removePopup']),
    onClick() {
      getPopups().then(popups => {
        this.addPopup(popups[0])
        this.addPopup(popups[1])
        this.addPopup(popups[2])
      })
    }
  }
}
</script>

<style></style>
