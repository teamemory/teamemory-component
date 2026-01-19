import { defineComponent } from 'vue';
import { css } from '@emotion/css';

export default defineComponent({
  name: 'TmCard',
  
  props: {
    header: {
      type: String,
      default: ''
    },
    bodyStyle: {
      type: Object,
      default: () => ({})
    }
  },
  
  setup(props, { slots }) {
    const cardClasses = css`
      border: 1px solid #ebeef5;
      border-radius: 4px;
      background-color: #fff;
      overflow: hidden;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      
      .tm-card__header {
        padding: 18px 20px;
        border-bottom: 1px solid #ebeef5;
        box-sizing: border-box;
      }
      
      .tm-card__body {
        padding: 20px;
      }
    `;

    return () => (
      <div class={cardClasses}>
        {props.header && (
          <div class="tm-card__header">
            {props.header}
          </div>
        )}
        <div class="tm-card__body" style={props.bodyStyle}>
          {slots.default?.()}
        </div>
      </div>
    );
  }
});