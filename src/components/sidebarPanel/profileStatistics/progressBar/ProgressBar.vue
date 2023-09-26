<script>
export default {
  name: "ProgressBar",
  props: {
    currentValue: {
      type: Number,
      required: true,
    },
    minValue: {
      type: Number,
      required: true,
      default: 0,
    },
    maxValue: {
      type: Number,
      required: true,
      default: 100,
    },
  },
  computed: {
    percent() {
      return (
        ((this.currentValue - this.minValue) /
          (this.maxValue - this.minValue)) *
        100
      );
    },
    color() {
      return this.percent > 15 ? "color-green-100" : "color-orange-100";
    },
  },
};
</script>

<template>
  <div class="progress-circle">
    <slot></slot>
    <svg
      width="120"
      height="120"
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
