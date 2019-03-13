<template>
  <div :class="$style.app">
      <app-header/>
      <page/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import AppHeader from '../components/header.vue';
import Page from '../components/page.vue';

@Component ({
  components: { AppHeader, Page }
})
export default class AppComponent extends Vue {

}
</script>


<style module>
.app {
  height: 100%;

  display: grid;
  grid-auto-rows: max-content;
}
</style>
