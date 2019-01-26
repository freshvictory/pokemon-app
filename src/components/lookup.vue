<template>
    <div>
        <button @click="search">Search</button>
        <button @click="effectiveAgainst">Effective against</button>
        <button @click="weakAgainst">Weak against</button>
        <button @click="ineffectiveAgainst">Ineffective against</button>
        <button @click="counters">Counters</button>
        <button @click="autocomplete">Autocomplete</button>
        <div v-if="results[0] && results[0].relationships">
            <h2>{{ results[0].name }} type pokemon</h2>
            <type-relationships-component :relationships="results[0].relationships">
            </type-relationships-component>
        </div>
        <ul v-else-if="results[0]">
            <li v-for="result in results" :key="result.type">
                {{ result.name }}
            </li>
        </ul>
        <div v-else-if="type && !results[0]">
            pokemon type not found
        </div>
    </div>
</template>

<script lang="ts" src='../decorators/lookup'></script>

<style module>
</style>