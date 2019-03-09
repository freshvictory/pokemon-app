import Vue from 'vue';
import AppComponent from './components/app.vue';

let v = new Vue({
    el: "#app",
    template: `<app-component/>`,
    components: {
        AppComponent
    }
});