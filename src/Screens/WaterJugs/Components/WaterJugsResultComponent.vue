<script setup lang="ts">
import type { Solution } from '@/Core/Models/Solution';

const props = defineProps<{
    errorMessage: string,
    solution: Solution[]
}>();


</script>
<template>
    <section class="WaterJug__Results">
        <h4>Steps: {{ props.solution.length }}</h4>
        <h4>Actions:</h4>

        <table>
            <thead>
                <tr>
                    <th>Jug X</th>
                    <th>Jug Y</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody v-if="props.solution.length > 0">

                <tr v-for="solution in props.solution" :key="solution.action">
                    <td>{{ solution.stateStep.jugX.current }}</td>
                    <td>{{ solution.stateStep.jugY.current }}</td>
                    <td>{{ solution.action }}</td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="3">
                        No results yet
                    </td>
                </tr>

            </tbody>

        </table>

    </section>
</template>

<style scoped>
table {
    width: 100%;
    height: 100%;
}

table,
th,
td {
    border: 1px solid black;
    border-collapse: collapse;
}

th,
td {
    padding: 15px;
    text-align: left;
}

th {
    background-color: var(--primary);
}

tr:nth-child(even) {
    background-color: var(--primary);
}

tr:nth-child(odd) {
    background-color: var(--dark);
}

tr:hover {
    background-color: #ddd;
}

tr:nth-child(even) {
    background-color: var(--primary);
}

tr:nth-child(odd) {
    background-color: var(--dark);
}
</style>