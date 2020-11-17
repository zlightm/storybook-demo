<template>
  <div class="ecahrts-block"></div>
</template>

<script>
import echart from "echarts";
import { debounce } from "lodash";

export default {
  name: "EchartsBlock",
  props: {
    /** 图表的配置项和数据 */
    options: {
      type: Object,
      default: () => ({}),
    },
    /** 是否不跟之前设置的 option 进行合并，默认为 false，即合并。 */
    notMerge: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      chartsNode: null,
    };
  },
  watch: {
    options: {
      deep: true,
      handler: function() {
        this.setOption();
      },
    },
  },
  mounted() {
    this.chartsNode = echart.init(this.$el);

    this.options && this.setOption();

    this.chartsNode.on("click", params => {
      this.$emit("onClick", params);
    });

    window.addEventListener("resize", this.resize);

    this.$once("hook:beforeDestroy", () => {
      this.chartsNode.off("click");
      this.chartsNode.dispose();
      this.chartsNode = null;

      window.removeEventListener("resize", this.resize);
    });
  },
  methods: {
    /** 设置配置项 */
    setOption() {
      this.chartsNode.setOption(this.options, this.notMerge);
    },
    /** 重置窗口大小 */
    resize: debounce(function() {
      console.log(123);
      this.chartsNode && this.chartsNode.resize();
      this.$emit("onResize");
    }, 400),
  },
};
</script>

<style lang="scss" scoped>
.ecahrts-block {
  width: 100%;
  height: 100%;
}
</style>
