import { css } from '@emotion/css';
import { defineComponent } from 'vue';

const TmCard = defineComponent({
  name: 'TmCard',
  props: {
    header: {
      type: String,
      default: ''
    },
    shadow: {
      type: String,
      default: 'always' // always, hover, never
    }
  },
  setup(props, { slots }) {
    const cardClasses = () => {
      return css`
        border-radius: 4px;
        border: 1px solid #ebeef5;
        background: #fff;
        overflow: hidden;
        box-shadow: ${
          props.shadow === 'always' || props.shadow === 'hover' 
            ? '0 2px 12px 0 rgba(0, 0, 0, 0.1)' 
            : 'none'
        };

        &:hover {
          box-shadow: ${
            props.shadow === 'hover' 
              ? '0 2px 12px 0 rgba(0, 0, 0, 0.3)' 
              : props.shadow === 'always' 
                ? '0 2px 12px 0 rgba(0, 0, 0, 0.1)' 
                : 'none'
          };
        }

        transition: box-shadow 0.3s;
      `;
    };

    const headerClasses = () => {
      return css`
        padding: 18px 20px;
        border-bottom: 1px solid #ebeef5;
        box-sizing: border-box;
        font-weight: 600;
        font-size: 16px;
        color: #303133;
      `;
    };

    const bodyClasses = () => {
      return css`
        padding: 20px;
        color: #606266;
      `;
    };

    return () => (
      <div class={cardClasses()}>
        {props.header && (
          <div class={headerClasses()}>
            {props.header}
          </div>
        )}
        <div class={bodyClasses()}>
          {slots.default && slots.default()}
        </div>
      </div>
    );
  }
});

export { TmCard };