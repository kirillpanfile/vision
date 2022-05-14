<template>
  <app-header></app-header>
  <router-view></router-view>
  <app-footer></app-footer>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.$store.dispatch("fetchAll");
  },
};
</script>

<style></style>
