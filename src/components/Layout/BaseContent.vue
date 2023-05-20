<!--
 * @Author: shulu
 * @Date: 2023-05-20 17:25:06
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-20 17:28:31
 * @Description: file content
 * @FilePath: \acfun-pc\src\components\BaseContent.vue
-->
<script setup lang="ts"></script>
<template>
    <n-layout-content content-style="padding: 24px;">
        <n-result status="info" title="信息" description="在这个年代，信息就是金钱，金钱就是信息。">
            <template #footer>
                <n-button>我需要信息</n-button>
            </template>
        </n-result>
    </n-layout-content>
</template>
