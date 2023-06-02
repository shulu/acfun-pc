/*
 * @Author: shulu
 * @Date: 2023-05-25 17:09:05
 * @LastEditors: shulu
 * @LastEditTime: 2023-06-02 11:36:45
 * @Description: file content
 * @FilePath: /acfun-pc/src/store/AnimeStore.ts
 */
import { AnimeCate, AnimeContent } from '@/api';
import { IAnimeCates, IAnimeContent } from '@/models/HomeInterface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

/**
 * ref() 就是 state 属性
 * computed() 就是 getters
 * function() 就是 actions
 */
export const useAnimeStore = defineStore('animeStore', () => {
    const sortCate = ref<IAnimeCates[] | []>([]);
    const animeContent = ref<IAnimeContent[] | []>([]);
    async function getCate() {
        const result = await AnimeCate();
        sortCate.value = result;
    }
    async function getContent() {
        const result = await AnimeContent();
        animeContent.value = result;
    }
    return { animeContent, sortCate, getCate, getContent };
});
