import {
    AtSharp,
    Diamond,
    HeartCircleSharp,
    HomeSharp,
    OptionsSharp,
    PawSharp,
    PersonSharp,
    Sparkles,
    StatsChart,
    Videocam,
} from '@vicons/ionicons5';
import type { MenuOption } from 'naive-ui';
import { NIcon } from 'naive-ui';
import { Component, h } from 'vue';
import { RouterLink } from 'vue-router';

function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) });
}

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

export const leftTopMenuOptions: MenuOption[] = [
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/home',
                    },
                },
                { default: () => '首页' },
            ),
        key: 'home',
        icon: renderIcon(HomeSharp),
    },
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/likes',
                    },
                },
                { default: () => '动态' },
            ),
        key: 'likes',
        disabled: false,
        icon: renderIcon(HeartCircleSharp),
    },
    {
        label: '历史',
        key: 'histories',
        disabled: false,
        icon: renderIcon(PawSharp),
    },
    {
        label: '我的',
        key: 'mine',
        disabled: false,
        icon: renderIcon(PersonSharp),
    },
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/messaage',
                    },
                },
                { default: () => '消息' },
            ),
        key: 'message',
        disabled: false,
        icon: renderIcon(AtSharp),
    },
    // {
    //     label: '我的',
    //     key: 'mine',
    //     disabled: false,
    //     icon: renderIcon(PersonSharp),
    // },
    {
        label: '设置',
        key: 'setting',
        disabled: false,
        icon: renderIcon(OptionsSharp),
    },
];

export const leftBottomOptions: MenuOption[] = [
    // {
    //     label: '我的',
    //     key: 'mine',
    //     disabled: false,
    //     icon: renderIcon(PersonSharp),
    // },
    // {
    //     label: '主题',
    //     key: 'theme',
    //     disabled: false,
    //     icon: renderIcon(SunnyOutline),
    // },
    {
        label: '消息',
        key: 'message',
        disabled: false,
        icon: renderIcon(AtSharp),
    },
    {
        label: '设置',
        key: 'setting',
        disabled: false,
        icon: renderIcon(OptionsSharp),
    },
];
