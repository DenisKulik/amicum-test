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
@import "App.styles.scss";
</style>
