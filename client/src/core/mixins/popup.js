import { createNamespacedHelpers } from 'vuex'

const { mapMutations } = createNamespacedHelpers('popup')

const popupMixin = {
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
    },
    next: {
      type: Function,
      default: () => null
    }
  },
  methods: {
    ...mapMutations(['addPopup', 'removePopup'])
  }
}

export default popupMixin
