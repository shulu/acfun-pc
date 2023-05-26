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
</script>
<template>
    <n-grid cols="2 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen" :x-gap="20" :y-gap="30" v-if="recommendList.length > 0">
        <n-grid-item v-for="recommend in recommendList">
            <n-layout>
                <n-layout-header>
                    <a href="#">
                        <n-image
                            :src="recommend.image"
                            object-fit="fill"
                            width="320"
                            style="border-radius: 0.3rem"
                            preview-disabled
                        />
                    </a>
                </n-layout-header>
                <n-layout-content>
                    <n-tooltip placement="bottom" trigger="hover">
                        <template #trigger>
                            <n-ellipsis style="max-width: 240px">
                                {{ recommend.title }}
                            </n-ellipsis>
                        </template>
                        <span> I wish they all could be California girls </span>
                    </n-tooltip>
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
    <n-empty size="large" description="可以是大的" v-else>
        <template #extra>
            <n-button size="small"> 看看别的 </n-button>
        </template>
    </n-empty>
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
