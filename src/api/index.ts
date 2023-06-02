/*
 * @Author: shulu
 * @Date: 2023-06-01 09:17:20
 * @LastEditors: shulu
 * @LastEditTime: 2023-06-02 11:26:49
 * @Description: file content
 * @FilePath: /acfun-pc/src/api/index.ts
 */
import request from '@/utils/Request';

import { IHomeGet } from '@/models/HomeInterface';

export const HomeList = (data: IHomeGet) => {
    return request({
        url: '/home/' + data.cate,
        method: 'get',
    });
};

export const LiveList = (data: IHomeGet) => {
    return request({
        url: '/live/' + data.cate,
        method: 'get',
    });
};

export const AnimeCate = () => {
    return request({
        url: '/anime-cate',
        method: 'get',
    });
};

export const AnimeContent = () => {
    return request({
        url: '/anime-content',
        method: 'get',
    });
};
