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
