<!--
 * @Author: shulu
 * @Date: 2023-05-21 20:59:05
 * @LastEditors: shulu
 * @LastEditTime: 2023-06-03 22:01:34
 * @Description: file content
 * @FilePath: \acfun-pc\src\views\Home\HomeLive.vue
-->
<script setup lang="ts">
import { useLiveStore } from '@/store/liveStore';
import { HeartOutline, PeopleOutline } from '@vicons/ionicons5';
import { NIcon } from 'naive-ui';
import { ref, watch } from 'vue';
const liveStore = useLiveStore();
liveStore.liveCate = { cate: 'recommend' };
liveStore.getLiveListByCate();
watch(
    () => liveStore.liveCate,
    async () => {
        liveStore.getLiveListByCate();
    },
    { immediate: true },
);
const handleClick = (activeKey: string) => {
    activeBtn.value = activeKey;
    liveStore.liveCate = { cate: activeKey };
};
const activeBtn = ref('recommend');
</script>
<template>
    <n-space style="margin-bottom: 24px">
        <n-button
            :bordered="false"
            @click="handleClick(btn.key)"
            :color="activeBtn == btn.key ? '#fdecf1' : '#fff'"
            :text-color="activeBtn == btn.key ? '#f56a9b' : '#000'"
            v-for="btn in liveStore.cateList"
        >
            {{ btn.title }}
        </n-button>
    </n-space>
    <n-grid cols="4 m:4 l:5" responsive="screen" :x-gap="20" :y-gap="20" v-if="liveStore.liveList.length > 0">
        <n-grid-item v-for="recommend in liveStore.liveList">
            <n-layout>
                <n-layout-header>
                    <a href="#" style="display: inline-block; position: relative">
                        <n-badge value="直播中" :max="15" :offset="[-30, 17]">
                            <n-image
                                :src="recommend.cover_image"
                                object-fit="cover"
                                preview-disabled
                                style="border-radius: 0.3rem; width: 100%"
                                :img-props="{ style: { width: '100%' } }"
                            />
                        </n-badge>
                        <div class="badge-out">
                            <div class="badge-inner">
                                <div>
                                    <n-icon>
                                        <HeartOutline />
                                    </n-icon>
                                    {{ recommend.like }}
                                </div>
                                <div>
                                    <n-icon>
                                        <PeopleOutline />
                                    </n-icon>
                                    {{ recommend.user }}
                                </div>
                            </div>
                        </div>
                    </a>
                </n-layout-header>
                <n-layout-content content-style="margin-top:10px">
                    <n-space style="height: 100%" :size="24" align="center">
                        <n-image
                            :src="recommend.author_image"
                            object-fit="fill"
                            preview-disabled
                            width="40"
                            style="border-radius: 50%"
                        />
                        <n-space vertical>
                            <n-ellipsis style="max-width: 240px">
                                {{ recommend.title }}
                            </n-ellipsis>
                            <n-button text color="#ff69b4">
                                <template #icon>
                                    <n-icon>
                                        <PeopleOutline />
                                    </n-icon>
                                </template>
                                {{ recommend.author }}
                            </n-button>
                        </n-space>
                    </n-space>
                </n-layout-content>
            </n-layout>
        </n-grid-item>
    </n-grid>
    <n-empty size="large" description="可以是大的" v-else>
        <template #extra>
            <n-button size="small"> 看看别的 </n-button>
        </template>
    </n-empty>
</template>
<style lang="scss" scoped>
.badge-out {
    position: absolute;
    bottom: 0;
    left: 0;
    color: #fff;
    display: flex;
    gap: 10px;
    width: 100%;

    .badge-inner {
        display: flex;
        width: 100%;
        flex: 1;
        margin-left: 8px;
        margin-bottom: 8px;
        gap: 10px;
    }
}
</style>
