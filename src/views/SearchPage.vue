<script setup>
import { ref, onMounted, watch } from 'vue';
import StaticBreadcrumb from '@/components/menu/StaticBreadcrumb.vue';
import { lang } from '@/uitiles/currentLang';
import { useI18n } from 'vue-i18n';
import { useSearchStore } from '@/stores/search';
import { useRoute } from 'vue-router';

const router = useRoute();
const { t } = useI18n();
const searchStore = useSearchStore();
const slug = ref(router.query.text);
const isLoad = ref(false);
const breads = [
    { label: t('home'), url: `/${lang}`, id: 1 },
    { label: t('searchResult'), id: 2 },
];
onMounted(async () => {
    await searchStore.fetchList(slug.value);
    isLoad.value = true;
})

watch(slug, async (newSlug) => {
    await socialStore.fetchList(newSlug)
});

</script>
<template>
    <section class="committee-page">
        <div class="container">
            <StaticBreadcrumb :data="breads" />
            <h2>{{ $t('searchResult') }}</h2>
            <!-- <pre>{{ searchStore.list }}</pre> -->
            <a-row :gutter="[24, 24]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <div class="committee-page__content">
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