<!--
 * @Author: shulu
 * @Date: 2023-05-18 21:43:01
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-23 23:39:44
 * @FilePath: \acfun-pc\src\components\Layout\Left\LeftBar.vue
-->
<script setup lang="ts">
import { ref } from 'vue';
import LeftLogo from './LeftLogo.vue';
import MenuBottom from './MenuBottom.vue';
import MenuTop from './MenuTop.vue';
const collapsed = ref(false);
</script>
<template>
    <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="120"
        :collapsed="collapsed"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
    >
        <left-logo :collapsed="collapsed" />
        <menu-top :collapsed="collapsed" />
        <menu-bottom :collapsed="collapsed" />
    </n-layout-sider>
</template>
