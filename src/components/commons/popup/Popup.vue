<template>
  <div class="popup">
    <popup-simple v-for="popup in popups" :key="popup.id" :popupId="popup.id" :zIndex="popup.zIndex"></popup-simple>
    <popup-dimmed v-if="hasPopup"></popup-dimmed>
  </div>
</template>

<script>
import PopupDimmed from '@comp/commons/popup/PopupDimmed'
import PopupSimple from '@comp/commons/popup/PopupSimple'
import { createNamespacedHelpers } from 'vuex'

const { mapGetters } = createNamespacedHelpers('popup')

export default {
  name: 'comm-popup',
  computed: {
    ...mapGetters(['popups', 'hasPopup'])
  },
  components: {
    PopupSimple,
    PopupDimmed
  }
}
</script>

<style></style>
