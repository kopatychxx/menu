<template>
  <nav class="bottom-nav">
    <router-link to="/" exact-active-class="active">🏠 Главная</router-link>
    <router-link to="/cart" exact-active-class="active">🛒 Корзина</router-link>
  </nav>
</template>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: white;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
}
.router-link-active,
.active {
  color: #42b983;
  font-weight: bold;
}
</style>
