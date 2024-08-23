<script setup>
import { ref, onMounted } from 'vue';
import { useFederationStore } from '@/stores/federation';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import AccardionFed from '@/components/dropdown/AccardionFed.vue';
import { lang } from '@/uitiles/currentLang';
const federationStore = useFederationStore();
const isLoad = ref(false);
const breads = [
    { label: 'Home', url: `/${lang}`, id: 1 },
    { label: "Federatsiyalar", id: 2 },
    { label: "O’zbekiston sport federatsiyalari", id: 3 },
];

onMounted(async () => {
    await federationStore.fetchLocal();
    isLoad.value = true;
})

</script>
<template>
    <section class="committee-page local-federation">
        <div class="container">
            <BreadCrump :data="breads" />
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