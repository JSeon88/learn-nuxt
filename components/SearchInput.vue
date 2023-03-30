<template>
  <div>
    <input
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <button>search</button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: () => '',
    },
  },
};
</script>

<style lang="scss" scoped></style>
