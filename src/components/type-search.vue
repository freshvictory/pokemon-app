<template>
  <div>
    <div :class="$style.container">
      <input v-model="type" type="text">
      <button @click="search">Search</button>
    </div>
    <div v-if="results[0] && results[0].relationships">
      <h2>{{ results[0].name }} type pokemon</h2>
      <type-relationships-component :relationships="results[0].relationships">
      </type-relationships-component>
    </div>
    <div v-else-if="!results[0]">
      pokemon type not found
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import TypeRelationshipsComponent from '../components/type-relationships.vue'
import { Api } from '../api';
import { Type } from '../models/type';

@Component({
  components: { TypeRelationshipsComponent }
})
export default class TypeSearchResultsDecorator extends Vue {
  private searchResults: Type[] = [];

  @Prop({ default: 'dark' })
  private readonly type!: string;

  get results(): Type[] {
    return this.searchResults;
  }

  private api = new Api('https://pokemon-type-api.herokuapp.com');

  async search(): Promise<void> {
    if (this.type) {
      let searchTerm = this.type.toLowerCase().trim();
      let type = await this.api.getType(searchTerm);

      this.searchResults = type ? [type] : [];
    }
  }
}
</script>

<style module>
.container {
  padding: 10px;
}
</style>