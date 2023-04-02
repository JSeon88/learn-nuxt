<template>
  <div>
    <h1>카트 페이지</h1>
    <div>
      <ul>
        <li v-for="item in $store.state.cartItems" :key="item.id">
          <img :src="item.imageUrl" :alt="item.name" />
          <p>{{ item.name }}</p>
          <p>{{ item.price }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
