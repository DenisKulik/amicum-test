<script>
export default {
  name: "IconWrapper",
  props: {
    color: String,
    width: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <span
    role="img"
    aria-hidden="true"
    :style="{
      color: color,
      width: width,
      height: height,
      display: 'inline-flex',
      fontSize: 'inherit',
    }"
  >
    <slot></slot>
  </span>
</template>
