<script setup>
import { ref, onMounted } from 'vue';
import { useGlobalArenaStore } from '@/stores/globalArena';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import { useBreadCrumbsStore } from '@/stores/breadcrumbs';
import { useRoute } from 'vue-router';
import SidebarMenu from '@/components/menu/SidebarMenu.vue';
const activeKey = ref('1');

const isLoad = ref(false);
const globalArenaStore = useGlobalArenaStore();
const breadCrumb = useBreadCrumbsStore();
const router = useRoute();
const slug = router.name;


onMounted(async () => {
    await Promise.all([
        globalArenaStore.fetchStructure(),
        breadCrumb.fetchList(slug)
    ])
    isLoad.value = true
})

</script>
<template>
    <section class="committee-page global-federation">
        <div class="container">
            <BreadCrump :data="breadCrumb.list" />
            <h2 v-if="isLoad">{{ breadCrumb.list?.parent?.child?.title }}</h2>
            <a-row :gutter="[24, 24]">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <a-row :gutter="[20, 20]" v-if="isLoad">
                        <a-col :span="24">
                            <div class="global-federation__tab">
                                <a-tabs v-model:activeKey="activeKey">
                                    <a-tab-pane key="1" tab="XOQ prezidentlari">
                                        <div v-html="globalArenaStore.structure[0]?.content"></div>
                                    </a-tab-pane>
                                    <a-tab-pane key="2" tab="Ijroiya qomitasi">
                                        <div v-html="globalArenaStore.structure[1]?.content"></div>
                                    </a-tab-pane>
                                    <a-tab-pane key="3" tab="Doimiy komissiya">
                                        <div v-html="globalArenaStore.structure[2]?.content"></div>
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