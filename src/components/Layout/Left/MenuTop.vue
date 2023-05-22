<!--
 * @Author: shulu
 * @Date: 2023-05-20 18:39:03
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-22 15:20:30
 * @Description: file content
 * @FilePath: /acfun-pc/src/components/Layout/Left/MenuTop.vue
-->
<script setup lang="ts">
import MenuVertical from '@/components/Common/MenuVertical.vue';
import { AtSharp, HeartCircleSharp, HomeSharp, PawSharp } from '@vicons/ionicons5';
import type { MenuOption } from 'naive-ui';
import { NIcon } from 'naive-ui';
import { Component, h, toRefs } from 'vue';
import { RouterLink } from 'vue-router';
const menuOptions: MenuOption[] = [
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
        label: '消息',
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
    // {
    //     label: '设置',
    //     key: 'setting',
    //     disabled: false,
    //     icon: renderIcon(OptionsSharp),
    // },
];

function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) });
}

const props = defineProps({
    collapsed: Boolean,
});

const { collapsed } = toRefs(props);
</script>
<template>
    <MenuVertical :menuOptions="menuOptions" :collapsed="collapsed" />
</template>
