<template>
  <div class="popup_simple" :style="{ 'z-index': zIndex, width: setPopupWidth }">
    <div v-if="header" class="popup_header">
      <button type="button" @click="removePopup({ id: popupId })">닫기</button>
      <h3 v-if="header.title">{{ header.title }}</h3>
    </div>
    <div v-if="body" class="popup_body">
      <div v-if="body.content">
        <p v-for="(line, idx) in body.content.split('.')" :key="`line1-${popupId + idx}`">{{ line }}</p>
        <p v-for="(line, idx) in body.content.split('.')" :key="`line2-${popupId + idx}`">{{ line }}</p>
        <p v-for="(line, idx) in body.content.split('.')" :key="`line3-${popupId + idx}`">{{ line }}</p>
        <p v-for="(line, idx) in body.content.split('.')" :key="`line4-${popupId + idx}`">{{ line }}</p>
        <p v-for="(line, idx) in body.content.split('.')" :key="`line5-${popupId + idx}`">{{ line }}</p>
      </div>
    </div>
    <div v-if="footer" class="popup_footer">
      <button type="button" @click="removePopup({ id: popupId })">닫기</button>
      <button type="button" @click="next">열기</button>
      <p v-if="footer.date">{{ footer.date }}</p>
    </div>
  </div>
</template>

<script>
import popup from '@mixins/popup'

export default {
  name: 'comm-popup-simple',
  mixins: [popup],
  computed: {
    setPopupWidth() {
      return this.body && this.body.content ? '600px' : '300px'
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
  border-radius: 10px;
  background-color: $white;
  -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
  .popup_header {
    height: 50px;
    border-bottom: 1px solid $line;
  }
  .popup_body {
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 500px;
    /* height: calc(100% - 100px); */
    p {
      font-size: 16px;
      padding: 10px;
    }
  }
  .popup_footer {
    height: 50px;
    border-top: 1px solid $line;
  }
}
</style>
