import { defineComponent, computed } from 'vue';
import { css } from '@emotion/css';

export interface CardProps {
  header?: string;
  bodyStyle?: Record<string, any>;
  shadow?: 'always' | 'hover' | 'never';
  children?: any;
}

export default defineComponent({
  name: 'TmCard',
  
  props: {
    header: String,
    bodyStyle: Object,
    shadow: {
      type: String,
      default: 'always'
    }
  },
  
  setup(props, { slots }) {
    const cardClasses = computed(() => 
      css`
        border-radius: 4px;
        border: 1px solid #ebeef5;
        background-color: #fff;
        overflow: hidden;
        color: #303133;
        transition: 0.3s;
        
        ${props.shadow === 'hover' ? 
          `\:hover {
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
          }` : 
          props.shadow === 'always' ? 
          `box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);` : 
          ''}
      `
    );

    const headerClasses = css`
      padding: 18px 20px;
      border-bottom: 1px solid #ebeef5;
      box-sizing: border-box;
    `;

    const bodyClasses = css`
      padding: 20px;
    `;

    return () => (
      <div class={cardClasses.value}>
        {props.header && (
          <div class={headerClasses}>{props.header}</div>
        )}
        {slots.header && (
          <div class={headerClasses}>{slots.header()}</div>
        )}
        <div class={bodyClasses} style={props.bodyStyle}>
          {slots.default?.()}
        </div>
      </div>
    );
  }
});