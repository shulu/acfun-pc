<!--
 * @Author: shulu
 * @Date: 2023-05-24 17:32:35
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-24 17:52:06
 * @Description: file content
 * @FilePath: /acfun-pc/src/components/Layout/Left/LeftTheme.vue
-->
<script setup lang="ts">
import { Moon, SunnyOutline } from '@vicons/ionicons5';
import { NIcon } from 'naive-ui';
import { CSSProperties, inject, ref } from 'vue';
const switchTheme = inject('switchTheme', () => {}, false);
const active = ref(false);
const railStyle = ({ focused, checked }: { focused: boolean; checked: boolean }) => {
    const style: CSSProperties = {};
    if (checked) {
        style.background = '#000';
        if (focused) {
            style.boxShadow = '0 0 0 2px #000';
        }
    } else {
        style.background = '#E0E0E0';
        if (focused) {
            style.boxShadow = '0 0 0 2px #E0E0E0';
        }
    }
    return style;
};
const handleSwitch = () => {
    active.value = !active.value;
    switchTheme();
};
</script>
<template>
    <n-switch
        v-model:value="active"
        size="medium"
        :round="false"
        style="position: absolute; bottom: 1rem; left: 0; right: 0"
        :rail-style="railStyle"
        :on-update:value="handleSwitch"
    >
        <template #checked-icon>
            <n-icon>
                <Moon />
            </n-icon>
        </template>
        <template #unchecked-icon>
            <n-icon>
                <SunnyOutline />
            </n-icon>
        </template>
    </n-switch>
</template>
