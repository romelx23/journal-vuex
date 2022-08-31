<script setup>
import { defineAsyncComponent } from 'vue';

const Fab = defineAsyncComponent(() => import('../../components/daybook/Fab.vue'))
</script>

<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">15</span>
            <span class="mx-1 fs-3">jueves</span>
            <span class="mx-2 fs-4 fw-light">Julio, 2021</span>
        </div>
        <div class="">
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fas fa-trash-alt"></i>
            </button>
            <button class="btn btn-primary">
                Subir foto
                <i class="fas fa-upload"></i>
            </button>
        </div>
    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-45">
        <input type="text" placeholder="Ingrese el Título de la Tarea">
        <textarea name="" id="" cols="30" rows="10" placeholder="Como estuvo su día? "></textarea>
    </div>
    <Fab :icon="'fa-solid fa-floppy-disk'" />
    <div class="content_image">
        <img src="https://pbs.twimg.com/media/FbZAtv0akAEqDsp?format=jpg&name=large" alt="imagen_de_la_tarea">
    </div>
</template>

<style lang="scss" scoped>
button {
    color: #fff;

    &:hover {
        color: #fff;
    }

    &:active {
        color: #fff;
    }
}

input {
    background: #222;
    padding: 10px;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 0px;
    margin-bottom: 10px;
}

textarea {
    background: #222;
    padding: 10px;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 0px;
    margin-bottom: 10px;
    resize: none;
}

.content_image {
    width: 100%;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 60%;
        height: 100%;
        object-fit: cover;
        box-shadow: 0 5px 10px rgba($color: #000, $alpha: 0.2);
    }
}
</style>