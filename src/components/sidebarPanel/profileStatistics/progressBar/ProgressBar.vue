<script>
export default {
  name: "ProgressBar",
  props: {
    currentValue: {
      validator: function (value) {
        return (
          value === null ||
          typeof value === "number" ||
          typeof value === "boolean"
        );
      },
      required: true,
    },
    minValue: {
      type: Number,
      default: 0,
    },
    maxValue: {
      type: Number,
      default: 100,
    },
    type: {
      type: String,
    },
  },
  computed: {
    percent() {
      if (this.type !== "tests" && this.type !== "certification") return 100;
      if (this.type === "certification" && this.currentValue > 365) return 100;

      return (
        ((this.currentValue - this.minValue) /
          (this.maxValue - this.minValue)) *
        100
      );
    },
    color() {
      if (this.type === "tests") {
        return "color-green-100";
      }

      if (this.type === "certification") {
        return this.currentValue < 30 ? "color-orange-100" : "color-green-100";
      }

      switch (this.currentValue) {
        case true:
          return "color-green-100";
        case false: {
          return "color-orange-100";
        }
        default: {
          return "color-dark-300";
        }
      }
    },
  },
};
</script>

<template>
  <div class="progress-circle">
    <slot></slot>
    <svg
      width="7.55vw"
      height="7.55vw"
      viewBox="0 0 120 120"
      class="progress-circle-svg"
    >
      <circle
        cx="60"
        cy="60"
        r="54"
        fill="none"
        :stroke="`var(--color-dark-300)`"
        stroke-width="12"
      />
      <circle
        class="progress-circle-line"
        :style="[{ 'stroke-dashoffset': `calc(100 - ${percent})` }]"
        cx="60"
        cy="60"
        r="54"
        fill="none"
        :stroke="`var(--${color})`"
        stroke-width="12"
        pathLength="100"
      />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
@import "./ProgressBar.styles.scss";
</style>
