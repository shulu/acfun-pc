<!--
 * @Author: shulu
 * @Date: 2023-05-18 21:43:01
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-28 14:00:33
 * @FilePath: \acfun-pc\src\components\Layout\Left\LeftBar.vue
-->
<script setup lang="ts">
import { ref } from 'vue';
import LeftLogo from './LeftLogo.vue';
import LeftTheme from './LeftTheme.vue';
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
        class="can-drag"
    >
        <left-logo :collapsed="collapsed" />
        <menu-top :collapsed="collapsed" />
        <left-theme />
    </n-layout-sider>
</template>
