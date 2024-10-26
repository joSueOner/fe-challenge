<script setup lang="ts">
const props = defineProps<{
    lable?: string,
    name: string,
    id: string,
    options: string[]
}>()

</script>
<template>
    <div class="SearchSelect">
        <span>
            <slot></slot>
        </span>
        <div class="SearchSelect__Select">
            <label :for="props.id">
                {{ props.lable ?? 'Select' }}
            </label>
            <select :name="props.name" :id="props.id">
                <option v-for="option in props.options" :key="option" :value="option">
                    {{ option }}
                </option>
            </select>
        </div>
    </div>
</template>

<style scoped>
.SearchSelect {
    display: flex;
    align-items: center;
    background-color: rgba(76, 96, 133, .2);
    border-radius: 4px;
    height: 100%;
}

.SearchSelect span {
    padding: 0 .7rem;
}

.SearchSelect__Select {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
}

.SearchSelect__Select label {
    color: #ecf0f1;
    font-size: .8rem;
    padding: .2rem .5rem .0rem .5rem;
}


.SearchSelect__Select select {
    background: transparent;
    border: none;
    color: #ecf0f1;
    font-size: 1em;
    width: 100%;
    height: 100%;
    padding: 0 .5rem .5rem .5rem;
}

.SearchSelect__Select select:focus {
    outline: none;
}

select option {
    padding: 0;
    margin: 0;
    background-color: rgb(76, 96, 133);
    border-radius: 0 !important;
}
</style>