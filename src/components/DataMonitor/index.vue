<template>
  <div class="right-two-content">
    <div v-for="(item, index) in list" :key="index">
      <img :src="item.img" alt="" />
      <span>{{ item.title }}</span>
      <div class="right-two-content-ball"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataMonitor",
  props: {
    list: {
      type: Array,
      default: () => {
        return [];// 测试
      },
      Description:"testtt"
    }
  }
};
</script>

<style lang="scss" scoped>
.right-two-content {
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-size: 14px;
  padding: 0 20px;
  > div {
    width: 101px;
    height: 97px;
  }
  img {
    width: 101px;
    // height: vw(77);
  }
  .right-two-content-ball {
    width: 13px;
    height: 13px;
    background: #54df46;
    border-radius: 50%;
    margin: 0 auto;
    margin-top: 10px;
  }
  .right-two-content-ball::after {
    content: "";
    display: block;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    opacity: 0.7;
    background-color: #54df46;
    animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);
    animation-delay: 200ms;
  }
  @keyframes scale {
    0% {
      transform: scale(1);
    }
    50%,
    75% {
      transform: scale(3);
    }
    78%,
    100% {
      opacity: 0;
    }
  }
}
</style>
