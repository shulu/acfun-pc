/*
 * @Author: shulu
 * @Date: 2023-05-18 22:59:54
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-20 17:28:54
 * @Description: file content
 * @FilePath: \acfun-pc\src\utils\NativeUI.ts
 */
import {
    NButton,
    NEmpty,
    NImage,
    NLayout,
    NLayoutContent,
    NLayoutFooter,
    NLayoutHeader,
    NLayoutSider,
    NMenu,
    NResult,
    NSpace,
    NSwitch,
    NTab,
    NTabs,
    create,
} from 'naive-ui';

const naive = create({
    components: [
        NButton,
        NSwitch,
        NMenu,
        NLayoutSider,
        NLayout,
        NSpace,
        NLayoutHeader,
        NLayoutContent,
        NLayoutFooter,
        NTab,
        NTabs,
        NImage,
        NEmpty,
        NResult,
    ],
});

export default naive;
