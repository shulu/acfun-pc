<!--
 * @Author: shulu
 * @Date: 2023-05-22 09:43:13
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-26 17:04:03
 * @Description: file content
 * @FilePath: /acfun-pc/src/components/Layout/Top/Search.vue
-->
<script setup lang="ts">
import { TrashBin } from '@vicons/ionicons5';
import { NIcon } from 'naive-ui';
</script>
<template>
    <n-input-group>
        <n-input type="text" placeholder="搜索感兴趣内容" :maxlength="5" :minlength="3" clearable>
            <template #clear-icon>
                <n-icon>
                    <trash-bin />
                </n-icon>
            </template>
        </n-input>
        <n-button type="primary" ghost> 搜索 </n-button>
    </n-input-group>
</template>
