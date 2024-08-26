<script setup>
import { ref, onMounted } from 'vue';
import { useLicenseesStore } from '@/stores/licensees';
import { useRoute } from 'vue-router';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import StaticBreadcrumb from '@/components/menu/StaticBreadcrumb.vue';
import { lang } from '@/uitiles/currentLang';
import { useI18n } from 'vue-i18n';
const licenseesStore = useLicenseesStore();
const {t}=useI18n()
const isLoad = ref(false);
const router = useRoute();
const infoId = router.params.id;
const breads = [
    { label:t('home'), url:`/${lang}`, id: 1 },
    { label: "Parij-2024", id: 2, },
    { label: "Parij - 2024 Olimpiadasi litsenziatlari", id: 3, url: `/${lang}/licensees` },
];

onMounted(async () => {
    await licenseesStore.fetchDetail(infoId);
    isLoad.value = true;
})
</script>
<template>
    <section class="news-slug">
        <div class="container">
            <StaticBreadcrumb :data="breads" />
            <a-row :gutter="[20, 20]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <div class="news-slug__content">
                        <h2>{{ licenseesStore.detail.title }}</h2>
                        <div v-html="licenseesStore.detail.content"></div>
                    </div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <div class="committee-page__sidebar">
                        <div class="committee-page__sidebar-img">
                            <RouterLink :to="`/${lang}`">
                                <img src="@/assets/images/olimpic.png" alt="olimpic ">
                            </RouterLink>

                        </div>
                    </div>
                </a-col>
            </a-row>
        </div>
    </section>
</template>