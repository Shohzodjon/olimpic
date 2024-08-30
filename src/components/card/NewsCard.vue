<script setup>
import { computed } from 'vue';
import { ClockCircleOutlined } from '@ant-design/icons-vue';
import { lang } from '@/uitiles/currentLang';
import { useImageStore } from '@/stores/setGray';
const imageStore = useImageStore();
const props = defineProps({
    data: { type: Object, default: null },
    url: { type: String, default: `/${lang}` }
})

const imageSrc = computed(() => {
    if (Array.isArray(props.data?.images)) {
        return props.data.images[0]
    }
    return props.data?.images;
});
</script>
<template>
    <RouterLink :to="url" class="news-card">
        <div class="news-card__img">
            <img :src="imageSrc" alt="news img" :class="imageStore.isGray ? 'gray' : ''">
        </div>
        <div class="news-card__info">
            <p>{{ props.data?.title }}</p>
            <span>
                <ClockCircleOutlined /> {{ props.data?.created_at }}
            </span>
        </div>
    </RouterLink>
</template>