/*
 * @Author: shulu
 * @Date: 2023-05-25 17:09:05
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-25 18:44:20
 * @Description: file content
 * @FilePath: /acfun-pc/src/store/homeStore.ts
 */
import { HomeList } from '@/api';
import { IHomeGet, IHomeList } from '@/models/HomeInterface';
import { defineStore } from 'pinia';
import { ref } from 'vue';
/**
 * ref() 就是 state 属性
 * computed() 就是 getters
 * function() 就是 actions
 */
export const useHomeStore = defineStore('homeStore', () => {
    const list = ref<IHomeList | []>([]);
    const cate = ref<IHomeGet>({ cate: 'recommend' });
    async function getListByCate() {
        const result = await HomeList(cate.value);
        return result;
    }
    return { list, cate, getListByCate };
});
