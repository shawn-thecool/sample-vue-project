<template>
  <div class="popup_simple" :style="{ 'z-index': zIndex }">
    <div class="popup_header">
      <button type="button" @click="closeBtnHndr">닫기</button>
      <p>header</p>
    </div>
    <div class="popup_body">
      <p>body</p>
    </div>
    <div class="popup_footer">
      <button type="button" @click="openBtnHndr">열기</button>
      <p>footer</p>
    </div>
  </div>
</template>

<script>
import toggle from '@mixins/toggle'
import { createNamespacedHelpers } from 'vuex'
const {  mapMutations } = createNamespacedHelpers('popup')

export default {
  name: 'comm-popup-simple',
  mixins: [toggle],
  props: {
    popupId: {
      type: String,
      requeired: true
    },
    zIndex: {
      type: Number,
      required: true
    }
  },
  mounted() {
    console.log('simple mounted')
  },
  methods: {
    ...mapMutations(['addPopup', 'removePopup']),
    closeBtnHndr() {
      this.m_close()
      this.removePopup({ id: this.popupId })
    },
    openBtnHndr() {
      this.addPopup()
    }
  }
}
</script>

<style lang="scss" scoped>
.popup_simple {
  position: fixed;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  width: 100px;
  height: 100px;
  background-color: #fff;
  -webkit-box-shadow: 10px 10px 28px 2px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 10px 10px 28px 2px rgba(0, 0, 0, 0.14);
  box-shadow: 10px 10px 28px 2px rgba(0, 0, 0, 0.14);
  z-index: 21;
}
</style>
