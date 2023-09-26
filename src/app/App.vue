<script setup>
import SidebarPanel from "@/components/sidebarPanel/SidebarPanel.vue";
</script>

<template>
  <div id="app" class="app-container">
    <SidebarPanel />
    <router-view />
  </div>
</template>

<style>
#app.app-container {
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
}
</style>
