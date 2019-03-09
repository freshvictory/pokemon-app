<template>
  <div :class="$style.app">
      <h1>Pokemon types</h1>
      Type: <input v-model="type" type="text">
      <lookup-component :type="type" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import LookupComponent from '../components/lookup.vue';

@Component ({
  data: () => { return { type: 'dark' } },
  components: { LookupComponent }
})
export default class AppComponent extends Vue {

}
</script>


<style module>
.app {
  height: 100%;
}
</style>
