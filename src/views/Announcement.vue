<script setup>
import { ref, onMounted } from 'vue';
import { useMediaStore } from '@/stores/gallery';
import StaticBreadcrumb from '@/components/menu/StaticBreadcrumb.vue'
import NewsCard from '@/components/card/NewsCard.vue';
import { lang } from '@/uitiles/currentLang';
import { useI18n } from 'vue-i18n';
import { useImageStore } from '@/stores/setGray';
const imageStore = useImageStore();
const mediaStore = useMediaStore();
const { t } = useI18n();

const breads = [
    { label: t('home'), url: `/${lang}`, id: 1 },
    { label: t('announce'), id: 2, },

];

onMounted(async () => {
    await mediaStore.fetchAnnouncement();
})

</script>
<template>
    <section class="committee-page">
        <div class="container">
            <StaticBreadcrumb :data="breads" />
            <h2>{{ $t('announce') }}</h2>
            <a-row :gutter="[24, 24]">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <a-row :gutter="[20, 20]">
                        <a-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" v-for="item in mediaStore.announcement"
                            :key="item.id">
                            <NewsCard :data="item" :url="`/${lang}/announce-slug/${item.alias}`" />
                        </a-col>
                    </a-row>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <div class="committee-page__sidebar">
                        <div class="committee-page__sidebar-img">
                            <RouterLink :to="`/${lang}`">
                                <img src="@/assets/images/olimpic.png" alt="olimpic "
                                    :class="imageStore.isGray ? 'gary' : ''">
                            </RouterLink>
                        </div>
                    </div>
                </a-col>
            </a-row>
        </div>
    </section>
</template>