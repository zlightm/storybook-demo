import NumberCircle from './index.vue'
import datas from './datas'

export default {
  title: 'NumberCircle',
  component: NumberCircle
}

export const NumberCircles = () => ({ //侧边栏
  components: { NumberCircle },
  render (h) {
    return <div style="width: 100%;height: 500px;background: #1c1d30;padding:15px 15px;">
             <number-circle list={datas.list} setStyle={datas.style}></number-circle>
           </div>
  },
})