<!--
 * @Author: shulu
 * @Date: 2023-05-20 21:58:13
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-24 17:16:13
 * @Description: file content
 * @FilePath: /acfun-pc/src/components/Common/MenuVertical.vue
-->
<script setup lang="ts">
import type { MenuOption } from 'naive-ui';
import { inject, ref, toRefs, watch } from 'vue';

const selectRoute = ref('home');

const handleUpdateValue = (key: string) => {
    selectRoute.value = key;
};

const props = defineProps({
    collapsed: Boolean,
    menuOptions: Array<MenuOption>,
});
const { collapsed, menuOptions } = toRefs(props);


</script>
<template>
    <n-menu
        mode="vertical"
        :value="selectRoute"
        :collapsed="collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
        @update:value="handleUpdateValue"
    />
</template>
