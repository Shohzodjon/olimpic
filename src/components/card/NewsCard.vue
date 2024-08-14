<script setup>
// import { defineProps } from 'vue';
import { ClockCircleOutlined } from '@ant-design/icons-vue';
defineProps({
    data: { type: Object, default: null },
    url:{type:String, default:'/:en'}
})
</script>
<template>
    <RouterLink :to="url" class="news-card">
        <div class="news-card__img">
            <img :src="data?.img" alt="news img">
        </div>
        <div class="news-card__info">
            <p>{{ data?.desc }}</p>
            <span>
                <ClockCircleOutlined /> {{ data?.time }}
            </span>
        </div>
    </RouterLink>
</template>