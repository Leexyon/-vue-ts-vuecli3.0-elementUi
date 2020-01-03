import {Component, Prop, Vue} from 'vue-property-decorator';
import {Drawer} from 'ant-design-vue';
import './components.scss';

@Component
class Menu extends Vue {
    @Prop({
        type: Object,
        required: false,
        default: {},
    }) public options: any;

    public visible: boolean = true;

    protected render() {
        return (
            <div class={'Menu'}>
                {/*<Drawer title='Basic Drawer' placement='right'*/}
                {/*    visible= {this.visible}*/}
                {/*>*/}
                {/*    <p>Some contents...</p>*/}
                {/*    <p>Some contents...</p>*/}
                {/*    <p>Some contents...</p>*/}
                {/*</Drawer>*/}

                <h1>{this.options.option[0].id.id}</h1>;
                <h1>{this.options.name}</h1>;
            </div>
        )
            ;
    }
}

export default Menu;
