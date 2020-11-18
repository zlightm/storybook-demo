import DataMonitor from './index.vue'
import datas from './datas'

export default {
  title: 'DataMonitor',
  component: DataMonitor,
  argTypes: {
    list: { description: "列表数据，需为数组" },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DataMonitor },
  template: `<div style="width: 100%;height: 500px;background: #1c1d30;padding:15px 15px;">
              <DataMonitor v-bind="$props"></DataMonitor>
            </div>`
});

export const DataMonitors = Template.bind({});
DataMonitors.args = {
  list: datas.dataList
};