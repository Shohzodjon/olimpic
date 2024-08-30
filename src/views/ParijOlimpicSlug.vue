<script setup>
import { ref, onMounted } from 'vue';
import { useLicenseesStore } from '@/stores/licensees';
import { useBreadCrumbsStore } from '@/stores/breadcrumbs';
import { useRoute } from 'vue-router';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import SidebarMenu from '@/components/menu/SidebarMenu.vue';
const licenseesStore = useLicenseesStore();
const isLoad = ref(false);
const router = useRoute();
const breadCrumb = useBreadCrumbsStore();
const infoId = router.params.id;
const alias = localStorage.getItem('last-alias');
onMounted(async () => {
    await Promise.all([
        licenseesStore.fetchDetail(infoId),
        breadCrumb.fetchList(alias)
    ])
    isLoad.value = true;
})
</script>
<template>
    <section class="news-slug">
        <div class="container">
            <BreadCrump :data="breadCrumb.list" />
            <a-row :gutter="[24, 24]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <div class="news-slug__content">
                        <h2>{{ licenseesStore.detail?.title }}</h2>
                        <p>{{ licenseesStore.detail?.content }}</p>
                        <div v-html="licenseesStore.detail?.short_content"></div>
                    </div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <SidebarMenu :data="breadCrumb.list" />
                </a-col>
            </a-row>
        </div>
    </section>
</template>