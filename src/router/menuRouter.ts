import { Diamond, Sparkles, StatsChart, Videocam } from '@vicons/ionicons5';
import type { MenuOption } from 'naive-ui';
import { NIcon } from 'naive-ui';
import { Component, h } from 'vue';
import { RouterLink } from 'vue-router';

export const homeMenuOptions: MenuOption[] = [
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/home/live',
                    },
                },
                { default: () => '直播' },
            ),
        key: 'home-live',
        icon: renderIcon(Videocam),
    },
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/home/recommend',
                    },
                },
                { default: () => '推荐' },
            ),
        key: 'home-recommend',
        icon: renderIcon(Sparkles),
    },
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/home/anime',
                    },
                },
                { default: () => '追番' },
            ),
        key: 'home-anime',
        icon: renderIcon(Diamond),
    },
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/home/rank',
                    },
                },
                { default: () => '排行榜' },
            ),
        key: 'home-rank',
        icon: renderIcon(StatsChart),
    },
];

export const likesMenuOptions: MenuOption[] = [
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/likes/all',
                    },
                },
                { default: () => '综合' },
            ),
        key: 'likes-all',
        icon: renderIcon(Videocam),
    },
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/likes/recommend',
                    },
                },
                { default: () => '推荐' },
            ),
        key: 'likes-recommend',
        icon: renderIcon(Sparkles),
    },
];

function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) });
}
