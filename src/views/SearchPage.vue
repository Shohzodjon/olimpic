<script setup>
import { ref, onMounted, watch } from 'vue';
import StaticBreadcrumb from '@/components/menu/StaticBreadcrumb.vue';
import { lang } from '@/uitiles/currentLang';
import { useI18n } from 'vue-i18n';
import { useSearchStore } from '@/stores/search';
import { RouterLink, useRoute } from 'vue-router';
import { useImageStore } from '@/stores/setGray';
const imageStore = useImageStore();
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
            <a-row :gutter="[24, 24]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <div class="committee-page__content">
                        <h3 v-if="searchStore.list.data.length == 0">{{ $t('notFound') }}</h3>
                        <RouterLink :to="`/${lang}${item.key_link}`" v-for="item in searchStore.list.data"
                            :key="item.id" class="search__result__title" v-html="item.title"></RouterLink>
                    </div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <div class="committee-page__sidebar">
                        <div class="committee-page__sidebar-img">
                            <RouterLink :to="`/${lang}`">
                                <img src="@/assets/images/olimpic.png" alt="olimpic "
                                    :class="imageStore.isGray ? 'gray' : ''">
                            </RouterLink>
                        </div>
                    </div>
                </a-col>
            </a-row>
        </div>
    </section>
</template>
<style>
.search__result__title {
    margin: 8px 0;
    padding-bottom: 4px;
    border-bottom: 1px solid #b0b0b0;
    color: var(--black-900);
    display: block;
}

.search__result__title:hover {
    color: var(--black-900);
}

.search__result__title .highlight {
    color: red !important;
}
</style>