<template>
  <div class="app">
    <main>
      <SearchInput
        v-model="searchKeyword"
        @search="searchProducts"
      ></SearchInput>
      <ul>
        <li
          v-for="product in products"
          :key="product.id"
          class="item flex"
          @click="moveToDetailPage(product.id)"
        >
          <img
            class="product-image"
            :src="product.imageUrl"
            :alt="product.name"
          />
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
        </li>
      </ul>
      <div class="cart-wrapper">
        <button class="btn" type="button" @click="moveToCartPage">
          Go Cart
        </button>
      </div>
    </main>
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput.vue';
import { fetchProducts, fetchProductsByKeyword } from '@/api/index';

export default {
  components: { SearchInput },

  async asyncData() {
    const res = await fetchProducts();
    const products = res.data.map((item) => {
      return {
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      };
    });
    return { products };
  },

  data() {
    return {
      searchKeyword: '',
    };
  },

  methods: {
    moveToDetailPage(id) {
      this.$router.push(`detail/${id}`);
    },
    async searchProducts() {
      const res = await fetchProductsByKeyword(this.searchKeyword);
      this.products = res.data.map((item) => {
        return {
          ...item,
          imageUrl: `${item.imageUrl}?random=${Math.random()}`,
        };
      });
    },
    moveToCartPage() {
      this.$router.push('/cart');
    },
  },
};
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
