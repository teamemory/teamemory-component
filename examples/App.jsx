import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  props: {},
  setup: (props, {}) => {
    return () => {
      return (
        <div>
          <div id="app">
            <h1>Teamemory Components Demo</h1>

            <h2>Buttons</h2>
            <tm-button type="default">Default Button</tm-button>
            <tm-button type="primary">Primary Button</tm-button>
            <tm-button type="success">Success Button</tm-button>
            <tm-button type="warning">Warning Button</tm-button>
            <tm-button type="danger">Danger Button</tm-button>
            <tm-button size="small">Small Button</tm-button>
            <tm-button size="medium">Medium Button</tm-button>
            <tm-button size="large">Large Button</tm-button>
          </div>
        </div>
      );
    };
  },
});
