import { ref, computed } from 'vue';

export interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  multiply: (factor: number) => void;
  divide: (divisor: number) => void;
  isEven: boolean;
  isOdd: boolean;
}

export const useCounter = (initialValue: number = 0): UseCounterReturn => {
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

  const multiply = (factor: number) => {
    count.value *= factor;
  };

  const divide = (divisor: number) => {
    if (divisor !== 0) {
      count.value /= divisor;
    }
  };

  const isEven = computed(() => count.value % 2 === 0);
  const isOdd = computed(() => count.value % 2 !== 0);

  return {
    count: count.value,
    increment,
    decrement,
    reset,
    multiply,
    divide,
    isEven: isEven.value,
    isOdd: isOdd.value
  };
};