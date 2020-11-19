// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import datas from './datas.js' //数据js
import ProgressBar from './index.vue'

export default {
  title: 'Progress',
  component: ProgressBar,
  argTypes: {
    datas: { description: "数组" },
    setStyle: { description: "样式" },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ProgressBar },
  template: `<div style="width: 100%;height: 500px;background: #1c1d30;padding:15px 15px;">
              <progress-bar v-bind="$props"></progress-bar>
            </div>`,
  argTypes: {
    datas: { description: "数组" },
    setStyle: { description: "样式" },
  },
});
export const Progress = Template.bind({});
Progress.args = {
  datas: datas.progressData,
  setStyle: datas.style,
};