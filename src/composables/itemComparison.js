import { ref } from 'vue';

const xItem = ref([]);
const yItem = ref([]);
const isXItem = ref(true);

export const useItemComparison = () => ({
  xItem,
  yItem,
  isXItem,
});
