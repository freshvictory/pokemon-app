<template>
  <div :class="$style.page">
    <type-search-results/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TypeSearchResults from '../components/type-search.vue';

@Component({
  components: { TypeSearchResults }
})
export default class PageComponent extends Vue {

}
</script>

<style module>
.page {
  padding: 10px;
}
</style>
