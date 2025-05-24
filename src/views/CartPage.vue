<template>
  <div class="cart-page">
    <h1>🛒 Корзина</h1>

    <div v-if="cart.items.length === 0">
      <p>Корзина пуста.</p>
    </div>

    <div v-else>
      <ul>
        <li v-for="(item, index) in cart.items" :key="index">
          <img :src="item.image" alt="dish" />
          <span>{{ item.name }}</span>
          <button @click="cart.removeDish(index)">❌</button>
        </li>
      </ul>

      <button class="submit-btn" @click="submitOrder">
        ✅ Отправить заказ
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/store/cartStore';
const cart = useCartStore();

function submitOrder() {
  const orderText = cart.items.map((item) => `• ${item.name}`).join('\n');

  fetch(
    'https://api.telegram.org/bot8073689808:AAGT4B6hXUMSFyJ9BiVb6tHGPPg6ywNrNkI/sendMessage',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: 6054637958,
        text: `🍽 *Новый заказ:*\n\n${orderText}`,
        parse_mode: 'Markdown',
      }),
    }
  )
    .then(() => {
      alert('Заказ отправлен!');
      cart.clearCart();
    })
    .catch(() => alert('Ошибка при отправке заказа'));
}
</script>

<style scoped>
.cart-page {
  padding: 16px;
  padding-bottom: 80px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}
img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 6px;
}
.submit-btn {
  background: #42b983;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  width: 100%;
  font-size: 16px;
  margin-top: 16px;
}
</style>
