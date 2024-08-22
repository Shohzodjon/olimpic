<script setup>
import { HomeOutlined } from '@ant-design/icons-vue'
// import { defineProps } from 'vue';

defineProps({
    data: { type: Array, default: [] },
})

</script>
<template>
    <a-breadcrumb class="bread__crumb">
        <a-breadcrumb-item v-for="(item, index) in data" :key="item.id">
            <template v-if="item.url">
                <template v-if="index === 0">
                    <HomeOutlined />
                </template>
                <RouterLink :to="item.url">{{ item.label }}</RouterLink>
            </template>
            <template v-else>{{ item.label }}</template>
        </a-breadcrumb-item>
    </a-breadcrumb>
</template>
<style>
.ant-breadcrumb-link {
    font-size: 1.7rem;
    color: #717b83 !important;
    font-weight: 500;
}

.ant-breadcrumb-link a:hover {
    color: #717b83;
    background: none !important;
}

.ant-breadcrumb-link svg {
    font-size: 1.8rem;
    color: #717b83;
}

@media (max-width:768px) {
    .ant-breadcrumb-link {
        font-size: 1.5rem;
    }   
}
</style>