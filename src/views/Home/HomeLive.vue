<!--
 * @Author: shulu
 * @Date: 2023-05-21 20:59:05
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-27 21:14:35
 * @Description: file content
 * @FilePath: \acfun-pc\src\views\Home\HomeLive.vue
-->
<script setup lang="ts">
import { useHomeStore } from '@/store/homeStore';
import { List, Play } from '@vicons/ionicons5';
import { NIcon } from 'naive-ui';
import { onMounted, ref } from 'vue';
const store = useHomeStore();
store.cate = { cate: 'recommend' };
const list = ref([]);
onMounted(async () => {
    const result = await store.getListByCate();
    list.value = result;
});
const handleClick = () => {
    activeBtn.value = 'recommend';
};
const activeBtn = ref('recommend');
</script>
<template>
    <n-space style="margin-bottom: 24px">
        <n-button
            :bordered="false"
            @click="handleClick"
            :color="activeBtn == 'recommend' ? '#fdecf1' : '#fff'"
            :text-color="activeBtn == 'recommend' ? '#f56a9b' : '#000'"
        >
            推荐
        </n-button>
    </n-space>
    <n-grid cols="4 m:4 l:5" responsive="screen" :x-gap="20" :y-gap="20" v-if="list.length > 0">
        <n-grid-item v-for="recommend in list">
            <n-layout>
                <n-layout-header>
                    <a href="#">
                        <n-image
                            :src="recommend.image"
                            object-fit="cover"
                            preview-disabled
                            style="border-radius: 0.3rem; width: 100%"
                            :img-props="{ style: { width: '100%' } }"
                        />
                    </a>
                </n-layout-header>
                <n-layout-content>
                    <n-popover trigger="hover" :delay="100" :flip="true" placement="bottom-end" :show-arrow="false">
                        <template #trigger>
                            <div>
                                <n-ellipsis :line-clamp="1" :tooltip="false">
                                    {{ recommend.title }}
                                </n-ellipsis>
                            </div>
                        </template>
                        <span>{{ recommend.title }}</span>
                    </n-popover>
                </n-layout-content>
                <n-layout-footer>
                    <n-space justify="space-evenly" align="start" :wrap="true">
                        <n-button icon-placement="left" secondary strong ghost disabled>
                            <template #icon>
                                <n-icon>
                                    <Play />
                                </n-icon>
                            </template>
                            {{ recommend.played }}
                        </n-button>
                        <n-button icon-placement="right" secondary strong ghost disabled>
                            <template #icon>
                                <n-icon>
                                    <List />
                                </n-icon>
                            </template>
                            {{ recommend.danmu }}
                        </n-button>
                    </n-space>
                </n-layout-footer>
            </n-layout>
        </n-grid-item>
    </n-grid>
    <n-empty size="large" description="可以是大的" v-else>
        <template #extra>
            <n-button size="small"> 看看别的 </n-button>
        </template>
    </n-empty>
</template>
