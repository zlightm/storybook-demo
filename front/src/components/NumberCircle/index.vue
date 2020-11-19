<template>
  <div class="container">
    <div v-for="(item, index) in list" :key="index">
      <!-- <div class="setBall" :style="{background: setStyle.bgImage}"></div> -->
      <div class="setBall"></div>
      <div class="setBall_val">{{ item.value }}</div>
      <div class="setBall_title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NumberCircle",
  props: {
    list: Array,
    setStyle: Object,
  },
  watch: {
    list: {
      handler() {},
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style lang="scss" scope>
@keyframes rotate {
  0% {
    transform: rotateZ(0deg); /*从0度开始*/
  }
  100% {
    transform: rotateZ(360deg); /*360度结束*/
  }
}
.container {
  width: 452px;
  height: 350px;
  text-align: center;
  padding-top: 31px;
  padding-bottom: 38px;
  padding-left: 26px;
  display: grid;
  grid-template-columns: repeat(3, 91px);
  grid-template-rows: repeat(2, 128px);
  grid-row-gap: 24px;
  grid-column-gap: 76px;
  font-size: 16px;
  > div {
    display: inline-grid;
  }
}
.setBall {
  width: 91px;
  height: 91px;
  background: url("./img/ball.png") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  animation: rotate 6s linear infinite;
}
.setBall_title {
  color: #fff;
}
.setBall_val {
  width: 91px;
  height: 91px;
  line-height: 91px;
  text-align: center;
  font-size: 26px;
  position: absolute;
  color: #00e4ff;
  font-weight: 600;
}
</style>
