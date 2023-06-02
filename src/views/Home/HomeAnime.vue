<!--
 * @Author: shulu
 * @Date: 2023-05-22 09:43:13
 * @LastEditors: shulu
 * @LastEditTime: 2023-06-02 11:41:38
 * @Description: file content
 * @FilePath: /acfun-pc/src/views/Home/HomeAnime.vue
-->
<script setup lang="ts">
import { useAnimeStore } from '@/store/AnimeStore';
import { onMounted } from 'vue';
const { getCate, sortCate, getContent, animeContent } = useAnimeStore();

onMounted(async () => {
    await getCate();
    await getContent();
});
</script>
<template>
    <n-layout>
        <n-layout-header>
            <n-list bordered :show-divider="false">
                <n-list-item v-for="cate in sortCate">
                    <template #prefix>
                        <n-button text color="#999" disabled style="font-weight: 500">{{ cate.name }}: </n-button>
                    </template>
                    <n-space>
                        <n-button round v-for="sort in cate.children">{{ sort.name }}</n-button>
                    </n-space>
                </n-list-item>
            </n-list>
        </n-layout-header>
        <n-layout-content content-style="padding: 24px;">
            <n-grid cols="6" responsive="screen">
                <n-grid-item v-for="anime in animeContent">
                    <n-layout>
                        <n-layout-header>
                            <n-image
                                :src="anime.cover"
                                object-fit="cover"
                                preview-disabled
                                style="border-radius: 0.3rem; width: 100%"
                                :img-props="{ style: { width: '100%' } }"
                            />
                        </n-layout-header>
                        <n-layout-content content-style="padding: 24px;">{{ anime.name }}</n-layout-content>
                        <n-layout-footer>成府路</n-layout-footer>
                    </n-layout>
                </n-grid-item>
            </n-grid>
        </n-layout-content>
    </n-layout>
</template>
