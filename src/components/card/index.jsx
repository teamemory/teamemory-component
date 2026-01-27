import { css } from '@emotion/css';
import { defineComponent, computed } from 'vue';

const TmCard = defineComponent({
  name: 'TmCard',
  props: {
    header: {
      type: String,
      default: ''
    },
    shadow: {
      type: String,
      default: 'always', // 'always', 'hover', 'never'
      validator: (val) => ['always', 'hover', 'never'].includes(val)
    },
    bodyStyle: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { slots }) {
    const cardClass = computed(() => {
      return css`
        border-radius: 4px;
        border: 1px solid #ebeef5;
        background-color: #fff;
        overflow: hidden;
        box-shadow: ${props.shadow !== 'never' ? '0 2px 12px 0 rgba(0, 0, 0, 0.1)' : 'none'};
        transition: box-shadow 0.3s ease;
        
        ${props.shadow === 'hover' ? `
          &:hover {
            box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.15);
          }
        ` : ''}
      `;
    });

    const headerClass = css`
      padding: 18px 20px;
      border-bottom: 1px solid #ebeef5;
      box-sizing: border-box;
      font-size: 16px;
      font-weight: bold;
      color: #303133;
      background-color: #fff;
    `;

    const bodyClass = css`
      padding: ${props.header ? '20px' : '0'};
      font-size: 14px;
      color: #606266;
      background-color: #fafafa;
    `;

    return () => (
      <div class={cardClass.value}>
        {(props.header || slots.header) && (
          <div class={headerClass}>
            {slots.header ? slots.header() : props.header}
          </div>
        )}
        <div 
          class={bodyClass} 
          style={props.bodyStyle}
        >
          {slots.default?.()}
        </div>
      </div>
    );
  }
});

export default TmCard;