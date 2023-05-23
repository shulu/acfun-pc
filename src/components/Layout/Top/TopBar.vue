<!--
 * @Author: shulu
 * @Date: 2023-05-20 12:01:57
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-23 17:56:30
 * @Description: file content
 * @FilePath: /acfun-pc/src/components/Layout/Top/TopBar.vue
-->
<script setup lang="ts">
import type { MenuOption } from 'naive-ui';
import { ref, toRefs, watch } from 'vue';
import { useRoute } from 'vue-router';
import Search from './Search.vue';
import SystemButton from './SystemButton.vue';
const route = useRoute();
const handleUpdateValue = (key: string) => {
    activeKey.value = key;
};
const props = defineProps({
    menuOptions: Array<MenuOption>,
});
const { menuOptions } = toRefs(props);
const activeKey = ref('home-recommend');
watch(
    () => route.meta,
    (meta) => {
        const rkey = meta.rkey;
        activeKey.value = rkey;
        handleUpdateValue(rkey);
    },
);
</script>
<template>
    <n-layout-header bordered>
        <n-grid x-gap="12" cols="5">
            <n-gi :span="2">
                <n-menu :value="activeKey" mode="horizontal" :options="menuOptions" @update:value="handleUpdateValue" />
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
