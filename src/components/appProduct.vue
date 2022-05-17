<template>
  <div class="product__card">
    <router-link
      :to="{
        path: '/product/' + name,
        query: {
          name: name,
          price: price,
        },
      }"
    >
      <div class="product__card-top">
        <div class="product__card-image">
          <img :src="img" alt="" />
        </div>
        <div class="product__card-name">
          {{ name }}
        </div>
        <div class="product__card-price">
          {{ price }}
        </div>
      </div>
    </router-link>
    <div class="product__card-bottom product-bottom">
      <div class="product-bottom__group">
        <div @click="isFavorite = !isFavorite" class="product-bottom-heart">
          <img
            v-if="isFavorite == false"
            src="/src/assets/icons/heart.png"
            alt=""
          />
          <img v-else src="/src/assets/icons/heart-solid.png" alt="" />
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
    id: String,
  },
  data() {
    return {
      isFavorite: false,
    };
  },
};
</script>

<style></style>
