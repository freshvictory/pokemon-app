<template>
  <div>
    <table :class="$style.table">
      <tbody>
        <tr :class="$style.effective">
          <th scope="row">Effective against</th>
          <td><type-list-component :types="relationships.effectiveAgainst"></type-list-component></td>
        </tr>
        <tr :class="$style.weak">
          <th scope="row">Weak against</th>
          <td><type-list-component :types="relationships.weakAgainst"></type-list-component></td>
        </tr>
        <tr :class="$style.ineffective">
          <th scope="row">Ineffective against</th>
          <td><type-list-component :types="relationships.ineffectiveAgainst"></type-list-component></td>
        </tr>
        <tr :class="$style.resistant">
          <th scope="row">Resistant to</th>
          <td><type-list-component :types="relationships.resistantTo"></type-list-component></td>
        </tr>
        <tr :class="$style.counter">
          <th scope="row">Counters</th>
          <td><type-list-component :types="relationships.counters"></type-list-component></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { TypeRelationships } from '../models/type'
import TypeListComponent from '../components/type-list.vue'

@Component({
    components: { TypeListComponent }
})
export default class TypeRelationshipDecorator extends Vue {
  @Prop() relationships!: TypeRelationships[];
}
</script>

<style module>
thead {
  background-color: gainsboro;
}

th,
td {
  padding: 20px;
  text-align: center;
  border: 2px solid black;
}

th {
  width: 40%;
  position: relative;
}

.table {
  border-collapse: collapse;
  border: 2px solid black;
  letter-spacing: 1px;
  font-family: sans-serif;
  font-size: 1.2rem;
  table-layout: fixed;
}

.effective {
  background-color: #69c423;
}

.weak {
  background-color: #f9ed63;
}

.ineffective {
  background-color: #f78360;
}

.resistant {
  background-color: #20c0f9;
}

.counter {
  background-color: orange;
}
</style>

