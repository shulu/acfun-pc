<!--
 * @Author: shulu
 * @Date: 2023-05-20 21:58:13
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-20 22:26:57
 * @Description: file content
 * @FilePath: \acfun-pc\src\components\Common\Menu.vue
-->
<script setup lang="ts">
import type { MenuOption } from 'naive-ui';
import { toRefs } from 'vue';

const props = defineProps({
    collapsed: Boolean,
    menuOptions: Array<MenuOption>,
});

const { collapsed, menuOptions } = toRefs(props);
</script>
<template>
    <n-menu
        mode="vertical"
        :collapsed="collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
    />
</template>
