<template>
  <div class="product__card">
    <div class="product__card-image">
      <img :src="img" alt="" />
    </div>
    <div class="product__card-name">
      {{ name }}
    </div>
    <div class="product__card-price">
      {{ price }}
    </div>
    <div class="product__card-bottom product-bottom">
      <div class="product-bottom__group">
        <div class="product-bottom-heart">
          <img src="/src/assets/icons/heart.png" alt="" />
        </div>
        <div class="product-bottom-cart">
          <img src="/src/assets/icons/cart-white.svg" alt="" /> ADD TO CART
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-product",
  props: {
    img: String,
    name: String,
    price: String,
  },
};
</script>

<style></style>
