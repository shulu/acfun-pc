<!--
 * @Author: shulu
 * @Date: 2023-05-18 21:05:56
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-27 18:37:17
 * @Description: file content
 * @FilePath: \acfun-pc\src\App.vue
-->
<script setup lang="ts">
import Layout from '@/components/Layout/Layout.vue';
import { darkTheme } from 'naive-ui';
import { provide, ref } from 'vue';
const theme = ref(null);
const switchTheme = () => {
    if (!theme.value) {
        theme.value = darkTheme;
    } else {
        theme.value = null;
    }
};
provide('switchTheme', switchTheme);
</script>
<template>
    <n-config-provider :theme="theme" style="height: 100%" :breakpoints="{ xs: 0, s: 640, m: 1440, l: 1600 }">
        <Layout />
    </n-config-provider>
</template>
