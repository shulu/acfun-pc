<!--
 * @Author: shulu
 * @Date: 2023-05-22 09:43:13
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-31 11:42:47
 * @Description: file content
 * @FilePath: /acfun-pc/src/views/Home/HomeAnime.vue
-->
<script setup lang="ts">
import { useAnimeStore } from '@/store/AnimeStore';
import { onMounted, ref } from 'vue';

const { getCate } = useAnimeStore();

const sortCate = ref([]);
onMounted(async () => {
    const result = await getCate();
    sortCate.value = result;
});
</script>
<template>
    <n-layout>
        <n-layout-header>
            <n-list bordered :show-divider="false">
                <n-list-item v-for="cate in sortCate">
                    <template #prefix>
                        <n-button text color="#ff69b4" disabled>{{ cate.name }}: </n-button>
                    </template>
                    <n-space>
                        <n-button round v-for="sort in cate.children">{{ sort.name }}</n-button>
                    </n-space>
                </n-list-item>
            </n-list>
        </n-layout-header>
        <n-layout-content content-style="padding: 24px;">
            <n-grid cols="6" responsive="screen">
                <n-grid-item>
                    <div class="light-green">1</div>
                </n-grid-item>
                <n-grid-item>
                    <div class="green">2</div>
                </n-grid-item>
                <n-grid-item>
                    <div class="light-green">3</div>
                </n-grid-item>
                <n-grid-item>
                    <div class="green">4</div>
                </n-grid-item>
                <n-grid-item>
                    <div class="light-green">5</div>
                </n-grid-item>
                <n-grid-item>
                    <div class="green">6</div>
                </n-grid-item>
                <n-grid-item>
                    <div class="light-green">7</div>
                </n-grid-item>
            </n-grid>
        </n-layout-content>
    </n-layout>
</template>
