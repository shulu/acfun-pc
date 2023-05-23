<!--
 * @Author: shulu
 * @Date: 2023-05-20 18:39:03
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-23 23:44:51
 * @Description: file content
 * @FilePath: \acfun-pc\src\components\Layout\Left\MenuBottom.vue
-->
<script setup lang="ts">
import MenuVertical from '@/components/Common/MenuVertical.vue';
import { leftBottomOptions } from '@/router/menuRouter';
import { toRefs } from 'vue';
const props = defineProps({
    collapsed: Boolean,
});
const { collapsed } = toRefs(props);
</script>
<template>
    <MenuVertical
        :menuOptions="leftBottomOptions"
        :collapsed="collapsed"
        style="position: absolute; bottom: 0; left: 0"
    />
</template>
