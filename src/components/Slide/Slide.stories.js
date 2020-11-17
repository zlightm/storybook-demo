import Slide from './index.vue'
// import DemoSlide from './DemoSlide.vue'

export default {
  title: 'Slide',
  component: Slide,
  argTypes: {
    bgcolor: { control: 'color' ,description:"背景颜色"},
  },
}


const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Slide },
  template: '<Slide v-bind="$props"></Slide>',
});
export const slide = Template.bind({});
slide.args = {
  bgcolor: '#BD10E0',
};