<!--
 * @Author: shulu
 * @Date: 2023-05-20 12:01:57
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-21 23:03:49
 * @Description: file content
 * @FilePath: \acfun-pc\src\components\Layout\Top\TopBar.vue
-->
<script setup lang="ts">
import { Diamond, Sparkles, StatsChart, Videocam } from '@vicons/ionicons5';
import type { MenuOption } from 'naive-ui';
import { NIcon } from 'naive-ui';
import { Component, h, ref } from 'vue';
import { RouterLink } from 'vue-router';
import Search from './Search.vue';
import SystemButton from './SystemButton.vue';

const menuOptions: MenuOption[] = [
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
                { default: () => '直播' },
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
function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) });
}
const activeKey = ref<string | null>(null);
</script>
<template>
    <n-layout-header bordered>
        <n-grid x-gap="12" cols="5">
            <n-gi :span="2">
                <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
            </n-gi>
            <n-gi>
                <search />
            </n-gi>
            <n-gi :offset="1" style="display: flex; align-items: end; justify-content: end">
                <system-button />
            </n-gi>
        </n-grid>
    </n-layout-header>
</template>
