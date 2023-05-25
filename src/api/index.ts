import request from '@/utils/Request';

import { IHomeGet } from '@/models/HomeInterface';

export const HomeList = (data: IHomeGet) => {
    return request({
        url: '/home/' + data.cate,
        method: 'get',
    });
};
