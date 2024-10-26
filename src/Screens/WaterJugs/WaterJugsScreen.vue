<script setup lang="ts">
import { ref } from 'vue';
import WaterJugsInputComponent from './Components/WaterJugsInputComponent.vue';
import type { OutputForm } from '@/Core/Utils/Types';
import { WaterJugProblem } from '@/Core/Services/WaterJugProblem';
import WaterJugsResultComponent from './Components/WaterJugsResultComponent.vue';

const errorMessage = ref<string>('');
const currentWaterJug = ref<
    WaterJugProblem
>(new WaterJugProblem(0, 0, 0));

const OnSolve = (output: OutputForm) => {
    currentWaterJug.value.ReStart();

    const {
        jugXCapacity,
        jugYCapacity,
        jugZCapacity

    } = output;

    if (
        jugXCapacity === 0 || jugXCapacity < 0 ||
        jugYCapacity === 0 || jugYCapacity < 0 ||
        jugZCapacity === 0 || jugZCapacity < 0

    ) {
        errorMessage.value = 'Please enter a valid number';
        return;
    }



    if (jugZCapacity > jugXCapacity && jugZCapacity > jugYCapacity) {
        errorMessage.value = 'No solution';
        return;
    }

    const _waterJug = new WaterJugProblem(
        output.jugXCapacity,
        output.jugYCapacity,
        output.jugZCapacity
    );

    if (jugZCapacity % _waterJug.GCD(jugXCapacity, jugYCapacity) !== 0) {
        errorMessage.value = 'No solution for this case';
        return;
    }



    _waterJug.Resolve();
    currentWaterJug.value = _waterJug;
    errorMessage.value = '';

}



</script>


<template>
    <main class="Screen">
        <h1>Water Jugs</h1>
        <p>Given two jugs of size <code>x</code> and <code>y</code>, and a target <code>z</code>, determine whether it
            is possible to measure <code>z</code> liters using these two jugs.</p>
        <p>Operations allowed:</p>
        <ul>
            <li>Fill any of the jugs completely.</li>
            <li>Empty any of the jugs.</li>
            <li>Pour water from one jug into another till the other jug is completely full or the first jug itself is
                empty.</li>
        </ul>

        <article class="WaterGame">
            <section class="WaterGame__Inputs">
                <WaterJugsInputComponent :errorMessage="errorMessage" @Solve="OnSolve" />
            </section>

            <section class="WaterGame__Result">
                <WaterJugsResultComponent :errorMessage="errorMessage" :solution="currentWaterJug.solution" />

            </section>
        </article>

    </main>

</template>


<style scoped>
.WaterGame {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 1rem;
}

.WaterGame>* {
    width: 100%;
    height: 100%;
}

.WaterGame__Inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.WaterGame__Result {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}


/* RESPONSIVE */
@media (max-width: 1080px) {
    .WaterGame {
        flex-direction: column;
        gap: 2rem;
    }
}

@media (max-width: 768px) {
    .WaterGame {
        gap: 1rem;
    }
}

@media (max-width: 480px) {
    .WaterGame {
        gap: 0.5rem;
    }
}

@media (max-width: 320px) {
    .WaterGame {
        gap: 0.25rem;
    }
}
</style>