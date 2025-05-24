<template>
  <div class="menu-page">
    <FilterBar v-model:category="selectedCategory" />

    <div class="dish-list">
      <DishCard v-for="dish in filteredDishes" :key="dish.id" :dish="dish" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import DishCard from '@/components/DishCard.vue';
import FilterBar from '@/components/FilterBar.vue';

const selectedCategory = ref('Все');

const dishes = [
  {
    id: 1,
    name: 'Солянка',
    description: 'Густой суп с мясом и маслинами.',
    category: 'Первое',
    image: 'https://source.unsplash.com/400x300/?soup',
  },
  {
    id: 2,
    name: 'Пюре с бифстрогановом',
    description: 'Картофельное пюре и нежная говядина.',
    category: 'Второе',
    image: 'https://source.unsplash.com/400x300/?beef',
  },
  {
    id: 3,
    name: 'Бургер',
    description: 'Классический бургер с сыром и беконом.',
    category: 'Фастфуд',
    image: 'https://source.unsplash.com/400x300/?burger',
  },
];

const filteredDishes = computed(() => {
  if (selectedCategory.value === 'Все') return dishes;
  return dishes.filter((d) => d.category === selectedCategory.value);
});
</script>

<style scoped>
.menu-page {
  padding-bottom: 80px; /* чтобы не перекрывал нижний navbar */
}
.dish-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
}
</style>
