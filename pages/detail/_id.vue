<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button type="button" @click="addToCart">Add To Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchProductById, createCartItem } from '@/api/index';
export default {
  async asyncData({ params }) {
    const { data } = await fetchProductById(params.id);
    return { product: data };
  },

  methods: {
    async addToCart() {
      const { data } = await createCartItem(this.product);
      this.$store.commit('addCartItem', data);
      this.$router.push('/cart');
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>
