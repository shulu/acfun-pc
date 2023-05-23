<!--
 * @Author: shulu
 * @Date: 2023-05-20 18:39:03
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-22 15:20:30
 * @Description: file content
 * @FilePath: /acfun-pc/src/components/Layout/Left/MenuTop.vue
-->
<script setup lang="ts">
import MenuVertical from '@/components/Common/MenuVertical.vue';
import { leftTopMenuOptions } from '@/router/menuRouter';
import { toRefs } from 'vue';

const props = defineProps({
    collapsed: Boolean,
});

const { collapsed } = toRefs(props);
</script>
<template>
    <MenuVertical :menuOptions="leftTopMenuOptions" :collapsed="collapsed" />
</template>
