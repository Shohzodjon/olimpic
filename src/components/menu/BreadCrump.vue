<script setup>
import { computed } from 'vue';
import { HomeOutlined } from '@ant-design/icons-vue'
import { lang } from '@/uitiles/currentLang';
const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
   
});
const breadcrumbItems = computed(() => {
    const items = [{
        id: 'home',
        label: 'Home',
        url: `/${lang}`
    }];

    if (props.data.parent) {
        items.push({
            id: props.data.parent.id,
            label: props.data.parent.title,
        });
    }

    if (props.data.parent?.child) {
        items.push({
            id: props.data.parent.child.id,
            label: props.data.parent.child.title,
        });
    }

    return items;
});


</script>
<template>
    <a-breadcrumb class="bread__crumb">
        <a-breadcrumb-item v-for="(item, index) in breadcrumbItems" :key="item.id">
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