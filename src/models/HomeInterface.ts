/*
 * @Author: shulu
 * @Date: 2023-05-25 17:22:08
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-25 18:01:45
 * @Description: file content
 * @FilePath: /acfun-pc/src/models/HomeInterface.ts
 */
export interface IHomeList {
    cate: String;
    title: String;
    image: String;
    author: String;
    played: Number;
    danmu: Number;
}

export interface IHomeGet {
    cate: String;
}
