/*
 * @Author: shulu
 * @Date: 2023-05-18 22:59:54
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-31 11:06:34
 * @Description: file content
 * @FilePath: /acfun-pc/src/utils/NativeUI.ts
 */
import {
    NBadge,
    NButton,
    NCard,
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
    NList,
    NListItem,
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
        NList,
        NListItem,
        NCard,
    ],
});

export default naive;
