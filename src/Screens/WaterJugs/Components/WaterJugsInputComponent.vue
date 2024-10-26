<script setup lang="ts">
import type { OutputForm } from '@/Core/Utils/Types';

import { ref } from 'vue';

const emit = defineEmits<{
    (e: 'Solve', output: OutputForm): void
}>()

const props = defineProps<{
    errorMessage: string
}>();

const jugXCapacity = ref<number>(0);
const jugYCapacity = ref<number>(0);
const jugZCapacity = ref<number>(0);

const Solve = () => {
    emit('Solve', {
        jugXCapacity: jugXCapacity.value,
        jugYCapacity: jugYCapacity.value,
        jugZCapacity: jugZCapacity.value
    })


}

</script>
<template>
    <section class="WaterJug__Jugs">

        <h3>
            {{ props.errorMessage }}
        </h3>
        <div class="WaterJug__Jugs__Container">
            <div class="WaterJug__Jugs__Container--X">
                <h1>
                    Jug X
                </h1>
                <h1>
                    {{ jugXCapacity ? jugXCapacity : 0 }}

                </h1>

                <input placeholder="Enter Capacity" type="number" v-model="jugXCapacity">
            </div>
            <div class="WaterJug__Jugs__Container--Y">
                <h1>
                    Jug Y
                </h1>
                <h1>
                    {{ jugYCapacity ? jugYCapacity : 0 }}

                </h1>


                <input placeholder="Enter Capacity" type="number" v-model="jugYCapacity">
            </div>
            <div class="WaterJug__Jugs__Container--Z">
                <h1>
                    Jug Z
                </h1>
                <h1>
                    {{ jugZCapacity ? jugZCapacity : 0 }}

                </h1>

                <input placeholder="Enter Capacity" type="number" v-model="jugZCapacity">


            </div>


        </div>
        <div class="WaterJug__Jugs__Button">
            <button @click="Solve">
                Solve
            </button>
        </div>


    </section>
</template>



<style scoped>
/* .WaterJug__Jugs {} */


.WaterJug__Jugs>h3 {
    text-align: center;
    font-size: 1rem;
    color: red;
}

.WaterJug__Jugs__Container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

}

.WaterJug__Jugs__Container--X {
    height: 200px;
    background-color: rgba(0, 0, 255, 0.2);
}

.WaterJug__Jugs__Container--Y {
    height: 200px;
    background-color: rgba(255, 0, 0, 0.2);
}

.WaterJug__Jugs__Container--Z {
    height: 200px;
    background-color: hsla(120, 100%, 25%, 0.2);

}

.WaterJug__Jugs__Container>* {
    border-bottom: 1px;
    border-top: 0px;
    border-left: 1px;
    border-right: 1px;
    border-style: solid;
    border-color: black;

    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 10px;


    /* background-color: #f1f1f1; */
    /* opacity: 0.2; */
}

.WaterJug__Jugs__Container>*>input {
    padding: 10px;
    text-align: center;
}





.WaterJug__Jugs__Container>*>h1 {
    color: white;
    margin: 0;
    font-size: 2rem;
    text-align: center;

}

.WaterJug__Jugs__Button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.WaterJug__Jugs__Button>button {
    margin-top: 2rem;
    padding: 10px 20px;
    background-color: var(--info);
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    width: 100%;
}
</style>