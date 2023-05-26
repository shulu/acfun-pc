<script setup lang="ts">
import { Close, SquareOutline as Open, Remove } from '@vicons/ionicons5';
import { NIcon } from 'naive-ui';
</script>
<template>
    <n-button icon-placement="right" ghost secondary>
        <template #icon>
            <n-icon>
                <remove />
            </n-icon>
        </template>
    </n-button>
    <n-button icon-placement="right" ghost secondary>
        <template #icon>
            <n-icon>
                <open />
            </n-icon>
        </template>
    </n-button>
    <n-button icon-placement="right" ghost secondary>
        <template #icon>
            <n-icon>
                <close />
            </n-icon>
        </template>
    </n-button>
</template>
