<script>
import IconWrapper from "@/assets/icons/IconWrapper.vue";

export default {
  name: "InstructIcon",
  components: {
    IconWrapper,
  },
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
  <IconWrapper :color="color" :width="width" :height="height">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g data-name="18-paper" id="_18-paper">
        <path
          class="cls-1"
          d="M27,5V3a2,2,0,0,0-2-2H7A2,2,0,0,0,5,3V29a2,2,0,0,0,2,2H25a2,2,0,0,0,2-2V19"
          stroke="currentColor"
        />
        <line
          class="cls-1"
          x1="14"
          x2="18"
          y1="27"
          y2="27"
          stroke="currentColor"
        />
        <polygon
          class="cls-1"
          points="22.75 19.25 19 20 19.75 16.25 28 8 31 11 22.75 19.25"
          fill="currentColor"
        />
        <line
          class="cls-1"
          x1="16"
          x2="9"
          y1="20"
          y2="20"
          stroke="currentColor"
        />
        <line
          class="cls-1"
          x1="9"
          x2="17"
          y1="16"
          y2="16"
          stroke="currentColor"
        />
        <line
          class="cls-1"
          x1="9"
          x2="19"
          y1="12"
          y2="12"
          stroke="currentColor"
        />
      </g>
    </svg>
  </IconWrapper>
</template>
