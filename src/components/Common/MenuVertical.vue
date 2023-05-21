<!--
 * @Author: shulu
 * @Date: 2023-05-20 21:58:13
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-21 23:39:00
 * @Description: file content
 * @FilePath: \acfun-pc\src\components\Common\MenuVertical.vue
-->
<script setup lang="ts">
import type { MenuOption } from 'naive-ui';
import { onMounted, ref, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const selectRoute = ref('home');

const handleUpdateValue = (key: string) => {
    console.log(`output->`, router.currentRoute.value);
    selectRoute.value = key;
};

onMounted(() => {
    console.log(`output->`, router.currentRoute.value);
    console.log(`output->`, route);
});

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
