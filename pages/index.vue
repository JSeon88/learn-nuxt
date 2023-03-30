<template>
  <div class="app">
    <main>
      <input type="text" />
      <ul>
        <li v-for="product in products" :key="product.id" class="item flex">
          <img
            class="product-image"
            :src="product.imageUrl"
            :alt="product.name"
          />
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  // 페이지 진입하기 전에 호출
  async asyncData() {
    const res = await axios.get('http://localhost:3000/products')
    // const products = res.data
    // this는 Vue 인스턴스가 아닌 Nuxt.js의 컨텍스트 객체
    // 따라서 this 접근 불가
    // this.products = res.data

    const products = res.data.map((item) => {
      return {
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      }
    })
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

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>
