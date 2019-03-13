<template>
  <div :class="$style.header">
    <h1 :class="$style.title">Pokémon types</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class HeaderComponent extends Vue {

}
</script>

<style module>
.header {
  background-color: #2782d2;
  padding: 10px;
}

.title {
  margin: 0;
  color: #fbea22;
}
</style>
