import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    {
        path: '/chapter',
        component: () => import( '@/views/chapterView' ),
        children: [
            {
                path: '/',
                name: 'chapterMain',
                component: () => import( '@/views/chapterView/main' ),
            },
        ],
    },
    {
        path: '*',
        name: 'error',
        component: () => import( '@/views/Error' ),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});




export default router;
