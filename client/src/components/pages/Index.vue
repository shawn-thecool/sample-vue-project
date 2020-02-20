<template>
  <div>
    <h2>index page</h2>
    <div>
      <strong>popup test</strong>
      <button type="button" @click="onClick">popup open</button>
    </div>
    <div>
      <strong>d3 test</strong>
      <heatmap></heatmap>
    </div>
  </div>
</template>

<script>
import { getPopups } from '@api/v1/popup.test.js'
import Heatmap from '@comp/dataviz/Heatmap'
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
  },
  components: {
    Heatmap
  }
}
</script>

<style></style>
