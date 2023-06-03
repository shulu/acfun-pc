/*
 * @Author: shulu
 * @Date: 2023-05-25 17:09:05
 * @LastEditors: shulu
 * @LastEditTime: 2023-06-03 21:39:45
 * @Description: file content
 * @FilePath: \acfun-pc\src\store\AnimeStore.ts
 */
import { AnimeCate, AnimeContent } from '@/api';
import { IAnimeCates, IAnimeContent } from '@/models/HomeInterface';
import { defineStore } from 'pinia';

/**
 * ref() 就是 state 属性
 * computed() 就是 getters
 * function() 就是 actions
 */
export const useAnimeStore = defineStore('animeStore', {
    state: () => {
        return {
            sortCate: [] as IAnimeCates[],
            animeContent: [] as IAnimeContent[],
            checkCate: {
                order: '',
                status: '',
                area: '',
                style: '',
                year: '',
                part: '',
            },
        };
    },
    actions: {
        async getCate() {
            const result = await AnimeCate();
            this.sortCate = result;
        },
        async getContent() {
            const result = await AnimeContent();
            this.animeContent = result;
        },
    },
});
