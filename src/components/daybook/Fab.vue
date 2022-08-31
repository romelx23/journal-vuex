<script setup>
const props = defineProps({
    backgroundColor: {
        type: String,
        default: 'bg-primary'
    },
    icon: {
        type: String,
        default: 'fa fa-plus'
    }
})
</script>

<template>
    <button :class="['btn', backgroundColor ? backgroundColor : 'btn-primary']">
        <i :class="['fa', icon ? icon : 'fa-plus']"></i>
    </button>
</template>

<style lang="scss" scoped>
button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    font-size: 20px;
    z-index: 10;
    border-radius: 50%;
    border: none;
    outline: none;
    color: #fff;
    padding: 15px 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease;

    &:hover {
        color: #fff;
    }

    &:active {
        color: #fff;
    }
}
</style>