<!--
 * @Author: shulu
 * @Date: 2023-05-22 21:56:48
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-22 23:41:32
 * @Description: file content
 * @FilePath: \acfun-pc\src\views\index.vue
-->
<script setup lang="ts">
import BaseContent from '@/components/Layout/BaseContent.vue';
import Leftbar from '@/components/Layout/Left/LeftBar.vue';
import TopBar from '@/components/Layout/Top/TopBar.vue';
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';

// 与 beforeRouteLeave 相同，无法访问 `this`
onBeforeRouteLeave((to, from) => {
    // const answer = window.confirm('Do you really want to leave? you have unsaved changes!');
    // // 取消导航并停留在同一页面上
    // if (!answer) return false;
    console.log(`output->to`, to);
    console.log(`output->from`, from);
});

// 与 beforeRouteUpdate 相同，无法访问 `this`
onBeforeRouteUpdate(async (to, from) => {
    //仅当 id 更改时才获取用户，例如仅 query 或 hash 值已更改
    // if (to.params.id !== from.params.id) {
    //     userData.value = '';
    // }
});
</script>
<template>
    <n-layout has-sider>
        <Leftbar />
        <n-layout>
            <TopBar />
            <BaseContent />
        </n-layout>
    </n-layout>
</template>

<style scoped>
.n-layout {
    height: 100%;
}
.n-layout-header {
    padding: 24px;
}

.n-layout-footer {
    padding: 24px;
}
</style>
