<template>
  <button
    type="button"
    :disabled="disabled"
    :class="classes"
    @click="onClick"
    :style="style"
  >
    {{ label }}
  </button>
</template>

<script>
import "./button.css";

export default {
  name: "my-button",

  props: {
    label: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "medium",
      validator: function(value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
      default: "#4A90E2",
    },
    color: {
      type: String,
      default: "#fff",
    },
  },

  computed: {
    classes() {
      return {
        "storybook-button": true,
        [`storybook-button--${this.size}`]: true,
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
        color: this.color,
      };
    },
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>
