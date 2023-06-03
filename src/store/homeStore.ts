/*
 * @Author: shulu
 * @Date: 2023-05-25 17:09:05
 * @LastEditors: shulu
 * @LastEditTime: 2023-06-03 21:49:52
 * @Description: file content
 * @FilePath: \acfun-pc\src\store\homeStore.ts
 */
import { HomeList } from '@/api';
import { IHomeGet, IRecommendList } from '@/models/HomeInterface';
import { defineStore } from 'pinia';
/**
 * ref() 就是 state 属性
 * computed() 就是 getters
 * function() 就是 actions
 */
export const useHomeStore = defineStore('homeStore', {
    state: () => {
        return {
            recommendList: [] as IRecommendList[],
            recommendCate: {} as IHomeGet,
        };
    },
    actions: {
        async getRecommendList() {
            const result = await HomeList(this.recommendCate);
            this.recommendList = result;
        },
    },
});
