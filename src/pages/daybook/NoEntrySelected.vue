<script setup>
import { defineAsyncComponent } from 'vue';
const Fab = defineAsyncComponent(() =>
    import('../../components/daybook/Fab.vue')
);
</script>

<template>
    <div class="d-flex justify-content-center">
        <h1 class="align-self-center">No hay nada seleccionado</h1>
    </div>
    <Fab />
</template>

<style lang="scss" scoped>
div {
    height: 100%;
}
</style>