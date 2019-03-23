<template>
  <span v-html="typeList">
    {{ typeList }}
  </span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Type } from '../models/type'

@Component
export default class TypeListDecorator extends Vue {
  @Prop() types!: Type[];

  get typeList(): string {
    return this.types && this.types.length
      ? this.types.map((type) => type.name).join(', ')
      : '&ndash;';
  }
}
</script>
