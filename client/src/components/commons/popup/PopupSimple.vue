<template>
  <div class="popup_simple" :style="{ 'z-index': zIndex }">
    <div v-if="header.title" class="popup_header">
      <button type="button" @click="closeBtnHndr">닫기</button>
      <p>{{ header.title }}</p>
    </div>
    <div v-if="body.content" class="popup_body" :style="`height:calc(100% - ${getBodyHeight}px`">
      <p v-for="(line, idx) in body.content.split('.')" :key="`line1-${popupId + idx}`">{{ line }}</p>
      <p v-for="(line, idx) in body.content.split('.')" :key="`line2-${popupId + idx}`">{{ line }}</p>
      <p v-for="(line, idx) in body.content.split('.')" :key="`line3-${popupId + idx}`">{{ line }}</p>
      <p v-for="(line, idx) in body.content.split('.')" :key="`line4-${popupId + idx}`">{{ line }}</p>
      <p v-for="(line, idx) in body.content.split('.')" :key="`line5-${popupId + idx}`">{{ line }}</p>
    </div>
    <div v-if="footer.date" class="popup_footer">
      <button type="button" @click="closeBtnHndr">닫기</button>
      <button type="button" @click="openBtnHndr">열기</button>
      <p>{{ footer.date }}</p>
    </div>
  </div>
</template>

<script>
import toggle from '@mixins/toggle'
import { createNamespacedHelpers } from 'vuex'
const { mapMutations } = createNamespacedHelpers('popup')

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
    },
    header: {
      type: Object,
      default: null
    },
    body: {
      type: Object,
      default: null
    },
    footer: {
      type: Object,
      default: null
    }
  },
  computed: {
    getBodyHeight() {
      let height = 0
      if (this.header.title) height += 50
      if (this.footer.date) height += 50
      return height
    }
  },
  methods: {
    ...mapMutations(['addPopup', 'removePopup']),
    closeBtnHndr() {
      this.m_close()
      this.removePopup({ id: this.popupId })
    },
    openBtnHndr() {
      this.addPopup({})
    }
  }
}
</script>

<style lang="scss" scoped>
.popup_simple {
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  border-radius: 10px;
  background-color: $white;
  -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
  .popup_header {
    height: 50px;
    border-bottom: 1px solid $gray;
  }
  .popup_body {
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100% - 100px);
    p {
      font-size: 16px;
      padding: 10px;
    }
  }
  .popup_footer {
    height: 50px;
    border-top: 1px solid $gray;
  }
}
</style>
