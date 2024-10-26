<script setup lang="ts">
import SelectComponet from '@/Shared/Components/Select/SelectComponent.vue'
</script>
<template>
    <header class="HomeHead">
        <h2 class="HomeHead__Title">
            Condimentum consectetur
        </h2>
        <section class="HomeHead__Filter">
            <SelectComponet lable="Select a Game" name="game" id="game"
                :options="['All', 'Game 2', 'Game 3', 'Game 4']">
                ⚔
            </SelectComponet>

            <div class="SearchInput">
                <span class="">
                    🔍
                </span>
                <div class="SearchInput__Input">
                    <input type="text" name="search" id="search" placeholder="">
                    <label for="search">
                        Search
                    </label>

                </div>

            </div>
            <SelectComponet lable="Price" name="price" id="price" :options="['All', 'Price 2', 'Price 3', 'Price 4']">
                💰
            </SelectComponet>

            <SelectComponet lable="Item Type" name="type" id="type" :options="['All', 'Type 2', 'Type 3', 'Type 4']">
                📦
            </SelectComponet>

        </section>

    </header>
</template>

<style scoped>
.HomeHead {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.HomeHead__Title {
    font-size: 2.4rem;
    color: #fff;
    text-align: start;
    font-weight: 700;
    margin-bottom: 1rem;
}

.HomeHead__Filter {
    display: grid;
    grid-template-columns: 2fr 4fr 1fr 1fr;
    gap: 1rem;


}

/* FloarLabel */
.SearchInput {
    display: flex;
    align-items: center;
    background-color: rgba(76, 96, 133, .2);
    border-radius: 4px;
    min-height: 2.5rem;
    height: 100%;

}

.SearchInput__Input {
    --pad: .75rem;
    position: relative;
    width: 100%;
    height: 100%;

}

.SearchInput__Input input {
    background: transparent;
    border: none;
    color: #ecf0f1;
    font-size: 1em;
    width: 100%;
    height: 100%;

}

.SearchInput__Input label {
    position: absolute;
    left: 0;
    top: var(--pad);
    pointer-events: none;
    color: #ecf0f1;

    padding-inline: .3em;
    transition: transform 200ms;
    pointer-events: none;
    transform-origin: left;
    translate: -.3em;

}

.SearchInput__Input input:focus+label,
.SearchInput__Input input:not(:placeholder-shown)+label {
    transform: translateY(calc(-10% - var(--pad))) scale(.8);
    color: #ecf0f1;
}

.SearchInput span {
    padding: 0 .7rem;
}

.SearchInput input::placeholder {
    color: #ecf0f1;
    font-size: 1em;
}

.SearchInput input:focus {
    outline: none;
}

/* RESPONSIVE */
@media (max-width: 1080px) {
    .HomeHead__Filter {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}

@media (max-width: 700px) {
    .HomeHead__Filter {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 500px) {
    .HomeHead__Filter {
        grid-template-columns: 1fr;
    }
}
</style>