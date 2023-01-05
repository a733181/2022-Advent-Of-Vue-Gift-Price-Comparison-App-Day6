<template>
  <select
    v-model="selected"
    class="p-2 border-2 border-gray-dark"
    @change="changeSelect"
  >
    <option disabled value="">Select an item</option>
    <option v-for="item in selectData" :key="item.id" :value="item">
      {{ item.title }} - ${{ item.price }}
    </option>
  </select>
</template>

<script setup>
import { ref, inject } from 'vue';
import { useItemComparison } from '../composables/itemComparison';

const { xItem, yItem, isXItem } = useItemComparison();

const selected = ref();

const selectData = inject('selectData');

const changeSelect = () => {
  if (isXItem.value) {
    xItem.value = selected.value;
  } else {
    yItem.value = selected.value;
  }
  isXItem.value = !isXItem.value;
  console.log(isXItem.value);
};
</script>
