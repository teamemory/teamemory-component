import { css } from '@emotion/css';
import { ElButton } from 'element-plus';
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'TmButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: String,
      default: ''
    }
  },
  setup(props, { slots }) {
    const buttonStyle = computed(() => {
      return css`
        border-radius: 4px;
        transition: all 0.3s ease;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        
        &:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        }
        
        &:active {
          transform: translateY(0);
        }
        
        &.tm-button-large {
          padding: 12px 20px;
          font-size: 16px;
        }
        
        &.tm-button-small {
          padding: 6px 12px;
          font-size: 12px;
        }
      `;
    });

    return () => (
      <ElButton
        class={`${buttonStyle} ${props.customClass}`}
        type={props.type}
        size={props.size}
        loading={props.loading}
        disabled={props.disabled}
      >
        {slots.default?.()}
      </ElButton>
    );
  }
});