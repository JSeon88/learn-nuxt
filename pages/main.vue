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
  // 페이지 진입하기 전에 호출
  async asyncData() {
    const res = await axios.get('http://localhost:3000/products')
    const products = res.data
    // this는 Vue 인스턴스가 아닌 Nuxt.js의 컨텍스트 객체
    // 따라서 this 접근 불가
    // this.products = res.data

    // asyncData에서 데이터를 가져온 후에는 asyncData에서 반환한 객체가 Vue 인스턴스의 data에 병합
    return { products }
  },
  // data() {
  //   return {
  //     products: [],
  //   }
  // },

  // async created() {
  //   const res = await axios.get('http://localhost:3000/products')
  //   this.products = res.data
  // },
}
</script>

<style lang="scss" scoped></style>
