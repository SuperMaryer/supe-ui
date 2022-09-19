
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
        component: () => import(/* webpackChunkName: "time-period-list" */'./views/time-period-list')
    },
    {
        path: '/content-section',
        component: () => import(/* webpackChunkName: "content-section" */'./views/content-section')
    },
    {
        path: '/plate-num-select',
        component: () => import(/* webpackChunkName: "/plate-num-select" */'./views/plate-num-select')
    },
    {
        path: '/scroll-text',
        component: () => import(/* webpackChunkName: "/scroll-text" */'./views/scroll-text')
    },
    {
        path: '/linear-text',
        component: () => import(/* webpackChunkName: "/linear-text" */'./views/linear-text')
    },
    {
        path: '/image-text',
        component: () => import(/* webpackChunkName: "/image-text" */'./views/image-text')
    },
];

export default new VueRouter({
    routes: routeConfig
});