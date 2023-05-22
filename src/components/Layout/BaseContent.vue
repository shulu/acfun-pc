<!--
 * @Author: shulu
 * @Date: 2023-05-20 17:25:06
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-22 15:18:07
 * @Description: file content
 * @FilePath: /acfun-pc/src/components/Layout/BaseContent.vue
-->
<script setup lang="ts"></script>
<template>
    <n-layout-content content-style="padding: 24px;">
        <RouterView />
        <RouterView name="push" />
    </n-layout-content>
</template>
