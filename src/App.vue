<template>
    <div id="cec">
        <Menu :options="option"/>
        <Echars :options="option"/>
        <button @click='add'>+</button>
        <h1>{{test}}</h1>
        <h2>{{testGetter}}</h2>
        <button @click="tianji">jia</button>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import menu from './components/menu';
import echars from './components/echars';
import $axios from 'axios';

@Component({
    components: {
        Menu: menu,
        Echars: echars,
    },
})
export default class App extends Vue {
    public option: any = {
        id: 123456,
        name: '我的名字',
        option: [
            {
                id: {
                    id: 1,
                },
            },
        ],
    };

    private test: string = '20';

    get testGetter() {
        return 'test';
    }

    public tianji() {
        this.option.option[0].id.id++;
    }

    public add() {
        const formDataPr = new FormData();

        formDataPr.append('username', 'damin');

        // $axios.get('/api/test')
        //     .then(function(response) {
        //         console.log(response);
        //     })
        //     .catch(function(error) {
        //         console.log(error);
        //     });
        // var xhr = new XMLHttpRequest();
        // xhr.withCredentials = true;
        // xhr.open('post', '/target/knowledge_graph/test');
        // xhr.send({user:'123'});
        fetch('/api/test', {method: 'get'})
        .then((response) => {
            response.text();
        })
        .then((response) => {
            console.log(response);
        })
        .catch((ret) => {
            console.log(ret);
        });

    }
}
</script>

<style lang="scss">

</style>
