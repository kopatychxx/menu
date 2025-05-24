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
import { menuData } from '@/store/MenuData'


const selectedCategory = ref('Усі');

const dishes = menuData

const filteredDishes = computed(() =>
  selectedCategory.value === 'Усі'
    ? dishes
    : dishes.filter(d => d.category === selectedCategory.value)
)

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
  align-content: center;
  justify-content: center;
}
</style>
