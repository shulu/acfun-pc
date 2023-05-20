<!--
 * @Author: shulu
 * @Date: 2023-05-18 21:43:01
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-20 23:26:20
 * @FilePath: \acfun-pc\src\components\Layout\Left\LeftBar.vue
-->
<script setup lang="ts">
import { ref } from 'vue';
import LeftLogo from './LeftLogo.vue';
import MenuTop from './MenuTop.vue';
const collapsed = ref(false);
</script>
<template>
    <n-space vertical style="height: 100%">
        <left-logo :collapsed="collapsed" />
        <n-layout has-sider>
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
                <menu-top :collapsed="collapsed" />
            </n-layout-sider>
        </n-layout>
    </n-space>
</template>
