<script setup>
import { computed } from 'vue';
import { HomeOutlined } from '@ant-design/icons-vue'
// import { lang } from '@/uitiles/currentLang';
defineProps({
    data: {
        type: Array,
        default:[]
    },

});
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
.bread__crumb{
    margin-bottom: 1.5rem;
}
.ant-breadcrumb-link {
    font-size: 1.7rem;
    color: var(--gray-800)!important;
    font-weight: 500;
}
.ant-breadcrumb-separator{
    color: var(--gray-800)!important;
}
.ant-breadcrumb-link a {
    color: var(--gray-800)!important;
    background: none !important;
}
.ant-breadcrumb-link a:hover {
    color: var(--gray-800)!important;
    background: none !important;
}

.ant-breadcrumb-link svg {
    font-size: 1.8rem;
    color: var(--gray-800)!important;
}

@media (max-width:768px) {
    .ant-breadcrumb-link {
        font-size: 1.5rem;
    }
}
</style>