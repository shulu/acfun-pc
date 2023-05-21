<script setup lang="ts">
import { TrashBin } from '@vicons/ionicons5';
import { NIcon } from 'naive-ui';
</script>
<template>
    <n-input-group>
        <n-input type="text" placeholder="搜索感兴趣内容" :maxlength="8" clearable>
            <template #clear-icon>
                <n-icon>
                    <trash-bin />
                </n-icon>
            </template>
        </n-input>
        <n-button type="primary" ghost> 搜索 </n-button>
    </n-input-group>
</template>
