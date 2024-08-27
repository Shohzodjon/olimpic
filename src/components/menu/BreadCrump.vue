<script setup>
import { computed } from 'vue';
import { HomeOutlined } from '@ant-design/icons-vue'
import { lang } from '@/uitiles/currentLang';
import { useI18n } from 'vue-i18n';

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },

});
const { t } = useI18n();

const breadcrumbItems = computed(() => {
    const items = [{
        id: 'home',
        label: t('home'),
        url: `/${lang}`
    }];
    if (props.data?.parent !=null) {
        items.push({
            id: props.data.parent[0]?.id,
            label: props.data.parent[0]?.title,
        });
    }
    if (props.data?.child) {
        items.push({
            id: props.data?.child.id,
            label: props.data?.child.title,
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
.bread__crumb{
    margin-bottom: 1.5rem;
}
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