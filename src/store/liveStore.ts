/*
 * @Author: shulu
 * @Date: 2023-05-25 17:09:05
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-28 17:48:30
 * @Description: file content
 * @FilePath: \acfun-pc\src\store\liveStore.ts
 */
import { LiveList } from '@/api';
import { IHomeGet, IHomeList } from '@/models/HomeInterface';
import { defineStore } from 'pinia';
import { ref } from 'vue';
/**
 * ref() 就是 state 属性
 * computed() 就是 getters
 * function() 就是 actions
 */
export const useLiveStore = defineStore('liveStore', () => {
    const list = ref<IHomeList | []>([]);
    const cate = ref<IHomeGet>({ cate: 'recommend' });
    async function getListByCate() {
        const result = await LiveList(cate.value);
        return result;
    }
    return { list, cate, getListByCate };
});
