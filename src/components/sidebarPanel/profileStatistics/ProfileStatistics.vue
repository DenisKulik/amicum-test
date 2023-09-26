<script>
import ProgressBar from "@/components/sidebarPanel/profileStatistics/progressBar/ProgressBar.vue";

export default {
  components: {
    ProgressBar,
  },
  data() {
    return {
      currentValue: 25,
      minValue: 0,
      maxValue: 100,
    };
  },
};
</script>

<template>
  <ProgressBar
    :currentValue="currentValue"
    :minValue="minValue"
    :maxValue="maxValue"
  >
    <div class="slot">122</div>
  </ProgressBar>
</template>
