<script setup>
import { ref, onMounted } from 'vue';
import { useLicenseesStore } from '@/stores/licensees';
import { useRoute } from 'vue-router';
import BreadCrump from '@/components/menu/BreadCrump.vue';

const  licenseesStore= useLicenseesStore();
const isLoad = ref(false);
const router = useRoute();
const infoId = router.params.id;
const breads = [
    { label: 'Home', url: '/:en', id: 1 },
    { label: "Yangiliklar", id: 2, url: '/oz/news' },
];

onMounted(async () => {
    await licenseesStore.fetchDetail(infoId);
    isLoad.value = true;
})
</script>
<template>
    <section class="news-slug">
        <div class="container">
            <BreadCrump :data="breads" />
            <a-row :gutter="[20, 20]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <div class="news-slug__content">
                        <h2>{{ licenseesStore.detail.title }}</h2>
                        <div v-html="licenseesStore.detail.content"></div>
                    </div>
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