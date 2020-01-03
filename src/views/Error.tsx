import {Component, Vue} from 'vue-property-decorator';
@Component
class Error extends Vue {
    protected render() {
        return (
            <div class={'error'}>
                <h1>404</h1>
            </div>
        );
    }
}

export default Error;
