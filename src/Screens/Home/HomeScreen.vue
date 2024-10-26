<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import HomeHead from './HomeHead/HomeHeadComponent.vue'
import HomeList from './HomeList/HomeListComponent.vue'
import products from '@/assets/json/products.json'
import { Product } from '@/Core/Models/Product/Product';

const state = reactive({
    products: products
});

const _products = ref<Product[]>([]);

onMounted(async () => {
    _products.value = state.products.map((product) => {
        return {
            ...new Product(),
            ...product,
        } as Product
    });

});


</script>

<template>
    <section class="Screen">
        <HomeHead />
        <HomeList :products="_products" />


    </section>
</template>

<style scoped></style>