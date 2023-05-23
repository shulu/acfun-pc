<!--
 * @Author: shulu
 * @Date: 2023-05-18 21:05:56
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-23 23:44:13
 * @Description: file content
 * @FilePath: \acfun-pc\src\App.vue
-->
<script setup lang="ts">
import Layout from '@/components/Layout/Layout.vue';
import type { GlobalTheme } from 'naive-ui';
import { provide, ref } from 'vue';
const theme = ref<GlobalTheme | null>(null);
provide('theme', theme);
</script>
<template>
    <n-config-provider :theme="theme" style="height: 100%">
        <Layout />
    </n-config-provider>
</template>
