
import DownloadWrapper from './Download.vue'
// https://storybook.js.org/docs/vue/writing-stories/decorators#context-for-mocking
export const decorators = [(StoryFn, opts) => ({
  render(h) {
    return (<DownloadWrapper opts={opts}><story /></DownloadWrapper>)
  }
})]
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}