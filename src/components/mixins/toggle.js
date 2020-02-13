const toggle = {
  data() {
    return {
      _isShow: false
    }
  },
  methods: {
    _toggle() {
      this._isShow = !this._isShow
    },
    _show() {
      this._isShow = true
    },
    _close() {
      this._isShow = false
    }
  }
}

export default toggle
