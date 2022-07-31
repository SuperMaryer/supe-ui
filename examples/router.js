
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 路由配置文件
let routeConfig = [
    {
        path: '/',
        query: {
            redirect: ""
        },
        component: () => import(/* webpackChunkName: "home" */'./views/home')
    },
    {
        path: '/demo',
        component: () => import(/* webpackChunkName: "demo" */'./views/demo')
    },
    {
        path: '/card',
        component: () => import(/* webpackChunkName: "card" */'./views/card')
    },
    {
        path: '/time-period-list',
        component: () => import(/* webpackChunkName: "card" */'./views/time-period-list')
    },
];

export default new VueRouter({
    routes: routeConfig
});