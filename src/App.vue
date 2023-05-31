<!--
 * @Author: shulu
 * @Date: 2023-05-18 21:05:56
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-31 11:35:02
 * @Description: file content
 * @FilePath: /acfun-pc/src/App.vue
-->
<script setup lang="ts">
import Layout from '@/components/Layout/Layout.vue';
import { isNight } from '@/utils/datetime';
import { darkTheme } from 'naive-ui';
import { onMounted, provide, ref, toRef } from 'vue';
const theme = ref(null);
const switchTheme = () => {
    if (!theme.value) {
        theme.value = darkTheme;
    } else {
        theme.value = null;
    }
};
const night = toRef(isNight());
onMounted(() => {
    if (night.value && theme.value != darkTheme) {
        theme.value = darkTheme;
    }
});
provide('switchTheme', switchTheme);
</script>
<template>
    <n-config-provider :theme="theme" style="height: 100%" :breakpoints="{ xs: 0, s: 640, m: 1440, l: 1600 }">
        <Layout />
    </n-config-provider>
</template>
