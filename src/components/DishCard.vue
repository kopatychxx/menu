<template>
  <div class="dish-card">
    <img :src="dish.image" alt="Фото блюда" class="dish-img" />
    <h3>{{ dish.name }}</h3>
    <p>{{ dish.description }}</p>
    <button @click="addToCart">Добавить в корзину</button>
  </div>
</template>

<script setup>
import { useCartStore } from '@/store/cartStore';

const props = defineProps({
  dish: Object,
});

const cart = useCartStore();

function addToCart() {
  cart.addDish(props.dish);
}
</script>

<style scoped>
.dish-card {
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 16px;
  width: 250px;
  text-align: center;
  background-color: #fff;
}
.dish-img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 8px;
}
button {
  margin-top: 8px;
  padding: 8px 12px;
  border: none;
  background-color: #42b983;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}
</style>
