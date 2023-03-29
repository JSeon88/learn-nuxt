<template>
  <div>
    <p>메인 페이지</p>
    <div>
      {{ products }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      products: [],
    }
  },

  async created() {
    const res = await axios.get('http://localhost:3000/products')
    this.products = res
  },
}
</script>

<style lang="scss" scoped></style>
