<script setup>
import { ref, onMounted } from 'vue';
import { useFederationStore } from '@/stores/federation';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import AccardionFed from '@/components/dropdown/AccardionFed.vue';
import { useBreadCrumbsStore } from '@/stores/breadcrumbs';
import { useRoute } from 'vue-router';
import { useImageStore } from '@/stores/setGray';
import SidebarMenu from '@/components/menu/SidebarMenu.vue';
const federationStore = useFederationStore();
const isLoad = ref(false);
const breadCrumb = useBreadCrumbsStore();
const router = useRoute();
const slug = router.name;
const activeKey = ref('1');
const imageStore = useImageStore();



onMounted(async () => {
    await Promise.all([
        federationStore.fetchInternational(),
        breadCrumb.fetchList(slug)
    ])
    isLoad.value = true;
  
})

</script>
<template>
    <section class="committee-page global-federation">
        <div class="container">
            <BreadCrump :data="breadCrumb.list" />
            <h2 v-if="isLoad">{{ breadCrumb.list?.child?.title }}</h2>
            <a-row :gutter="[24, 24]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <a-row :gutter="[20, 20]">
                        <a-col :span="24">
                            <div class="global-federation__tab">
                                <a-tabs v-model:activeKey="activeKey">
                                    <a-tab-pane key="1" :tab="federationStore.international[0].title">
                                        <a-row :gutter="[24, 24]">
                                            <a-col :span="24" v-for="item in federationStore.international[0].children"
                                                :key="item.id">
                                                <AccardionFed :data="item">
                                                    <template #accardion-card>
                                                        <div class="local-federation__card" v-html="item.content">
                                                        </div>
                                                    </template>
                                                </AccardionFed>
                                            </a-col>
                                        </a-row>
                                    </a-tab-pane>
                                    <a-tab-pane key="2" :tab="federationStore.international[1].title">
                                        <a-row :gutter="[20, 20]">
                                            <a-col :span="24" v-for="item in federationStore.international[1].children"
                                                :key="item.id">
                                                <AccardionFed :data="item">
                                                    <template #accardion-card>
                                                        <div class="local-federation__card" v-html="item.content">
                                                        </div>
                                                    </template>
                                                </AccardionFed>
                                            </a-col>
                                        </a-row>
                                    </a-tab-pane>
                                </a-tabs>
                            </div>
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
<style>

</style>