import echartBlock from "../index.vue";

import demoOption1 from "./demo1"
import demoOption2 from "./demo2"

export default {
  title: 'Echarts/Bars',
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
 

const TDData = [{
  name: "test1",
  complete: 20,
  unfinished: 1
},{
  name: "test2",
  complete: 10,
  unfinished: 4
},{
  name: "test3",
  complete: 13,
  unfinished: 9
},{
  name: "test4",
  complete: 0,
  unfinished: 0
}]
const TDOptions = demoOption1(TDData)
 export const TDBar = Template.bind({});
 TDBar.storyName = '三维视觉柱状图';
 TDBar.args = {
   options: TDOptions,
 };


const ArrowData = [{
  name: "test1",
  value: 80,
  color: "#C283EB"
},{
  name: "test2",
  value: 47,
  color: "#E1ACE5"
},{
  name: "test3",
  value: 60,
  color: "#F9F2A7"
}]
const ArrowOptions = demoOption2(ArrowData)
export const ArrowBar = Template.bind({});
ArrowBar.storyName = '箭头柱状图';
ArrowBar.args = {
  options: ArrowOptions,
};