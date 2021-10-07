import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('@/views/Main'),
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});