<!--
 * @Author: shulu
 * @Date: 2023-05-18 22:55:23
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-23 17:12:58
 * @Description: file content
 * @FilePath: /acfun-pc/src/components/Layout/Layout.vue
-->
<script setup lang="ts">
import BaseContent from '@/components/Layout/BaseContent.vue';
import LeftBar from '@/components/Layout/Left/LeftBar.vue';
import TopBar from '@/components/Layout/Top/TopBar.vue';
import { homeMenuOptions, likesMenuOptions } from '@/router/menuRouter';
import type { MenuOption } from 'naive-ui';
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const menuOptions = ref<MenuOption[]>([]);
const route = useRoute();
const router = useRouter();
watch(
    () => route.matched,
    (matched) => {
        const nowRoute = matched[0].name;
        switch (nowRoute) {
            case 'likes':
                menuOptions.value = likesMenuOptions;
                router.replace({ path: '/likes/all' });
                break;
            default:
                menuOptions.value = homeMenuOptions;
                router.replace({ path: '/home/recommend' });
                break;
        }
    },
);
</script>
<template>
    <n-layout has-sider>
        <LeftBar />
        <n-layout>
            <TopBar :menu-options="menuOptions" />
            <BaseContent />
        </n-layout>
    </n-layout>
</template>

<style scoped>
.n-layout {
    height: 100%;
}
.n-layout-header {
    padding: 24px;
}

.n-layout-footer {
    padding: 24px;
}
</style>
