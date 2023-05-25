<script setup lang="ts">
import { useHomeStore } from '@/store/homeStore';
import { List, Play } from '@vicons/ionicons5';
import { NIcon } from 'naive-ui';
import { onMounted, ref } from 'vue';
const store = useHomeStore();
const recommendList = ref([]);
onMounted(async () => {
    const result = await store.getListByCate();
    recommendList.value = result;
});
console.log(`output->recommendList`, recommendList);
</script>
<template>
    <n-grid cols="2 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen" :x-gap="20" :y-gap="30">
        <n-grid-item v-for="recommend in recommendList">
            <n-layout>
                <n-layout-header>
                    <n-image :src="recommend.image" object-fit="cover" style="border-radius: 0.3rem" />
                </n-layout-header>
                <n-layout-content>
                    <n-ellipsis style="max-width: 240px">
                        {{ recommend.title }}
                        <template #tooltip placement="bottom">
                            <div style="text-align: center">
                                {{ recommend.title }}<br />
                                UP:{{ recommend.author }}<br />
                                发布于2023-05-24 19:00:00 / 点击:{{ recommend.played }} / 评论:{{ recommend.danmu
                                }}<br />
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
                            {{ recommend.played }}
                        </n-button>
                        <n-button icon-placement="right" secondary strong ghost>
                            <template #icon>
                                <n-icon>
                                    <List />
                                </n-icon>
                            </template>
                            {{ recommend.danmu }}
                        </n-button>
                    </n-space>
                </n-layout-footer>
            </n-layout>
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
