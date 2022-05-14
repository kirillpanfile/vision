<template>
  <div class="categories__container">
    <div class="categories__wrapper">
      <div class="categories__wrapper-title">
        <span>DIFFERENT STYLES</span>
      </div>
      <div class="categories__row">
        <app-category
          v-for="(item, index) in categories"
          :key="index"
          :name="item.name"
          :img="item.img"
        ></app-category>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import appCategory from "../components/appCategory.vue";
export default {
  name: "Category",
  components: {
    appCategory,
  },
  computed: {
    ...mapState({
      categories: (state) => state.categories,
    }),
  },
};
</script>

<style></style>
