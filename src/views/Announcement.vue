<script setup>
import { ref, onMounted } from 'vue';
import { useMediaStore } from '@/stores/gallery';
import { useBreadCrumbsStore } from '@/stores/breadcrumbs';
import { useRoute } from 'vue-router';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import NewsCard from '@/components/card/NewsCard.vue';
import { lang } from '@/uitiles/currentLang';
const mediaStore = useMediaStore();
const router = useRoute();
const slug = router.query.alias;
const breadCrumb = useBreadCrumbsStore();
console.log(router.query.alias)
const breads = [
    { label: 'Home', url: `/${lang}`, id: 1 },
    { label: "Elonlar", id: 2, },

];

onMounted(async () => {
    await mediaStore.fetchAnnouncement();
    await breadCrumb.fetchList(slug)
})

</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breads" />
            <h2>Elonlar</h2>
            <pre>{{ breadCrumb.list }}</pre>
            <a-row :gutter="[20, 20]">
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