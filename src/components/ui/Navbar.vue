<script setup>

</script>

<template>
    <nav class="navbar bg-primary">
        <ul class="row">
            <li class="col">
                <router-link to="/" title="diario app">
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg> -->
                    <img class="logo" src="https://cdn-icons-png.flaticon.com/512/3534/3534033.png" alt="home">
                </router-link>
            </li>
            <li class="col">
                <router-link to="/about">About</router-link>
            </li>
            <li class="col">
                <router-link :to="{ name: 'no-entry' }">Home</router-link>
            </li>
        </ul>
        <div class="d-flex">
            <button class="btn btn-info px-3" title="Salir">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                    stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>
            </button>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.logo {
    width: 50px;
    height: 50px;
    filter: brightness(1.5);
}

.navbar {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
}

.navbar ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: 0;
}

.navbar ul li {
    margin: 0 10px;
}

.navbar ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    transition: color .3s ease;
}

.navbar ul li a:hover {
    color: #ccc;
    text-decoration: none;
}

.navbar ul li a svg {
    width: 30px;
    color: #fff;
    text-decoration: none;
}

.navbar ul li a svg path {
    stroke-width: 2.5;
}

.navbar .btn {
    font-weight: 600;
    display: flex;
    gap: 10px
}

.navbar .btn p {
    margin: 0;
}

.navbar .btn svg {
    width: 30px;
}
</style>