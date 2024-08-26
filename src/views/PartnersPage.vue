<script setup>
import { ref, onMounted } from 'vue';
import { usePartnerStore } from '@/stores/partner';
import { lang } from '@/uitiles/currentLang';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import PartnerCard from '@/components/card/PartnerCard.vue';
import { useBreadCrumbsStore } from '@/stores/breadcrumbs';
import { useRoute } from 'vue-router';
import SidebarMenu from '@/components/menu/SidebarMenu.vue';
const breadCrumb = useBreadCrumbsStore();
const router = useRoute();
const slug = router.name;
const partnerStore = usePartnerStore();
const isLoad = ref(false);

onMounted(async () => {
    await Promise.all([
        partnerStore.fetchList(),
        breadCrumb.fetchList(slug)
    ])
    isLoad.value = true
})

</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breadCrumb.list" />
            <h2 v-if="isLoad">{{ breadCrumb.list?.parent?.child?.title }}</h2>
            <a-row :gutter="[20, 20]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <div class="committee-page__content">
                        <a-row :gutter="[15, 15]">
                            <a-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" v-for="item in partnerStore.list.data"
                                :key="item.id">
                                <PartnerCard :img="item.images" :title="item.title" :url="`/${lang}`" />
                            </a-col>
                        </a-row>
                    </div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <SidebarMenu :data="breadCrumb.list" />
                </a-col>
            </a-row>
        </div>
    </section>
</template>