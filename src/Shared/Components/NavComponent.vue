<script setup lang="ts">
import router from '@/Core/Router';
import { ref } from 'vue';

const isMenuActive = ref(false);
const toggleMenu = () => {
    isMenuActive.value = !isMenuActive.value;
}

const toHome = () => {
    router.push('/');
}

</script>


<template>
    <header>
        <nav>
            <div class="NavSmall">
                <img src="@/assets/chicks-logo-large.svg" alt="Logo" @click="toHome" />
                <div class="NavSmall__Togle" @click="toggleMenu">
                    <span class="NavSmall__Togle--Bar"></span>
                    <span class="NavSmall__Togle--Bar"></span>
                    <span class="NavSmall__Togle--Bar"></span>
                </div>
            </div>

            <ul>
                <li>
                    <img src="@/assets/chicks-logo-large.svg" alt="Logo" @click="toHome" />
                </li>
                <li>
                    <router-link to="/water-jugs" active-class="Active">Water Jugs</router-link>
                </li>
                <li>
                    <router-link to="/currency" active-class="Active">Currency</router-link>
                </li>
                <li>
                    <router-link to="/about" active-class="Active">Items</router-link>
                </li>
                <li>
                    <router-link to="/contact" active-class="Active">Acounts</router-link>
                </li>
                <li>
                    <router-link to="/contact" active-class="Active">Services</router-link>
                </li>
                <li>
                    <router-link to="/contact" active-class="Active">SWAP</router-link>
                </li>
                <li>
                    <router-link to="/contact" active-class="Active">SELL</router-link>
                </li>
            </ul>
            <ul>
                <li>
                    <router-link to="/contact" active-class="Active">USD</router-link>
                </li>
                <li>
                    <router-link to="/contact" active-class="Active">🛒 Cart (5)</router-link>
                </li>
                <li>
                    <router-link to="/contact" active-class="Active">SING IN</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>


<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: var(--primary-rgb-50);
    position: relative;
}

nav ul {
    display: flex;
    align-items: center;
    gap: 3.5rem;
    margin: 0;
    padding: 0;
}

nav ul li {
    list-style: none;
}

nav ul li a {
    color: var(--light);
    text-decoration: none;
    transition: color 0.3s;
    font-weight: bolder;
}

nav ul li a:hover {
    color: var(--info);
}

nav ul li a.Active {
    color: var(--info);
}

nav ul li a.Active::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--info);
}

nav ul:first-child li:first-child {
    border-right: 2px solid var(--light);
    padding-right: 1rem;
}

@media (max-width: 1080px) {
    nav {
        flex-direction: column;
        padding: 1rem;
    }

    nav ul {
        display: none;
        flex-direction: column;
        width: 100%;
        text-align: center;
        background-color: var(--primary-rgb-50);
        padding: 1rem 0;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        z-index: 10;
    }

    nav ul li {
        margin: 0.5rem 0;
    }

    .NavSmall {
        display: flex !important;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;


    }


    .NavSmall__Togle .NavSmall__Togle--Bar {
        width: 25px;
        height: 3px;
        background-color: var(--light);
        margin: 5px 0;
        transition: 0.4s;
        display: block;
    }

    nav.Active ul {
        display: flex;
    }
}

.NavSmall {
    display: none;
    cursor: pointer;
}
</style>
