import {Component, Vue} from 'vue-property-decorator';

@Component
export default class IndexChapter extends Vue {
    protected render() {
        return (
            <router-view/>
        );
    }
}
