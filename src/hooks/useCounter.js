import { ref, computed } from 'vue';

export default function useCounter(initialValue = 0) {
  const count = ref(initialValue);
  
  const increment = () => {
    count.value++;
  };
  
  const decrement = () => {
    count.value--;
  };
  
  const reset = () => {
    count.value = initialValue;
  };
  
  const doubleCount = computed(() => {
    return count.value * 2;
  });
  
  return {
    count,
    increment,
    decrement,
    reset,
    doubleCount
  };
}