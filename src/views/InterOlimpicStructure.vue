<script setup>
import { ref, onMounted } from 'vue';
import { useGlobalArenaStore } from '@/stores/globalArena';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import { lang } from '@/uitiles/currentLang';
const activeKey = ref('1');

const isLoad = ref(false);
const globalArenaStore = useGlobalArenaStore();
const breads = [
    { label: 'Home', url: `/${lang}`, id: 1 },
    { label: "Federatsiyalar", id: 2 },
    { label: "XOQ tuzilmasi", id: 3 },
];

onMounted(async () => {
    await globalArenaStore.fetchStructure();
    isLoad.value=true
})

</script>
<template>
    <section class="committee-page global-federation">
        <div class="container">
            <BreadCrump :data="breads" />
            <h2>XOQ tuzilmasi</h2>
            <a-row :gutter="[20, 20]">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <a-row :gutter="[20, 20]" v-if="isLoad">
                        <a-col :span="24">
                            <div class="global-federation__tab">
                                <a-tabs v-model:activeKey="activeKey">
                                    <a-tab-pane key="1" tab="XOQ prezidentlari" >
                                        <div v-html="globalArenaStore.structure[0].content"></div>
                                    </a-tab-pane>
                                    <a-tab-pane key="2" tab="Ijroiya qomitasi">
                                        <div v-html="globalArenaStore.structure[1].content"></div>
                                    </a-tab-pane>
                                    <a-tab-pane key="3" tab="Doimiy komissiya">
                                        <div v-html="globalArenaStore.structure[2].content"></div>
                                    </a-tab-pane>
                                </a-tabs>
                            </div>
                        </a-col>
                    </a-row>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <div class="committee-page__sidebar">
                        <div class="committee-page__sidebar-menu">Menu</div>
                        <div class="committee-page__sidebar-img">
                            <RouterLink to="/:en">
                                <img src="@/assets/images/olimpic.png" alt="olimpic ">
                            </RouterLink>
                        </div>
                    </div>
                </a-col>
            </a-row>
        </div>
    </section>
</template>