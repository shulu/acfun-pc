<!--
 * @Author: shulu
 * @Date: 2023-05-20 12:01:57
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-26 16:41:55
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
const activeKey = ref('home-recommend');
const handleUpdateValue = (key: string) => {
    activeKey.value = key;
};
const props = defineProps({
    menuOptions: Array<MenuOption>,
});
const { menuOptions } = toRefs(props);
watch(
    () => route.meta,
    (meta) => {
        const rkey = String(meta.rkey);
        switch (rkey) {
            case 'likes':
                activeKey.value = 'likes-all';
                break;
            case 'home':
                activeKey.value = 'home-recommend';
                break;
            default:
                activeKey.value = rkey;
        }
    },
);
</script>
<template>
    <n-layout-header bordered>
        <n-grid x-gap="12" cols="5">
            <n-gi :span="3">
                <n-menu
                    :value="activeKey"
                    mode="horizontal"
                    :collapsed-width="20"
                    :options="menuOptions"
                    @update:value="handleUpdateValue"
                />
            </n-gi>
            <n-gi :span="2" style="display: flex; align-items: end; justify-content: end">
                <search />
                <system-button />
            </n-gi>
        </n-grid>
    </n-layout-header>
</template>
