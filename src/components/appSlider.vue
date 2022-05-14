<template>
  <div class="slider">
    <div class="slider__container">
      <slot></slot>

      <button @click="next" class="next">
        <img src="/src/assets/carousel/Vector.png" alt="" />
      </button>
      <button @click="prev" class="prev">
        <img src="/src/assets/carousel/Vector-1.png" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-slider",
  methods: {
    next() {
      this.$emit("next");
    },
    prev() {
      this.$emit("prev");
    },
  },
};
</script>

<style></style>
