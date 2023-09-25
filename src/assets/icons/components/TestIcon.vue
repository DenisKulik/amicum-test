<template>
  <IconWrapper :color="color" :width="width" :height="height">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <g data-name="19_Test" id="_19_Test">
        <path
          d="M53,62H7a1,1,0,0,1-1-1V3A1,1,0,0,1,7,2H53a1,1,0,0,1,1,1V61A1,1,0,0,1,53,62Z"
          stroke="currentColor"
        />
        <path
          d="M17,35H11a1,1,0,0,1-1-1V28a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v6A1,1,0,0,1,17,35Z"
          stroke="currentColor"
        />
        <path
          d="M17,45H11a1,1,0,0,1-1-1V38a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v6A1,1,0,0,1,17,45Z"
          stroke="currentColor"
        />
        <path
          d="M17,55H11a1,1,0,0,1-1-1V48a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v6A1,1,0,0,1,17,55Z"
          stroke="currentColor"
        />
        <rect height="2" fill="currentColor" width="15" x="21" y="30" />
        <rect height="2" fill="currentColor" width="10" x="21" y="40" />
        <rect height="2" fill="currentColor" width="14" x="21" y="50" />
        <rect
          height="2"
          fill="currentColor"
          transform="translate(-15.32 20.015) rotate(-45)"
          width="9.899"
          x="11.55"
          y="27.5"
        />
        <rect
          height="2"
          fill="currentColor"
          transform="translate(-22.391 22.944) rotate(-45)"
          width="9.899"
          x="11.55"
          y="37.5"
        />
        <rect
          height="2"
          fill="currentColor"
          transform="translate(-29.462 25.873) rotate(-45)"
          width="9.899"
          x="11.55"
          y="47.5"
        />
        <rect height="2" fill="currentColor" width="6" x="14" y="11" />
        <rect height="7" fill="currentColor" width="2" x="16" y="12" />
        <rect height="2" fill="currentColor" width="6" x="36" y="11" />
        <rect height="7" fill="currentColor" width="2" x="38" y="12" />
        <rect height="6" fill="currentColor" width="2" x="22" y="12" />
        <rect height="2" fill="currentColor" width="5" x="22" y="11" />
        <rect height="2" fill="currentColor" width="5" x="22" y="17" />
        <rect height="2" fill="currentColor" width="5" x="22" y="14" />
        <path
          d="M33,19H29V17h3V16H30a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1h4v2H31v1h2a1,1,0,0,1,1,1v3A1,1,0,0,1,33,19Z"
          fill="currentColor"
        />
        <rect
          height="6.059"
          fill="currentColor"
          transform="translate(-8.472 40.927) rotate(-45)"
          width="23.228"
          x="33.553"
          y="27.66"
        />
        <polygon
          points="34.813 42.472 33.384 41.044 34.813 36.759 39.097 41.044 34.813 42.472"
          fill="currentColor"
        />
        <polygon
          points="33.384 41.044 32.398 43.459 34.813 42.472 33.384 41.044"
          fill="currentColor"
        />
      </g></svg
  ></IconWrapper>
</template>

<script>
import IconWrapper from "@/assets/icons/IconWrapper.vue";

export default {
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
