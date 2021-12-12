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
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});