/*
 * @Author: shulu
 * @Date: 2023-05-25 17:22:08
 * @LastEditors: shulu
 * @LastEditTime: 2023-06-02 11:30:50
 * @Description: file content
 * @FilePath: /acfun-pc/src/models/HomeInterface.ts
 */
export interface IRecommendList {
    cate: string;
    title: string;
    image: string;
    author: string;
    played: number;
    danmu: number;
}

export interface IHomeGet {
    cate: String;
}

export interface ILiveList {
    cate: string;
    title: string;
    cover_image: string;
    author_image: string;
    author: string;
    like: number;
    user: number;
}

export interface IAnimeCate {
    name: string;
    key: string;
}

export interface IAnimeCates {
    name: string;
    key: string;
    children: Array<IAnimeCate>;
}

export interface IAnimeContent {
    id: number;
    name: string;
    episode: number;
    cover: string;
    played: number;
    area: string;
    year: number;
    part: number;
    order: string;
    is_free: boolean;
    status: string;
    next_episode_date: string;
}
