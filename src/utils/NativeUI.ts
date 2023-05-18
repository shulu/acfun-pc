import {
    NButton,
    NLayout,
    NLayoutContent,
    NLayoutFooter,
    NLayoutHeader,
    NLayoutSider,
    NMenu,
    NSpace,
    NSwitch,
    create,
} from 'naive-ui';

const naive = create({
    components: [NButton, NSwitch, NMenu, NLayoutSider, NLayout, NSpace, NLayoutHeader, NLayoutContent, NLayoutFooter],
});

export default naive;
