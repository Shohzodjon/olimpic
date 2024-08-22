<script setup>
// import { defineProps } from 'vue';
import { ClockCircleOutlined } from '@ant-design/icons-vue';
defineProps({
    data: { type: Object, default: null },
    url:{type:String, default:'/en'}
})
</script>
<template>
    <RouterLink :to="url" class="news-card">
        <div class="news-card__img">
            <img :src="data?.images" alt="news img">
        </div>
        <div class="news-card__info">
            <p>{{ data?.title }}</p>
            <span>
                <ClockCircleOutlined /> {{ data?.created_at }}
            </span>
        </div>
    </RouterLink>
</template>