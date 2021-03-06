import MyButton from './index.vue';

export default {
  title: 'Button',
  component: MyButton,
  argTypes: {
    label: { description: "描述111" },
    backgroundColor: { control: 'color', description: "描述" },
    color: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" />'
});

export const button = Template.bind({});
button.args = {
  label: 'Button111'
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
