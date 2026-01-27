import { defineComponent, reactive, ref } from "vue";
import { TmButton } from "../src";

export default defineComponent({
  props: {},
  setup: (props, {}) => {
    return () => {
      return (
        <div>
          测试的12121 <TmButton size={'middle'}>测试的</TmButton>
        </div>
      );
    };
  },
});
