<script setup>
import { defineAsyncComponent } from 'vue'
// import Sidebar from '../ui/Sidebar.vue';
const Navbar = defineAsyncComponent(() =>
    import('../ui/Navbar.vue')
);
const Sidebar = defineAsyncComponent(() =>
    import('../ui/Sidebar.vue')
);

</script>

<template>
    <Navbar />
    <div class="d-flex">
        <div class="col-2">
            <Sidebar />
        </div>
        <div class="col-10">
            <router-view />
        </div>
    </div>
</template>

<style scoped>
</style>