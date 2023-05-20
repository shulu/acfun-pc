<script setup lang="ts">
import acfunLogoSmall from '@/assets/logo/acfun-logo-small.svg';
import acfunLogo from '@/assets/logo/acfun-logo.svg';

import { toRefs } from 'vue';
const props = defineProps({
    collapsed: Boolean,
});

const { collapsed } = toRefs(props);
</script>
<template>
    <n-image
        object-fit="contain"
        :src="collapsed ? acfunLogoSmall : acfunLogo"
        preview-disabled
        height="89"
        :width="collapsed ? 64 : 120"
    />
</template>
