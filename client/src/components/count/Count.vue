<template>
  <div class="comp_count">
    <h3>Counter</h3>
    <label for="byNumber">By Number</label>
    <input type="number" id="byNumber" v-model="byNumber" />
    <p>{{ count }}</p>
    <button type="button" @click="decreasedBy(parsedIntByNumber)">-1</button>
    <button type="button" @click="increasedBy(parsedIntByNumber)">+1</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapMutations, mapGetters } = createNamespacedHelpers('count')

export default {
  name: 'comp-count',
  data() {
    return {
      byNumber: 1
    }
  },
  computed: {
    parsedIntByNumber() {
      return parseInt(this.byNumber, 10)
    },
    ...mapGetters(['count'])
  },
  methods: {
    ...mapMutations(['increasedBy', 'decreasedBy'])
  }
}
</script>
