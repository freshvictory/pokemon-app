import Vue from 'vue';
import LookupComponent from './components/lookup.vue';

let v = new Vue({
    el: "#app",
    template: `
    <div>
        Type: <input v-model="type" type="text">
        <lookup-component :type="type" />
    </div>
    `,
    data: { type: 'dark' },
    components: {
        LookupComponent
    }
});