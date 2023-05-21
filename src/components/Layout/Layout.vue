<!--
 * @Author: shulu
 * @Date: 2023-05-18 22:55:23
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-21 12:59:17
 * @Description: file content
 * @FilePath: \acfun-pc\src\components\Layout\Layout.vue
-->
<script setup lang="ts">
import Leftbar from '@/components/Layout/Left/LeftBar.vue';
import BaseContent from './BaseContent.vue';
import TopBar from './Top/TopBar.vue';
</script>
<template>
    <n-layout has-sider>
        <Leftbar />
        <n-layout>
            <TopBar />
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
