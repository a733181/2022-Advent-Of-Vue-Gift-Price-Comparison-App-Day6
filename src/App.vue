<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Select items to compare</h1>
    <div class="flex flex-col gap-5 justify-center">
      <ItemSelect />
      <ItemSelect />
    </div>
    <ComparisonSummary />
  </div>
</template>

<script setup>
import { ref, provide, onMounted } from 'vue';
import ItemSelect from './components/ItemSelect.vue';
import ComparisonSummary from './components/ComparisonSummary.vue';

const selectData = ref([]);

const getSelect = async () => {
  try {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    selectData.value = data.products;
  } catch (error) {
    console.log(error);
  }
};

provide('selectData', selectData);

onMounted(() => {
  getSelect();
});
</script>
