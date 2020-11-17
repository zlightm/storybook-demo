import echartBlock from "../index.vue";
import { storiesOf } from "@storybook/vue";
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
const options = createOption(data)
export default {
  title: 'Echarts/Lines',
  components:  echartBlock ,
  argTypes: {
    options: { description:"描述" }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { echartBlock },
  template: `<div style="width: 100%;height: 500px;background: #1c1d30;padding:15px 15px;">
    <echartBlock v-bind="$props" /></div>`
  // render(h) {
  //   return (
  //     <div style="width: 100%;height: 500px;background: #1c1d30;padding:15px 15px;">
  //       <echartBlock options={options} />
  //     </div>
  //   )
  // },
});
export const echarts1 = Template.bind({});
echarts1.args = {
  options: options,
};
// storiesOf("Echarts/Lines", module)
//   .add("基础线", () => {
//     return {
//       data() {
//         return {
//           options: {},
//         }
//       },
//       components: { echartBlock },
//       created() {
//         const data = [
//           {
//             name: "1",
//             data: [
//               ["2020-10-20 01:00:00", 10],
//               ["2020-10-20 13:00:00", 20],
//             ]
//           },
//           {
//             name: "2",
//             data: [
//               ["2020-10-20 01:00:00", 20],
//               ["2020-10-20 13:00:00", 30],
//             ]
//           },
//         ]
//         this.options = createOption(data)
//       },
//       render(h) {
//         return (
//           <div style="width: 100%;height: 500px;background: #1c1d30;padding:15px 15px;">
//             <echartBlock options={this.options} />
//           </div>
//         )
//       },
//     }
//   })
