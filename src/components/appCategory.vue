<template>
  <router-link
    :to="{
      path: '/custom/' + name,
      query: {
        category: name,
      },
    }"
  >
    <div class="category__item">
      <div class="category__inner">
        <img :src="img" alt="" />
        <div class="category__title">
          <h3>{{ name }}</h3>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    name: String,
    img: String,
  },
};
</script>

<style lang="scss" scoped></style>
