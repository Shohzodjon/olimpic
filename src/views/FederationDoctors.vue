<script setup>
import { ref, onMounted } from 'vue';
import { useFederationStore } from '@/stores/federation';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import Accardion from '@/components/dropdown/Accardion.vue'
import { lang } from '@/uitiles/currentLang';
const isLoad = ref(false);
const federationStore = useFederationStore();

const breads = [
    { label: 'Home', url: `/${lang}`, id: 1 },
    { label: "Tibbiyot markazi", id: 2 },
    { label: "Federatsiya shifokorlari", id: 3 },
];

onMounted(async () => {
    await federationStore.fetchDoctors();
    isLoad.value = true;
})


</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breads" />
            <h2>Federatsiya shifokorlari</h2>
            <a-row :gutter="[20, 20]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <a-row :gutter="[20, 20]">
                        <a-col v-for="item in federationStore.doctors" :key="item.id" :span="24">
                            <Accardion :data="item">
                                <template #accardion-card>
                                    <div class="employ-card" v-for="child in item?.children" :key="child.id">
                                        <div class="employ-card__img">
                                            <img :src="child.images" alt="employ img">
                                        </div>
                                        <div class="employ-card__info">
                                            <h3>{{ child.title }}</h3>
                                            <div v-html="child.short_content"></div>
                                            <span v-if="reception"> <b>Qabul kunlari : </b> {{ reception }}</span>
                                        </div>
                                    </div>
                                </template>
                            </Accardion>
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