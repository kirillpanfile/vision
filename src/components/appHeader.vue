<template>
  <div class="header">
    <div class="header__container">
      <div class="header__wrapper">
        <div class="header__wrapper-logo">
          <img src="../assets/logo.png" alt="" />
          <span>VISION</span>
        </div>
        <div class="header__wrapper-menu">
          <div class="header__wrapper-menu-item">
            <router-link to="/">Home</router-link>
          </div>
          <div class="header__wrapper-menu-item">
            <router-link to="/category">Category</router-link>
          </div>
          <div class="header__wrapper-menu-item">
            <router-link to="/location">Location</router-link>
          </div>
          <div class="header__wrapper-menu-item">
            <router-link to="/faq">FAQ</router-link>
          </div>
          <div class="header__wrapper-menu-item">
            <router-link to="/cart">
              <img src="../assets/icons/cart.svg" alt="" />
            </router-link>
          </div>
          <div class="header__wrapper-menu-item">
            <router-link to="/profile">
              <img src="../assets/icons/user.svg" alt="" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-header",
};
</script>

<style></style>
