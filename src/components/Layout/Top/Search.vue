<!--
 * @Author: shulu
 * @Date: 2023-05-22 09:43:13
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-27 23:04:39
 * @Description: file content
 * @FilePath: \acfun-pc\src\components\Layout\Top\Search.vue
-->
<script setup lang="ts">
import { Filter, Search, TrashBin } from '@vicons/ionicons5';
import { NIcon } from 'naive-ui';
</script>
<template>
    <n-input-group>
        <n-input type="text" placeholder="搜索感兴趣内容" :maxlength="5" :minlength="3" clearable>
            <template #prefix>
                <n-icon>
                    <Filter />
                </n-icon>
            </template>
            <template #suffix>
                <n-icon>
                    <Search />
                </n-icon>
            </template>
            <template #clear-icon>
                <n-icon>
                    <trash-bin />
                </n-icon>
            </template>
        </n-input>
        <!-- <n-button type="primary" ghost> 搜索 </n-button> -->
    </n-input-group>
</template>
