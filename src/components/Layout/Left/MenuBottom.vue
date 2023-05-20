<!--
 * @Author: shulu
 * @Date: 2023-05-20 18:39:03
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-20 22:45:14
 * @Description: file content
 * @FilePath: \acfun-pc\src\components\Layout\Left\MenuBottom.vue
-->
<script setup lang="ts">
import MenuVertical from '@/components/Common/MenuVertical.vue';
import { OptionsSharp, PersonSharp } from '@vicons/ionicons5';
import type { MenuOption } from 'naive-ui';
import { NIcon } from 'naive-ui';
import { Component, h, toRefs } from 'vue';
const menuOptions: MenuOption[] = [
    {
        label: '我的',
        key: 'mine',
        disabled: false,
        icon: renderIcon(PersonSharp),
    },
    {
        label: '设置',
        key: 'setting',
        disabled: false,
        icon: renderIcon(OptionsSharp),
    },
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
    <MenuVertical :menuOptions="menuOptions" :collapsed="collapsed" style="position: fixed; bottom: 0; left: 0" />
</template>
