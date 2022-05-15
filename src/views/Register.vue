<template>
  <div class="register">
    <div class="register__container">
      <div class="register__left">
        <div class="header__wrapper-logo">
          <img src="../assets/logo.png" alt="" />
          <span>VISION</span>
        </div>
        <h1 class="register-title">Register</h1>
        <form action="" class="register__form">
          <div class="register__form-group">
            <label for="">Name</label>
            <input type="text" name="name" class="register__form-input" />
          </div>
          <div class="register__form-group">
            <label for="">Email</label>
            <input type="email" name="email" class="register__form-input" />
          </div>
          <div class="register__form-group">
            <label for="">Phone</label>
            <input type="email" name="email" class="register__form-input" />
          </div>
          <div class="register__form-group">
            <label for="">Password</label>
            <input
              type="password"
              name="password"
              class="register__form-input"
            />
          </div>
        </form>
        <button class="register__button">REGISTER</button>
        <div class="register__login">
          Already have an account?
          <span>Sign In</span>
        </div>
      </div>
      <div class="register__right">
        <img src="/src/assets/login/register.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
