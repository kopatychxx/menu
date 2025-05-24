<template>
  <div class="filter-bar">
    <button
      v-for="cat in categories"
      :key="cat"
      :class="{ active: cat === selectedCategory }"
      @click="selectCategory(cat)"
    >
      {{ cat }}
    </button>
  </div>
</template>
<!-- eslint-disable -->
<script setup>
const categories = ['Все', 'Первое', 'Второе', 'Фастфуд'];

const emit = defineEmits(['update:category']);

function selectCategory(cat) {
  emit('update:category', cat);
}
</script>

<style scoped>
.filter-bar {
  display: flex;
  justify-content: space-around;
  padding: 12px;
  background: #f8f8f8;
  border-bottom: 1px solid #ccc;
}
button {
  background: none;
  border: none;
  font-size: 16px;
  padding: 8px 12px;
  cursor: pointer;
}
.active {
  color: #42b983;
  font-weight: bold;
  border-bottom: 2px solid #42b983;
}
</style>
