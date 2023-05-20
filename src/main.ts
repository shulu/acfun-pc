/*
 * @Author: shulu
 * @Date: 2023-05-18 21:05:56
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-18 22:58:27
 * @Description: file content
 * @FilePath: \acfun-pc\src\main.ts
 */

import '@/assets/scss/base.scss';
import naive from '@/utils/NativeUI';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.use(naive);
app.mount('#app');
