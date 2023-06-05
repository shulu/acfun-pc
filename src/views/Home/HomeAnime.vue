<!--
 * @Author: shulu
 * @Date: 2023-05-22 09:43:13
 * @LastEditors: shulu
 * @LastEditTime: 2023-06-05 22:16:44
 * @Description: file content
 * @FilePath: \acfun-pc\src\views\Home\HomeAnime.vue
-->
<script setup lang="ts">
import { useAnimeStore } from '@/store/AnimeStore';
const AnimeStore = useAnimeStore();

AnimeStore.getCate();
AnimeStore.getContent();
</script>
<template>
    <n-layout>
        <n-layout-header>
            <n-list bordered :show-divider="false">
                <n-list-item v-for="cate in AnimeStore.sortCate">
                    <template #prefix>
                        <n-button text color="#999" disabled style="font-weight: 500">{{ cate.name }}: </n-button>
                    </template>
                    <n-space>
                        <n-button
                            round
                            v-for="sort in cate.children"
                            @click="AnimeStore.filterContent(cate.key, sort.key)"
                            :class="'btn-active' ? (AnimeStore.checkCate.order = sort.key) : ''"
                        >
                            {{ sort.name }}
                        </n-button>
                    </n-space>
                </n-list-item>
            </n-list>
        </n-layout-header>
        <n-layout-content style="margin-top: 24px">
            <n-grid cols="6" responsive="screen" :x-gap="20" :y-gap="25">
                <n-grid-item v-for="anime in AnimeStore.animeContent">
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
                        <n-layout-content>
                            <n-popover
                                trigger="hover"
                                :delay="100"
                                :flip="true"
                                placement="bottom-end"
                                :show-arrow="false"
                            >
                                <template #trigger>
                                    <div style="font-size: 1rem; font-weight: 500">
                                        <n-ellipsis :line-clamp="1" :tooltip="false">
                                            {{ anime.name }}
                                        </n-ellipsis>
                                    </div>
                                </template>
                                <span>{{ anime.name }}</span>
                            </n-popover>
                        </n-layout-content>
                        <n-layout-footer style="color: #999; font-weight: 400; font-size: 0.8rem"
                            >全{{ anime.episode }}话</n-layout-footer
                        >
                    </n-layout>
                </n-grid-item>
            </n-grid>
        </n-layout-content>
    </n-layout>
</template>
<style lang="scss" scoped>
@import '@/assets/scss/color.scss';
.btn-active {
    color: $active-anime-color;
    background-color: $active-back-color;
}
</style>
