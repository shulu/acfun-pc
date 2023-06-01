<script setup lang="ts">
import { IRecommendList } from '@/models/HomeInterface';
import { useHomeStore } from '@/store/homeStore';
import { List, People, Play } from '@vicons/ionicons5';
import { NIcon } from 'naive-ui';
import { onMounted, ref } from 'vue';
const store = useHomeStore();
store.cate = { cate: 'recommend' };
const list = ref<IRecommendList[] | []>([]);
onMounted(async () => {
    const result = await store.getListByCate();
    list.value = result;
});
</script>
<template>
    <n-grid cols="4 m:4 l:5" responsive="screen" :x-gap="20" :y-gap="20" v-if="list.length > 0">
        <n-grid-item v-for="recommend in list">
            <n-layout>
                <n-layout-header>
                    <a href="#" style="display: inline-block; position: relative">
                        <n-image
                            :src="recommend.image"
                            object-fit="cover"
                            preview-disabled
                            style="border-radius: 0.3rem; width: 100%"
                            :img-props="{ style: { width: '100%' } }"
                        />
                        <div class="float-recommend-info">
                            <div class="float-recommend-inner-info">
                                <div>
                                    <n-icon>
                                        <Play />
                                    </n-icon>
                                    {{ recommend.played }}
                                </div>
                                <div>
                                    <n-icon>
                                        <List />
                                    </n-icon>
                                    {{ recommend.danmu }}
                                </div>
                            </div>
                            <div style="margin-right: 10px">3</div>
                        </div>
                    </a>
                </n-layout-header>
                <n-layout-content>
                    <n-popover trigger="hover" :delay="100" :flip="true" placement="bottom-end" :show-arrow="false">
                        <template #trigger>
                            <div style="font-size: 1rem; font-weight: 500">
                                <n-ellipsis :line-clamp="1" :tooltip="false">
                                    {{ recommend.title }}
                                </n-ellipsis>
                            </div>
                        </template>
                        <span>{{ recommend.title }}</span>
                    </n-popover>
                </n-layout-content>
                <n-layout-footer style="background-color: transparent">
                    <n-space justify="start" align="start">
                        <n-button text color="#ff69b4" class="video-btn">
                            <template #icon>
                                <n-icon>
                                    <People />
                                </n-icon>
                            </template>
                            <span>
                                {{ recommend.author }}
                            </span>
                            <span style="margin: 0 4px 0 4px">·</span>
                            <span>5-8</span>
                        </n-button>
                    </n-space>
                </n-layout-footer>
            </n-layout>
        </n-grid-item>
    </n-grid>
    <n-empty size="large" description="可以是大的" v-else>
        <template #extra>
            <n-button size="small"> 看看别的 </n-button>
        </template>
    </n-empty>
</template>
<style scoped lang="scss">
@import '@/assets/scss/color.scss';

.video-btn {
    color: $video-up-color;

    &:hover {
        transition: color 0.2s linear;
        color: $hover-text-color;
    }
}
.float-recommend-info {
    position: absolute;
    bottom: 0;
    left: 0;
    color: #fff;
    display: flex;
    gap: 10px;
    width: 100%;

    .float-recommend-inner-info {
        display: flex;
        width: 100%;
        flex: 1;
        margin-left: 8px;
        margin-bottom: 8px;
        gap: 10px;
    }
}
</style>
