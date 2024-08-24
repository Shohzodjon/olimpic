<script setup>
import { ref, onMounted } from 'vue';
import { useFederationStore } from '@/stores/federation';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import AccardionFed from '@/components/dropdown/AccardionFed.vue';
import { useBreadCrumbsStore } from '@/stores/breadcrumbs';
import { useRoute } from 'vue-router';
import SidebarMenu from '@/components/menu/SidebarMenu.vue';
const federationStore = useFederationStore();
const breadCrumb = useBreadCrumbsStore();
const router = useRoute();
const slug = router.name;
const isLoad = ref(false);


onMounted(async () => {
    await Promise.all([
        federationStore.fetchLocal(),
        breadCrumb.fetchList(slug)
    ])
    isLoad.value = true;
})

</script>
<template>
    <section class="committee-page local-federation">
        <div class="container">
            <BreadCrump :data="breadCrumb.list" />
            <h2>O’zbekiston sport federatsiyalari</h2>
            <a-row :gutter="[20, 20]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <a-row :gutter="[20, 20]">
                        <a-col v-for="item in federationStore.local" :key="item.id" :span="24">
                            <AccardionFed :data="item">
                                <template #accardion-card>
                                    <div class="local-federation__card" v-html="item.content">
                                    </div>
                                </template>
                            </AccardionFed>
                        </a-col>
                    </a-row>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <SidebarMenu :data="breadCrumb.list" />
                </a-col>
            </a-row>
        </div>
    </section>
</template>