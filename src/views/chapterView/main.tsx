import {Component, Vue} from 'vue-property-decorator';

@Component
export default class MainChapter extends Vue {
    protected render() {
        return (
            <div class={'chapterMain'}>
                <h1> 章节首页 </h1>
            </div>
        );
    }
}
