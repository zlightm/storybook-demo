<template>
  <div class="track"
    :style="{
      background: bgcolor
    }"
  >
    <div class="block"></div>
  </div>
</template>

<script>
export default {
  name: 'Slide',
  props: {
    bgcolor: {
      type: String,
      default: '#000'
    }
  }
}
</script>

<style lang="scss">
.track {
  position: relative;
  width: 300px;
  height: 50px;
  &:hover{
    &>.block {
      left: 100%;
    }
  }
  .block {
    position: absolute;
    left: 5px;
    top: 5px;
    width: 40px;
    height: 40px;
    background-color: #fff;
    transition: all 1s linear;
  }
}
</style>
