<template>
  <div class="search">
    <type-search-results/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TypeSearchResults from '@/components/TypeSearch.vue'; // @ is an alias to /src

@Component({
  components: {
    TypeSearchResults,
  },
})
export default class Home extends Vue {}
</script>
