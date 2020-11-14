import DataMonitor from './index.vue'
import datas from './datas'
 
export default {
  title: 'DataMonitor',
  component: DataMonitor,
  argTypes: {
    list: {description:"列表数据，需为数组"},
  },
}

export const DataMonitors = () => ({ //侧边栏
  components: { DataMonitor },
  render (h) {
    return  <div style="width: 100%;height: 500px;background: #1c1d30;padding:15px 15px;">
              <DataMonitor list={datas.dataList}></DataMonitor>
            </div>
  }
})