<script setup lang="ts">

</script>
<template>
    <section>
        <ul class="Pages">
            <li class="Pages__FirstPage">
                <a>
                    {{ '<' }} </a>
            </li>

            <li class="Pages__Page">
                <a>1</a>
            </li>
            <li class="Pages__Page">
                <a>2</a>
            </li>
            <li class="Pages__Page">
                <a>2</a>
            </li>
            <li class="Pages__Page">
                <a>4</a>
            </li>
            <li class="Pages__MorePages">
                <a>...</a>
            </li>
            <li class="Pages__Page">
                <a>10</a>
            </li>

            <li class="Pages__LastPage">
                <a>
                    {{ '>' }}
                </a>
            </li>

        </ul>


    </section>

</template>


<style scoped>
.Pages {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
    gap: 0.5rem;
}

.Pages a {
    display: block;
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: white;
    border-radius: 0.5rem;
    max-width: 3rem;
    cursor: pointer;
}

.Pages li.Pages__FirstPage a,
.Pages li.Pages__LastPage a {
    border: 1px solid var(--success);

}

.Pages a:not(.Pages__MorePages):not(.Pages__LastPage):hover {
    cursor: pointer;
    background-color: var(--success);

}

/* RESPONSIVE   */
@media (max-width: 500px) {
    .Pages {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
}

@media (max-width: 400px) {
    .Pages {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>