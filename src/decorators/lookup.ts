
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Type } from '../models/type';
import TypeRelationshipsComponent from '../components/type-relationships.vue'
import { Api } from '../api';

@Component({
    components: { TypeRelationshipsComponent }
})
export default class LookupDecorator extends Vue {
    @Prop() type!: string

    private api = new Api('https://pokemon-type-api.herokuapp.com');

    private autocompleteResults: Type[] = [];
    
    private searchResults: Type[] = [];

    get results(): Type[] {
        return this.searchResults;
    }

    get autocompleted(): Type[] {
        return this.autocompleteResults;
    }

    async autocomplete(): Promise<void> {
        // TODO
    }

    async search(): Promise<void> {
        let searchTerm = this.type.toLowerCase().trim();
        let type = await this.api.getType(searchTerm);

        this.searchResults = type ? [type] : [];
    }

    async effectiveAgainst(): Promise<void> {
        let type = await this.api.getType(this.type);
        this.searchResults = type ? type.relationships.effectiveAgainst : [];
    }

    async weakAgainst(): Promise<void> {
        let type = await this.api.getType(this.type);
        this.searchResults = type ? type.relationships.weakAgainst : [];
    }

    async ineffectiveAgainst(): Promise<void> {
        let type = await this.api.getType(this.type);
        this.searchResults = type ? type.relationships.ineffectiveAgainst : [];
    }

    async counters(): Promise<void> {
        let type = await this.api.getType(this.type);
        this.searchResults = type ? type.relationships.counters : [];
    }
}