<!--
 * @Author: shulu
 * @Date: 2023-05-18 22:55:23
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-24 20:39:36
 * @Description: file content
 * @FilePath: \acfun-pc\src\components\Layout\Layout.vue
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
    (matched, prevMatched) => {
        const nowRoute = matched[0].name;
        const prevRoute = prevMatched.length > 0 ? prevMatched[0].name : '';
        if (nowRoute != prevRoute) {
            switch (nowRoute) {
                case 'likes':
                    menuOptions.value = likesMenuOptions;
                    break;
                default:
                    menuOptions.value = homeMenuOptions;
                    break;
            }
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
