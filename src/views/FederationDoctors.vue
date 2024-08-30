<script setup>
import { ref, onMounted } from 'vue';
import { useFederationStore } from '@/stores/federation';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import Accardion from '@/components/dropdown/Accardion.vue'
import { useBreadCrumbsStore } from '@/stores/breadcrumbs';
import { useRoute } from 'vue-router';
import SidebarMenu from '@/components/menu/SidebarMenu.vue';
import { useImageStore } from '@/stores/setGray';
const imageStore = useImageStore();
const isLoad = ref(false);
const breadCrumb = useBreadCrumbsStore();
const router = useRoute();
const slug = router.name;
const federationStore = useFederationStore();

onMounted(async () => {
    await Promise.all([
        federationStore.fetchDoctors(),
        breadCrumb.fetchList(slug)
    ])
    isLoad.value = true;
})


</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breadCrumb.list" />
            <h2 v-if="isLoad">{{ breadCrumb.list?.parent?.child?.title }}</h2>
            <a-row :gutter="[24, 24]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <a-row :gutter="[20, 20]">
                        <a-col v-for="item in federationStore.doctors" :key="item.id" :span="24">
                            <Accardion :data="item">
                                <template #accardion-card>
                                    <div class="employ-card" v-for="child in item?.children" :key="child.id">
                                        <div class="employ-card__img">
                                            <img :src="child.images" alt="employ img"   :class="imageStore.isGray?'gary':''">
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
                    <SidebarMenu :data="breadCrumb.list" />
                </a-col>
            </a-row>
        </div>
    </section>
</template>