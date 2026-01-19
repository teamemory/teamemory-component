import { defineComponent, computed } from 'vue';
import { css } from '@emotion/css';

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
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    loading: Boolean,
    disabled: Boolean,
    icon: String,
    nativeType: {
      type: String,
      default: 'button'
    },
    autofocus: Boolean
  },
  
  emits: ['click'],
  
  setup(props, { slots, emit }) {
    const handleClick = (evt) => {
      if (props.disabled || props.loading) return;
      emit('click', evt);
    };

    const buttonClasses = computed(() => 
      css`
        display: inline-flex;
        justify-content: center;
        align-items: center;
        line-height: 1;
        height: 32px;
        white-space: nowrap;
        cursor: pointer;
        color: #606266;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: 0.1s;
        font-weight: 500;
        padding: 8px 15px;
        font-size: 14px;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        
        &:hover {
          color: #409eff;
          border-color: #c6e2ff;
          background-color: #ecf5ff;
        }
        
        &:active {
          color: #3a8ee6;
          border-color: #3a8ee6;
        }
        
        &.is-disabled {
          color: #c0c4cc;
          cursor: not-allowed;
          background-image: none;
          border-color: #ebeef5;
          background-color: #f5f7fa;
        }
        
        &.is-loading {
          position: relative;
          pointer-events: none;
        }
        
        &.is-round {
          border-radius: 20px;
          padding: 8px 15px;
        }
        
        &.is-circle {
          border-radius: 50%;
          padding: 8px;
        }
        
        &--primary {
          color: #fff;
          background-color: #409eff;
          border-color: #409eff;
          
          &:hover,
          &:focus {
            background: #66b1ff;
            border-color: #66b1ff;
            color: #fff;
          }
          
          &:active {
            background: #3a8ee6;
            border-color: #3a8ee6;
            color: #fff;
          }
          
          &.is-plain {
            color: #409eff;
            background: #ecf5ff;
            border-color: #b3d8ff;
            
            &:hover,
            &:focus {
              background: #409eff;
              border-color: #409eff;
              color: #fff;
            }
          }
        }
        
        &--success {
          color: #fff;
          background-color: #67c23a;
          border-color: #67c23a;
          
          &:hover,
          &:focus {
            background: #85ce61;
            border-color: #85ce61;
            color: #fff;
          }
          
          &:active {
            background: #5daf34;
            border-color: #5daf34;
            color: #fff;
          }
          
          &.is-plain {
            color: #67c23a;
            background: #f0f9eb;
            border-color: #c2e7b0;
            
            &:hover,
            &:focus {
              background: #67c23a;
              border-color: #67c23a;
              color: #fff;
            }
          }
        }
        
        &--large {
          padding: 12px 20px;
          font-size: 14px;
          border-radius: 4px;
          height: 40px;
        }
        
        &--small {
          padding: 5px 8px;
          font-size: 12px;
          border-radius: 3px;
          height: 24px;
        }
      `
    );

    return () => (
      <button
        type={props.nativeType}
        class={`${buttonClasses.value} ${props.type ? `tm-button--${props.type}` : ''} ${props.size ? `tm-button--${props.size}` : ''} ${props.plain ? 'is-plain' : ''} ${props.round ? 'is-round' : ''} ${props.circle ? 'is-circle' : ''} ${props.loading ? 'is-loading' : ''} ${props.disabled ? 'is-disabled' : ''}`}
        onClick={handleClick}
        disabled={props.disabled || props.loading}
        autofocus={props.autofocus}
      >
        {props.loading && (
          <i class="el-icon-loading tm-button__loading"></i>
        )}
        {slots.default?.()}
      </button>
    );
  }
});