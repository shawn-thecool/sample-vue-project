<template>
  <div class="popup_dimmed" :style="dimmedStyle"></div>
</template>

<script>
import { STYLE } from '@const'

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
