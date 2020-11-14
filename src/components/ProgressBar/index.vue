<template>
  <div :style="{width: setStyle.width}">
    <div class="progressGroup" v-for="(item, index) in datas" :key="index">
      <div class="prg-label" :style="{width: setStyle.labelWidth, color: setStyle.labelColor}">
        <span>{{item.label}}</span>
      </div>
      <div class="prg-container" :style="{width: prgContainer}">
        <div class="container-item" :style="{width: item.value, backgroundImage: setStyle.lineColor}">
          <div class="container-ball" v-show="parseInt(`${item.value}`)" :style="{background:setStyle.barColor,boxShadow:setStyle.barBoxShadow}"></div>
          <div class="lineLabel">{{item.value}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar', // 进度条
  props: {
    datas: Array,
    setStyle: Object
  },
  data () {
    return {
      labelWidth: 0,
      prgContainer: 0
    }
  },
  watch: {
    datas: {
      handler () {

      },
      immediate: true,
      deep: true
    },
    setStyle: {
      handler () {
        this.prgContainer = `calc(100% - ${this.setStyle.labelWidth})`
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>

.progressGroup{
  width: 100%;
  height: 28px;
  display: flex;
  margin-top: 25px;
  .prg-label{
    width: 30%;
    line-height: 28px;
    text-align: right;
    font-size: 18px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #fff;
    &::after{
      content: ":";
    }
  }
  .prg-container{
    width: 70%;
    height: 28px;
    margin-left: 15px;
    text-align: left;
    display: flex;
    align-items: center;
  }
  .container-item{
    width: 0;
    height: 14px;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    background-image: linear-gradient(to right, Transparent, #0cf9f9);
    transition: width 1s linear;
  }
  .container-ball{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #0cf9f9;
    position: absolute;
    right: -2px;
    top: -3px;
    box-shadow: 0 0 8px 2px#0cf9f9;
  }
}
.lineLabel{
  width: 42px;
  position: absolute;
  color:#08fefd;
  font-weight:bold;
  font-size: 16px;
  line-height: 16px;
  right: -50px;
}
</style>
