<script setup>
import DayBookLayout from './components/layouts/DayBookLayout.vue';
</script>

<template>
  <div class="container-app">
    <router-view></router-view>
    <!-- <button class="btn btn-primary">
      HOME
    </button>
    <button class="btn btn-secondary">
      HOME
    </button>
    <button class="btn btn-success">
      HOME
    </button> -->
  </div>
</template>

<style scoped>
.container-app {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #333;
  color: #fff;
}

button {
  color: #fff;
}

button:hover {
  color: #fff;
}
</style>
