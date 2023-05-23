/*
 * @Author: shulu
 * @Date: 2023-05-23 09:47:09
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-23 18:00:48
 * @Description: file content
 * @FilePath: /acfun-pc/src/router/router.ts
 */
/*
 * @Author: shulu
 * @Date: 2023-05-21 17:50:40
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-23 17:01:20
 * @Description: file content
 * @FilePath: /acfun-pc/src/router/router.ts
 */
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: '/home/recommend',
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home/Home.vue'),
        meta: {
            rkey: 'home',
        },
        children: [
            {
                path: 'live',
                name: 'home-live',
                component: () => import('@/views/Home/HomeLive.vue'),
                meta: {
                    rkey: 'home-live',
                },
            },
            {
                path: 'recommend',
                name: 'home-recommend',
                component: () => import('@/views/Home/HomeRecommend.vue'),
                meta: {
                    rkey: 'home-recommend',
                },
            },
            {
                path: 'anime',
                name: 'home-anime',
                component: () => import('@/views/Home/HomeAnime.vue'),
                meta: {
                    rkey: 'home-anime',
                },
            },
            {
                path: 'rank',
                name: 'home-rank',
                component: () => import('@/views/Home/HomeRank.vue'),
                meta: {
                    rkey: 'home-rank',
                },
            },
        ],
    },
    {
        path: '/likes',
        name: 'likes',
        component: () => import('@/views/Likes/index.vue'),
        meta: {
            routeKey: 'likes',
        },
        children: [
            {
                path: 'all',
                name: 'likes-all',
                component: () => import('@/views/Likes/LikesAll.vue'),
                meta: {
                    rkey: 'likes-all',
                },
            },
            {
                path: 'recommend',
                name: 'likes-recommend',
                component: () => import('@/views/Likes/LikesRecommend.vue'),
                meta: {
                    rkey: 'likes-recommend',
                },
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes,
});

export default router;
