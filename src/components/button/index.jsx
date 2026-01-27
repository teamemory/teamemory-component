import { css } from '@emotion/css';
import { defineComponent, computed } from 'vue';

const TmButton = defineComponent({
  name: 'TmButton',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: (val) => ['default', 'primary', 'success', 'warning', 'danger'].includes(val)
    },
    size: {
      type: String,
      default: 'medium',
      validator: (val) => ['mini', 'small', 'medium', 'large'].includes(val)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots, emit }) {
    const buttonClass = computed(() => {
      return css`
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        padding: 8px 16px;
        cursor: pointer;
        font-size: 14px;
        transition: all 0.3s ease;
        
        ${props.size === 'mini' ? 'padding: 4px 8px; font-size: 12px;' : ''}
        ${props.size === 'small' ? 'padding: 6px 12px; font-size: 13px;' : ''}
        ${props.size === 'large' ? 'padding: 10px 20px; font-size: 15px;' : ''}
        
        ${props.type === 'primary' 
          ? 'background-color: #409eff; color: white; border-color: #409eff;' 
          : props.type === 'success'
            ? 'background-color: #67c23a; color: white; border-color: #67c23a;'
            : props.type === 'warning'
              ? 'background-color: #e6a23c; color: white; border-color: #e6a23c;'
              : props.type === 'danger'
                ? 'background-color: #f56c6c; color: white; border-color: #f56c6c;'
                : 'background-color: #fff; color: #606266;'}
        
        ${props.disabled 
          ? 'cursor: not-allowed; opacity: 0.6;' 
          : 'hover:opacity: 0.9;'}
        
        ${props.loading && 'pointer-events: none;'}
      `;
    });

    const handleClick = (event) => {
      if (!props.disabled && !props.loading) {
        emit('click', event);
      }
    };

    return () => (
      <button 
        class={buttonClass.value} 
        onClick={handleClick}
        disabled={props.disabled || props.loading}
      >
        {props.loading && <span class={css`margin-right: 5px;`}>↻</span>}
        {slots.default?.()}
      </button>
    );
  }
});

export default TmButton;