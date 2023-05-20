<!--
 * @Author: shulu
 * @Date: 2023-05-20 12:01:57
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-20 17:11:36
 * @Description: file content
 * @FilePath: \acfun-pc\src\components\TopBar.vue
-->
<script setup lang="ts">
import { Diamond, Sparkles, StatsChart, Videocam } from '@vicons/ionicons5';
import type { MenuOption } from 'naive-ui';
import { NIcon } from 'naive-ui';
import { Component, h, ref } from 'vue';

function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions: MenuOption[] = [
    {
        label: () =>
            h(
                'a',
                {
                    href: '#',
                    target: '_blank',
                    rel: 'noopenner noreferrer',
                },
                '直播',
            ),
        key: 'hear-the-wind-sing',
        icon: renderIcon(Videocam),
    },
    {
        label: () =>
            h(
                'a',
                {
                    href: '#',
                    target: '_blank',
                    rel: 'noopenner noreferrer',
                },
                '推荐',
            ),
        key: 'hear-the-wind-sing',
        icon: renderIcon(Sparkles),
    },
    {
        label: () =>
            h(
                'a',
                {
                    href: '#',
                    target: '_blank',
                    rel: 'noopenner noreferrer',
                },
                '追番',
            ),
        key: 'hear-the-wind-sing',
        icon: renderIcon(Diamond),
    },
    {
        label: () =>
            h(
                'a',
                {
                    href: '#',
                    target: '_blank',
                    rel: 'noopenner noreferrer',
                },
                '排行榜',
            ),
        key: 'hear-the-wind-sing',
        icon: renderIcon(StatsChart),
    },
];

const activeKey = ref<string | null>(null);
</script>
<template>
    <n-layout-header bordered>
        <n-menu
            v-model:value="activeKey"
            mode="horizontal"
            :options="menuOptions"
            style="align-items: left; display: flex; justify-content: left; height: 40px"
        />
    </n-layout-header>
</template>
