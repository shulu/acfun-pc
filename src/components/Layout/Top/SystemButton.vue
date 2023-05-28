<script setup lang="ts">
import { Close, SquareOutline as Open, Remove } from '@vicons/ionicons5';
import { NIcon } from 'naive-ui';

const clickMinWindow = () => {
    sysBtnApi.minWindow();
};
const clickMaxWindow = () => {
    sysBtnApi.maxWindow();
};
const clickCloseWindow = () => {
    sysBtnApi.closeWindow();
};
</script>
<template>
    <n-button icon-placement="right" ghost secondary @click="clickMinWindow">
        <template #icon>
            <n-icon>
                <remove />
            </n-icon>
        </template>
    </n-button>
    <n-button icon-placement="right" ghost secondary @click="clickMaxWindow">
        <template #icon>
            <n-icon>
                <open />
            </n-icon>
        </template>
    </n-button>
    <n-button icon-placement="right" ghost secondary @click="clickCloseWindow">
        <template #icon>
            <n-icon>
                <close />
            </n-icon>
        </template>
    </n-button>
</template>
