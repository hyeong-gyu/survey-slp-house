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
    {
        path: '/talk/sub2',
        name: 'Sub2',
        component: () => import('@/views/talk/sub/Sub2'),
    },
    {
        path: '/talk/sub3',
        name: 'Sub3',
        component: () => import('@/views/talk/sub/Sub3'),
    },
    {
        path: '/talk/sub4',
        name: 'Sub4',
        component: () => import('@/views/talk/sub/Sub4'),
    },
    {
        path: '/talk/sub5',
        name: 'Sub5',
        component: () => import('@/views/talk/sub/Sub5'),
    },
    {
        path: '/talk/sub6',
        name: 'Sub6',
        component: () => import('@/views/talk/sub/Sub6'),
    },
    {
        path: '/talk/sub7',
        name: 'Sub7',
        component: () => import('@/views/talk/sub/Sub7'),
    },
    {
        path: '/episode/main',
        name: 'episodeMain',
        component: () => import('@/views/episode/EpisodeMain'),
    },
    {
        path: '/episode/sub',
        name: 'episodeSub',
        component: () => import('@/views/episode/Sub'),
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});