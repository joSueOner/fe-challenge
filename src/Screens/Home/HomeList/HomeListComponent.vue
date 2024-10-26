<script setup lang="ts">
// import { ref } from 'vue'
import SelectComponet from '@/Shared/Components/Select/SelectComponent.vue'
import PaginationComponent from '@/Shared/Components/Pagination/PaginationComponent.vue';
import { Product } from '@/Core/Models/Product/Product';


const props = defineProps<{
    products: Product[]
}>()

</script>
<template>
    <section class="HomeList">
        <div class="row">
            <div class="col-12">
                <div class="HomeList__Header">
                    <h4>
                        Showing 5 - from 20
                    </h4>
                    <SelectComponet lable="Sort By" name="sort" id="sort"
                        :options="['Featured', 'Sort 2', 'Sort 3', 'Sort 4']">
                        ⚙
                    </SelectComponet>

                </div>
            </div>
        </div>

        <div class="HomeList__List row">
            <div class="HomeList__Card" v-for="product in props.products" :key="product.id">
                <header class="HomeList__Card--Head">
                    <div class="HomeList__Card--Head-Button">
                        <div>
                            <span></span>
                            <h5>
                                {{ product.status }}
                            </h5>
                        </div>


                        <button>
                            In Stock
                        </button>
                    </div>

                    <input type="number" value="1">
                </header>
                <section class="HomeList__Card--Body">
                    <div class="HomeList__Card--Body-Image">
                        <img src="@/assets/img/dota2.png" width="70" alt="">
                    </div>
                    <div class="HomeList__Card--Body-Name">
                        <h4>
                            Blue Partyhat
                        </h4>
                        <img src="@/assets/img/dota-2-logo.svg" width="35" alt="">



                    </div>
                    <div class="HomeList__Card--Body-Price">
                        <h4>
                            {{ product.price }}$
                        </h4>
                        <h4>
                            {{ product.oldPrice }}$
                        </h4>

                    </div>
                    <div class="HomeList__Card--Body-Description">
                        <h5>
                            {{ product.description }}

                        </h5>
                    </div>
                    <div class="HomeList__Card--Body-Buttons">
                        <button class="HomeList__Card--Body-Buttons_Detail">
                            DETAILS
                        </button>
                        <button class="HomeList__Card--Body-Buttons_Add">
                            ADD
                            <span>
                                🛒
                            </span>
                        </button>

                    </div>


                </section>
                <footer class="HomeList__Card--Footer">
                </footer>
            </div>

        </div>
        <div class="HomeList__Pagination row">
            <div class="col-12">
                <PaginationComponent />

            </div>
        </div>

    </section>
</template>


<style scoped>
.HomeList {
    margin-top: 2rem;
    padding: 4rem 2rem;
    background-color: var(--primary-rgb);
    border: 1px solid;
    border-color: var(--secondary);
    border-radius: 0.3rem;


}

.HomeList__List {
    gap: 1rem;
    margin-top: 1rem;

}

.HomeList__Card {
    --bg: var(--secondary);

    background-color: var(--dark-rgb);
    border-radius: .3rem;
    padding: 1rem 0.5rem;

    display: flex;
    flex-direction: column;

    gap: 1rem;
    grid-column: span 3;
    justify-self: center;

    max-width: 300px;
    min-width: 200px;
}

.HomeList__Card>* {
    padding: 0 1rem;
}

.HomeList__Card--Head {
    display: flex;
    gap: 1rem;
    justify-content: space-between;

}

.HomeList__Card--Head .HomeList__Card--Head-Button>div {
    display: flex;
    gap: .3rem;
    align-items: center;

}

.HomeList__Card--Head .HomeList__Card--Head-Button>button {
    margin-top: .3rem;
    background-color: transparent;
    border: 1px solid;
    border-color: var(--info);
    color: var(--info);
    padding: .3rem .75rem;
    border-radius: .25rem;
}

.HomeList__Card--Head span {
    background-color: var(--info);
    width: 3px;
    height: 3px;
    border-radius: 50%;
}

.HomeList__Card--Head h5 {
    color: #ecf0f1;
    font-weight: 500;
    margin: 0;
}

.HomeList__Card--Head>input {
    background: var(--primary-rgb);
    border: none;
    color: #ecf0f1;
    font-size: 1em;
    width: 4rem;
    height: 2rem;
    text-align: center;
    border-radius: .3rem;
}

.HomeList__Card--Body {
    display: flex;
    gap: .7rem;
    flex-direction: column;
}

.HomeList__Card--Body-Image img {
    object-fit: cover;
    border-radius: .3rem;
}

.HomeList__Card--Body-Name {
    display: flex;
    gap: .5rem;
    align-items: center;
    justify-content: space-between;
}

.HomeList__Card--Body-Name img {
    object-fit: cover;
    border-radius: .3rem;
}

.HomeList__Card--Body-Name h4 {
    color: #ecf0f1;
    font-weight: 500;
    margin: 0;
}

.HomeList__Card--Body-Price {
    display: flex;
    gap: .5rem;
    align-items: center;
}

.HomeList__Card--Body-Price h4 {
    color: #ecf0f1;
    font-weight: 500;
    margin: 0;
}

.HomeList__Card--Body-Price h4:last-child {
    color: #ecf0f1;
    font-weight: 500;
    margin: 0;
    text-decoration: line-through;
    opacity: .7;
}


.HomeList__Card--Body-Description h5 {
    color: #cecece;
    font-weight: 400;
    margin: 0;
}

.HomeList__Card--Body-Buttons {
    display: flex;
    gap: .5rem;
    justify-content: space-between;
}

.HomeList__Card--Body-Buttons>* {
    flex: 1;
    display: flex;
    justify-content: center;
}

.HomeList__Card--Body-Buttons_Detail {
    background-color: var(--primary-rgb);
    color: #ecf0f1;
    padding: .5rem 1rem;
    border: none;
    border-radius: .3rem;
}

.HomeList__Card--Body-Buttons_Add {
    background-color: var(--success);
    color: white;
    padding: .5rem 1rem;
    border: none;
    border-radius: .3rem;
    display: flex;
    gap: .5rem;
    align-items: center;
}

.HomeList__Card--Body-Buttons_Add span {
    background-color: #373f98;
    padding: 3px;
}

.HomeList__Header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}

.HomeList__Header h4 {
    color: #ecf0f1;
    font-weight: 500;
    margin: 0;
}

.HomeList__Header div {
    display: flex;
    gap: .5rem;
}


.HomeList__Pagination {
    padding-top: 3rem;
}

/* Responsive */
@media (min-width: 0) {
    .HomeList__Card {
        grid-column: span 12 !important;
    }

}

@media (min-width: 576px) {
    .HomeList__Card {
        grid-column: span 6 !important;
    }
}

@media (min-width: 768px) {
    .HomeList__Card {
        grid-column: span 4 !important;
    }
}

@media (min-width: 1400px) {
    .HomeList__Card {
        grid-column: span 3 !important;
    }
}
</style>