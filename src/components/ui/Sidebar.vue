<script setup>
import { defineAsyncComponent } from 'vue';

const Entry = defineAsyncComponent(() =>
    import('../daybook/Entry.vue')
);
</script>

<template>
    <div class="container__sidebar">
        <div class="px-2 pt-2">
            <p>Buscar en el Diario :</p>
            <input type="text" class="form-control" placeholder="Buscar en el diario">
        </div>
        <div class="entry-scrollarea">
            <!-- <h2 v-for="item in 50" :key="item">Entrada</h2> -->
            <Entry v-for="item in 50" :key="item" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container__sidebar {
    background: #333;
    color: #fff;
    height: calc(100vh - 60px);
    border: 2px solid #fff;

    input {
        background: #222;
        color: #fff;
        border: 2px solid #fff;
        border-radius: 0px;
    }

    p {
        margin: 0;
        margin-bottom: 5px;
        font-weight: 600;
    }

    .entry-scrollarea {
        padding-left: 10px;
        overflow-y: scroll;
        margin: 10px 0;
        height: calc(100vh - 150px);
    }
}
</style>