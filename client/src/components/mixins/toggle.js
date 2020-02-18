const toggle = {
  data() {
    return {
      m_isShow: false
    }
  },
  methods: {
    m_toggle() {
      this.m_isShow = !this.m_isShow
    },
    m_open() {
      this.m_isShow = true
    },
    m_close() {
      this.m_isShow = false
    }
  }
}

export default toggle
