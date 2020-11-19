import NumberCircle from "./index.vue";
import datas from "./datas";

export default {
  title: "NumberCircle",
  component: NumberCircle,
  argTypes: {
    list: { description: "数组" },
    setStyle: { description: "设置背景图" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NumberCircle },
  template: `<div style="width: 100%;height: 500px;background: #1c1d30;padding:15px 15px;">
              <number-circle v-bind="$props"></number-circle>
            </div>`,
});

export const NumberCircles = Template.bind({});
NumberCircles.args = {
  list: datas.list,
  setStyle: datas.style,
};
