import { css } from '@emotion/css';
import { ElCard, ElRow, ElCol } from 'element-plus';
import { defineComponent } from 'vue';

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
    },
    shadow: {
      type: String,
      default: 'always' // always / hover / never
    }
  },
  setup(props, { slots }) {
    const cardStyle = css`
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      
      .el-card__header {
        background-color: #fafafa;
        border-bottom: 1px solid #eee;
        padding: 16px 20px;
      }
      
      .el-card__body {
        padding: 20px;
      }
    `;

    return () => (
      <ElCard
        class={cardStyle}
        header={props.header}
        bodyStyle={{ ...props.bodyStyle }}
        shadow={props.shadow}
      >
        {slots.default?.()}
      </ElCard>
    );
  }
});