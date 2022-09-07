import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('@/views/Main'),
    },
    {
        path: '/icb/main',
        name: 'IcbMain',
        component: () => import('@/views/icbs/IcbMain')
    },
    {
        path: '/icb/matrix',
        name: 'Matrix',
        component: () => import('@/views/icbs/Matrix')
    },
    {
        path: '/conve/main',
        name: 'ConveMain',
        component: () => import('@/views/conve/ConveMain')
    },
    {
        path: '/gen/main',
        name: 'GenMain',
        component: () => import('@/views/gen/GenMain')
    },
    {
        path: '/talk/main',
        name: 'talkMain',
        component: () => import('@/views/talk/talkMain'),
    },
    {
        path: '/talk/sub1',
        name: 'Sub1',
        component: () => import('@/views/talk/sub/Sub1'),
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});