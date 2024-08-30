<script setup>
import { ref, onMounted, watch } from 'vue';
import { useStaticStore } from '@/stores/staticPages';
import { useBreadCrumbsStore } from '@/stores/breadcrumbs';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import { useRoute } from 'vue-router';
import SidebarMenu from '@/components/menu/SidebarMenu.vue';
import { useImageStore } from '@/stores/setGray';
const imageStore = useImageStore();

const staticStore = useStaticStore();
const breadCrumb = useBreadCrumbsStore();
const router = useRoute();
const slug = ref(router.query.alias);
const isLoad = ref(false);

onMounted(async () => {
    await Promise.all([
        staticStore.fetchStatic(slug.value),
        breadCrumb.fetchList(slug.value)
    ]);
    isLoad.value = true;
});
watch(() => router.query.alias, async (newAlias) => {
    slug.value = newAlias;
    await Promise.all([
        staticStore.fetchStatic(slug.value),
        breadCrumb.fetchList(slug.value)
    ]);
});


</script>
<template>
    <section class="committee-page">
        <div class="container" v-if="isLoad">
            <BreadCrump :data="breadCrumb.list" />
            <h2>{{ staticStore.data?.title }}</h2>
            <a-row :gutter="[20, 20]">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <div class="committee-page__content" v-html="staticStore.data?.short_content" :class="imageStore.isGray?'gray':''"></div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                       <SidebarMenu :data="breadCrumb.list"/>
                </a-col>
            </a-row>
        </div>
    </section>
</template>