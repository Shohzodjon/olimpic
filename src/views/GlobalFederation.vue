<script setup>
import { ref, onMounted } from 'vue';
import { useFederationStore } from '@/stores/federation';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import AccardionFed from '@/components/dropdown/AccardionFed.vue';

const federationStore = useFederationStore();
const lang = localStorage.getItem('locale');
const isLoad = ref(false);
const activeKey = ref('1');
const breads = [
    { label: 'Home', url: `/${lang}`, id: 1 },
    { label: "Federatsiyalar", id: 2 },
    { label: "Xalqaro sport federatsiyalari", id: 3 },
];


onMounted(async () => {
    await federationStore.fetchInternational();
    isLoad.value=true;
})

</script>
<template>
    <section class="committee-page global-federation">
        <div class="container">
            <BreadCrump :data="breads" />
            <h2>Xalqaro sport federatsiyalari</h2>
            <a-row :gutter="[20, 20]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <a-row :gutter="[20, 20]">
                        <a-col :span="24">
                            <div class="global-federation__tab">
                                <a-tabs v-model:activeKey="activeKey">
                                    <a-tab-pane key="1" :tab="federationStore.international[0].title">
                                        <a-row :gutter="[24, 24]">
                                            <a-col :span="24" v-for="item in federationStore.international[0].children" :key="item.id">
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
                                            <a-col :span="24" v-for="item in federationStore.international[1].children" :key="item.id">
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