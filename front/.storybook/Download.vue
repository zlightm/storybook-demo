<template>
  <div>
    <div class="button" @click="downloadComp">11111</div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "DownloadWrapper",
  props: ["opts"],
  methods: {
    downloadComp() {
      console.log(11111,this.opts);
      //   const name = this.opts.parameters.component.name
      //   console.log('this.opts',this.opts)
      //   const aTag = document.createElement('a')
      //   aTag.target = '_blank'
      //   const url = 'http://localhost:3000/'
      //   aTag.href = `${url}download?name=${name}`
      //   aTag.click()
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  background-color: rgb(74, 144, 226);
  color: rgb(255, 255, 255);
  padding: 5px 10px;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  margin-bottom: 10px;
}
</style>
