import Slide from './index.vue'
import DemoSlide from './DemoSlide.vue'

export default {
  title: 'Slide',
  component: Slide
}

export const Jsx = () => ({
  components: { Slide },
  template:'<Slide></Slide>'
  
})

export const Prop使用方式 = () => ({
  components: { DemoSlide },
  template: '<DemoSlide />'
})
