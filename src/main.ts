/*
 * @Author: shulu
 * @Date: 2023-05-18 21:05:56
 * @LastEditors: shulu
 * @LastEditTime: 2023-06-01 09:55:03
 * @Description: file content
 * @FilePath: /acfun-pc/src/main.ts
 */
// 通用字体
import 'vfonts/Lato.css';
// 等宽字体
import '@/assets/scss/base.scss';
import router from '@/router/router';
import naive from '@/utils/NativeUI';
import 'vfonts/FiraCode.css';

import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);
app.use(naive);
app.use(router);
app.use(pinia);
app.mount('#app');
