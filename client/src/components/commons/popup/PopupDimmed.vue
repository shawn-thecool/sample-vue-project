<template>
  <div class="popup_dimmed" :style="dimmedStyle" @click="removeLastPopup"></div>
</template>

<script>
import { STYLE } from '@const'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { createNamespacedHelpers } from 'vuex'
const { mapMutations } = createNamespacedHelpers('popup')

const { Z_INDEX, BG_COLOR, OPACITY } = STYLE.POPUP.DIMMED
export default {
  name: 'comm-popup-dimmed',
  data() {
    return {
      dimmedStyle: {
        ['z-index']: Z_INDEX,
        ['background-color']: BG_COLOR,
        ['opacity']: OPACITY
      }
    }
  },
  mounted() {
    disableBodyScroll(document.body)
  },
  destroyed() {
    clearAllBodyScrollLocks()
  },
  methods: {
    ...mapMutations(['removeLastPopup'])
  }
}
</script>

<style lang="scss" scoped>
.popup_dimmed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
