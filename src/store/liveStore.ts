/*
 * @Author: shulu
 * @Date: 2023-05-25 17:09:05
 * @LastEditors: shulu
 * @LastEditTime: 2023-06-03 21:57:12
 * @Description: file content
 * @FilePath: \acfun-pc\src\store\liveStore.ts
 */
import { LiveList } from '@/api';
import { IHomeGet, ILiveList } from '@/models/HomeInterface';
import { defineStore } from 'pinia';
/**
 * ref() 就是 state 属性
 * computed() 就是 getters
 * function() 就是 actions
 */
export const useLiveStore = defineStore('liveStore', {
    state: () => {
        return {
            liveList: [] as ILiveList[],
            cateList: [
                {
                    key: 'recommend',
                    title: '推荐',
                },
                {
                    key: 'live2d',
                    title: '虚拟偶像',
                },
                {
                    key: 'game',
                    title: '游戏',
                },
                {
                    key: 'enter',
                    title: '娱乐',
                },
                {
                    key: 'mobile',
                    title: '手游',
                },
            ],
            liveCate: {} as IHomeGet,
        };
    },
    actions: {
        async getLiveListByCate() {
            const result = await LiveList(this.liveCate);
            return (this.liveList = result);
        },
    },
});
