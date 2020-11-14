// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import datas from './datas.js' //数据js
import ProgressBar from './index.vue'

export default {
  title: 'Progress',
  component: ProgressBar
}

export const Progress = () => ({ //侧边栏
  components: { ProgressBar },
  render (h) {
    return <div style="width: 100%;height: 500px;background: #1c1d30;padding:15px 15px;">
             <progress-bar datas={datas.progressData} setStyle={datas.style}></progress-bar>
           </div>
  },
})
