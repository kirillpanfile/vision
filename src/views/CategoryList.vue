<template>
  <appProductContainer :name="this.$route.query.category">
    <app-product
      v-for="(item, index) in getGlasses"
      :key="index"
      :img="item.img"
      :name="item.name"
      :price="item.price"
    >
    </app-product>
  </appProductContainer>
</template>

<script>
import appProductContainer from "../components/appProductContainer.vue";
import { mapState } from "vuex";
export default {
  name: "CategoryList",
  components: {
    appProductContainer,
  },
  computed: {
    ...mapState({
      sunglasses: (state) => state.sunglasses,
      protectiveeyeware: (state) => state.protectiveeyeware,
      prescriptionframes: (state) => state.prescriptionframes,
    }),
    getGlasses() {
      return [this.sunglasses, this.protectiveeyeware, this.prescriptionframes]
        .flat()
        .filter((item) => item.category.includes(this.$route.query.category));
    },
  },
};
</script>

<style></style>
