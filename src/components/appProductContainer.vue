<template>
  <div class="product__container">
    <div class="product-title">{{ name }}</div>
    <div class="product-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "appProductContainer",
  props: {
    name: String,
  },
};
</script>

<style></style>
