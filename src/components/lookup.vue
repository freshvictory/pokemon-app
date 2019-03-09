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

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Type } from '../models/type';
import TypeRelationshipsComponent from '../components/type-relationships.vue'
import { Api } from '../api';

@Component({
  components: { TypeRelationshipsComponent }
})
export default class LookupDecorator extends Vue {
  @Prop() type!: string

  private api = new Api('https://pokemon-type-api.herokuapp.com');

  private autocompleteResults: Type[] = [];
  
  private searchResults: Type[] = [];

  get results(): Type[] {
    return this.searchResults;
  }

  get autocompleted(): Type[] {
    return this.autocompleteResults;
  }

  async autocomplete(): Promise<void> {
    // TODO
  }

  async search(): Promise<void> {
    if (this.type) {
      let searchTerm = this.type.toLowerCase().trim();
      let type = await this.api.getType(searchTerm);

      this.searchResults = type ? [type] : [];
    }
  }

  async effectiveAgainst(): Promise<void> {
    let type = await this.api.getType(this.type);
    this.searchResults = type ? type.relationships.effectiveAgainst : [];
  }

  async weakAgainst(): Promise<void> {
    let type = await this.api.getType(this.type);
    this.searchResults = type ? type.relationships.weakAgainst : [];
  }

  async ineffectiveAgainst(): Promise<void> {
    let type = await this.api.getType(this.type);
    this.searchResults = type ? type.relationships.ineffectiveAgainst : [];
  }

  async counters(): Promise<void> {
    let type = await this.api.getType(this.type);
    this.searchResults = type ? type.relationships.counters : [];
  }
}</script>

<style module>
</style>