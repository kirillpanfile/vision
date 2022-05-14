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

<style lang="scss" scoped>
.category {
  // .category__item

  &__item {
    width: 500px;
    height: 200px;
    padding: 19px 12px;
    background: #fffefe;
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
    margin-top: 36px;
    display: flex;
    align-items: center;
  }

  // .category__inner

  &__inner {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  // .category__title

  &__title {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-right: 16px;
  }
}
</style>
