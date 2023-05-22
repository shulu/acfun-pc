/*
 * @Author: shulu
 * @Date: 2023-05-21 17:50:40
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-22 23:23:17
 * @Description: file content
 * @FilePath: \acfun-pc\src\router\router.ts
 */
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: '/home/recommend',
    },
    {
        path: '/home',
        component: () => import('@/views/Home/Home.vue'),
        meta: {
            routeKey: 'home',
        },
        children: [
            {
                path: 'live',
                component: () => import('@/views/Home/HomeLive.vue'),
                meta: {
                    routeKey: 'home-live',
                },
            },
            {
                path: 'recommend',
                component: () => import('@/views/Home/HomeRecommend.vue'),
                meta: {
                    routeKey: 'home-recommend',
                },
            },
            {
                path: 'anime',
                component: () => import('@/views/Home/HomeAnime.vue'),
                meta: {
                    routeKey: 'home-anime',
                },
            },
            {
                path: 'rank',
                component: () => import('@/views/Home/HomeRank.vue'),
                meta: {
                    routeKey: 'home-rank',
                },
            },
        ],
    },
    {
        path: '/likes',
        component: () => import('@/views/Likes/index.vue'),
        meta: {
            routeKey: 'likes',
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes,
});

export default router;
