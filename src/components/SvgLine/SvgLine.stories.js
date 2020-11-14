import svgLine from './index.vue'
 
export default {
  title: 'SvgLine',
  component: svgLine,
  argTypes: {
    color: { control: 'color',description:"颜色" },
    size: { control: '' },
  },
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { svgLine },
    template: '<div style="width: 100%;height: 500px;background: #1c1d30;padding:15px 15px;"><svgLine></svgLine></div>',
  });
  
export const SvgLine = Template.bind({});

