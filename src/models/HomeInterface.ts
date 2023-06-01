/*
 * @Author: shulu
 * @Date: 2023-05-25 17:22:08
 * @LastEditors: shulu
 * @LastEditTime: 2023-06-01 10:06:52
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

export interface IAnimeCate {
    name: string;
    key: string;
}

export interface IAnimeCates {
    name: string;
    key: string;
    children: Array<IAnimeCate>;
}
