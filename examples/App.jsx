import { defineComponent, ref } from "vue";
import TmButton from '../packages/components/button';

export default defineComponent({
  props: {},
  setup: (props, {}) => {
    const count = ref(0);
    
    const increment = () => {
      count.value++;
    };

    return () => {
      return (
        <div>
          <h1>Teamemory Components Example</h1>
          <p>Count: {count.value}</p>
          <TmButton onClick={increment}>Increment</TmButton>
          <TmButton type="primary">Primary Button</TmButton>
        </div>
      );
    };
  },
});