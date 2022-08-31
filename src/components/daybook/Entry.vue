<script setup>

</script>

<template>
    <div @click="$router.push({ name: 'entry', params: { id: 10 } })" class="mb-3 pointer p-2 entry">
        <!-- título -->
        <div class="entry-title">
            <div class="">
                <span class="text-success fs-5 fw-bold">15</span>
                <span class="mx-1 fs-5">jueves</span>
            </div>
            <span class="mx-2 fw-light">Julio, 2021</span>
        </div>
        <!-- contenido -->
        <div class="entry-content">
            <span class="text-content">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab voluptates libero praesentium itaque
                consequuntur est accusamus magni excepturi aliquid asperiores!
            </span>
            <img src="https://pbs.twimg.com/media/FbZAtv0akAEqDsp?format=jpg&name=large" alt="entrada">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.entry {
    transition: background 0.3s ease, border 0.3s ease;
    border-bottom: 2px solid #fff;

    &:hover {
        background: #222;
        border-bottom: 2px solid #7b6ef0;
    }

    .entry-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .entry-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 10px;

        img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 10px;
        }

        .text-content {
            margin-top: 10px;
            font-size: 0.8rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }
    }
}
</style>