<script setup lang="ts">
import { List, Play } from '@vicons/ionicons5';
import { NIcon } from 'naive-ui';
</script>
<template>
    <n-grid cols="2 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen" :x-gap="20" :y-gap="30">
        <n-grid-item>
            <n-layout>
                <n-layout-header>
                    <n-image
                        src="https://tx-free-imgs2.acfun.cn/kimg/EIfM1y8qOwoFYWNmdW4SBWltYWdlGis1MjY4NTBfYTMyNWE0YmFhZjU2NGE0YmI2ZTE1OWQwZjM0MWIwZWYuZ2lm.webp?x-oss-process=image/resize,m_fill,w_384,h_240"
                        object-fit="cover"
                        style="border-radius: 0.3rem"
                    />
                </n-layout-header>
                <n-layout-content>
                    <n-ellipsis style="max-width: 240px">
                        【特惠喜+1】阿紫！阿紫！阿紫！五月的第三期
                        <template #tooltip placement="bottom">
                            <div style="text-align: center">
                                【特惠喜+1】阿紫！阿紫！阿紫！五月的第三期<br />
                                UP:老绅<br />
                                发布于2023-05-24 19:00:00 / 点击:3226 / 评论:54<br />
                            </div>
                        </template>
                    </n-ellipsis>
                </n-layout-content>
                <n-layout-footer>
                    <n-space justify="space-evenly" align="start">
                        <n-button icon-placement="right" secondary strong ghost>
                            <template #icon>
                                <n-icon>
                                    <Play />
                                </n-icon>
                            </template>
                            4334
                        </n-button>
                        <n-button icon-placement="right" secondary strong ghost>
                            <template #icon>
                                <n-icon>
                                    <List />
                                </n-icon>
                            </template>
                            4334
                        </n-button>
                    </n-space>
                </n-layout-footer>
            </n-layout>
        </n-grid-item>
        <n-grid-item>
            <div class="green">2</div>
        </n-grid-item>
        <n-grid-item>
            <div class="light-green">3</div>
        </n-grid-item>
        <n-grid-item>
            <div class="green">4</div>
        </n-grid-item>
        <n-grid-item>
            <div class="light-green">5</div>
        </n-grid-item>
        <n-grid-item>
            <div class="green">6</div>
        </n-grid-item>
        <n-grid-item>
            <div class="light-green">7</div>
        </n-grid-item>
    </n-grid>
</template>
<style scoped lang="scss">
.light-green {
    height: 108px;
    background-color: rgba(0, 128, 0, 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
}
.green {
    height: 108px;
    background-color: rgba(0, 128, 0, 0.24);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
