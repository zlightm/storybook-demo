import echartBlock from "../index.vue";
import createOption from "./ecahrtOption";

const data = [
  {
    name: "1",
    data: [
      ["2020-10-20 01:00:00", 10],
      ["2020-10-20 13:00:00", 20],
    ]
  },
  {
    name: "2",
    data: [
      ["2020-10-20 01:00:00", 20],
      ["2020-10-20 13:00:00", 30],
    ]
  },
]
const baseLineOptions = createOption(data)
export default {
  title: 'Echarts/Lines',
  components:  echartBlock ,
  argTypes: {
    options: { description:"示例参数" }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { echartBlock },
  template: `<div style="width: 100%;height: 500px;background: #1c1d30;padding:15px 15px;">
    <echartBlock v-bind="$props" /></div>`
});
export const baseLine = Template.bind({});
baseLine.storyName = '基础线';
baseLine.args = {
  options: baseLineOptions,
};