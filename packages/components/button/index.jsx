import { css } from '@emotion/css';
import { defineComponent, computed } from 'vue';

const TmButton = defineComponent({
  name: 'TmButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'medium'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots }) {
    const buttonClasses = computed(() => {
      return css`
        display: inline-block;
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
        opacity: ${props.disabled ? 0.6 : 1};
        font-size: 14px;
        transition: all 0.3s;

        ${props.type === 'primary' ? `
          background-color: #409eff;
          color: white;
          &:hover {
            background-color: #66b1ff;
          }
        ` : props.type === 'success' ? `
          background-color: #67c23a;
          color: white;
          &:hover {
            background-color: #85ce66;
          }
        ` : props.type === 'warning' ? `
          background-color: #e6a23c;
          color: white;
          &:hover {
            background-color: #ebb563;
          }
        ` : props.type === 'danger' ? `
          background-color: #f56c6c;
          color: white;
          &:hover {
            background-color: #f78989;
          }
        ` : `
          background-color: #fff;
          border: 1px solid #dcdfe6;
          color: #606266;
          &:hover {
            background-color: #ecf5ff;
            border-color: #409eff;
            color: #409eff;
          }
        `}

        ${props.size === 'small' ? `
          padding: 6px 12px;
          font-size: 12px;
        ` : props.size === 'large' ? `
          padding: 10px 20px;
          font-size: 16px;
        ` : ''}
      `;
    });

    return () => (
      <button class={buttonClasses.value} disabled={props.disabled}>
        {slots.default && slots.default()}
      </button>
    );
  }
});

export { TmButton };