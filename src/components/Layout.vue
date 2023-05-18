<!--
 * @Author: shulu
 * @Date: 2023-05-18 22:55:23
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-18 22:56:50
 * @Description: file content
 * @FilePath: \acfun-pc\src\components\Layout.vue
-->
<script setup lang="ts"></script>
<template>
    <n-layout has-sider>
        <n-layout-sider bordered content-style="padding: 24px;"> 海淀桥 </n-layout-sider>
        <n-layout>
            <n-layout-header bordered> 颐和园路 </n-layout-header>
            <n-layout-content content-style="padding: 24px;"> 平山道 </n-layout-content>
            <n-layout-footer bordered> 成府路 </n-layout-footer>
        </n-layout>
    </n-layout>
</template>

<style scoped>
.n-layout-header {
    padding: 24px;
}

.n-layout-footer {
    padding: 24px;
}
</style>
