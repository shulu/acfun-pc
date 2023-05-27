/*
 * @Author: shulu
 * @Date: 2023-05-18 22:59:54
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-20 17:28:54
 * @Description: file content
 * @FilePath: \acfun-pc\src\utils\NativeUI.ts
 */
import {
    NBadge,
    NButton,
    NConfigProvider,
    NDivider,
    NEllipsis,
    NEmpty,
    NGi,
    NGrid,
    NGridItem,
    NImage,
    NInput,
    NInputGroup,
    NLayout,
    NLayoutContent,
    NLayoutFooter,
    NLayoutHeader,
    NLayoutSider,
    NMenu,
    NPopover,
    NResult,
    NSpace,
    NSwitch,
    NTab,
    NTabs,
    NTooltip,
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
        NInputGroup,
        NInput,
        NGrid,
        NGridItem,
        NGi,
        NDivider,
        NConfigProvider,
        NEllipsis,
        NTooltip,
        NPopover,
        NBadge,
    ],
});

export default naive;
