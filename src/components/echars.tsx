import {Component, Prop, Vue} from 'vue-property-decorator';
import {Drawer} from 'ant-design-vue';
import './components.scss';
import $echarts from 'echarts';

@Component
class Echars extends Vue {
    @Prop({
        type: Object,
        required: false,
        default: {},
    }) public options: any;

    public visible: boolean = true;

    public mounted() {
        this.$nextTick()
            .then(() => {
                // const dom = document.getElementById('main');
                // const myChart = $echarts.init(dom);
                // // 指定图表的配置项和数据
                // const option = {
                //     title: {
                //         text: 'ECharts 入门示例',
                //     },
                //     tooltip: {},
                //     legend: {
                //         data: ['销量'],
                //     },
                //     xAxis: {
                //         data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
                //     },
                //     yAxis: {},
                //     series: [{
                //         name: '销量',
                //         type: 'bar',
                //         data: [5, 20, 36, 10, 10, 20],
                //     }],
                // };
                //
                // // 使用刚指定的配置项和数据显示图表。
                // myChart.setOption(option);
            });

    }

    protected render() {
        return (
            <div class={'Echars'}>
                <div id={'main'}>

                </div>
            </div>
        )
            ;
    }
}

export default Echars;
