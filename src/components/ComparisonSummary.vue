<template>
  <p class="mx-5 text-center">
    <!-- You can get <strong>n</strong> <em>X items</em> for about the same price as
    a single <em>Y item</em> -->
    {{ comparison }}
  </p>
</template>

<script setup>
import { computed } from 'vue';
import { useItemComparison } from '../composables/itemComparison';

const { xItem, yItem } = useItemComparison();

const comparison = computed(() => {
  if (xItem.value.id === undefined) {
    return '';
  }
  if (xItem.value.id === yItem.value.id) {
    return '兩個商品相同';
  } else {
    if (xItem.value.price > yItem.value.price) {
      return `${xItem.value.title} 可購買 ${yItem.value.title} ${Math.floor(
        xItem.value.price / yItem.value.price
      )}個`;
    } else {
      return `${yItem.value.title} 可購買 ${xItem.value.title} ${Math.floor(
        yItem.value.price / xItem.value.price
      )}個`;
    }
  }
});
</script>
