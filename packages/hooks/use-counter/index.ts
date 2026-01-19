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
