<script setup>
import { ref, onMounted, watch } from 'vue';
import { useLicenseesStore } from '@/stores/licensees';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import NewsCard from '@/components/card/NewsCard.vue';
import { lang } from '@/uitiles/currentLang';
import { useBreadCrumbsStore } from '@/stores/breadcrumbs';
import { useRoute } from 'vue-router';
import { useImageStore } from '@/stores/setGray';
const imageStore = useImageStore();

import SidebarMenu from '@/components/menu/SidebarMenu.vue';

const breadCrumb = useBreadCrumbsStore();
const router = useRoute();
const slug = router.name;
const licenseesStore = useLicenseesStore();
const isLoad = ref(false);
const current = ref(1);

onMounted(async () => {
    await Promise.all([
        licenseesStore.fetchLicensees(current.value),
        breadCrumb.fetchList(slug)
    ])
    isLoad.value = true;
    localStorage.setItem('last-alias', slug)
})

watch(current, async (newPage) => {
    await licenseesStore.fetchLicensees(newPage)
});
const paginationFunc = async (pageNum) => {
    current.value = pageNum;
};
</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breadCrumb.list" />
            <h2 v-if="isLoad">{{ breadCrumb.list?.parent?.child?.title }}</h2>
            <a-row :gutter="[24, 24]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <a-row :gutter="[20, 20]">
                        <a-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" v-for="item in licenseesStore.licensees?.data"
                            :key="item.id">
                            <RouterLink :to="`/${lang}/licensees-slug/${item.alias}`" class="news-card parij__olimpic">
                                <div class="news-card__img">
                                    <img :src="item.images" alt="news img" :class="imageStore.isGray ? 'gray' : ''">
                                </div>
                                <div class="news-card__info">
                                    <p>{{ item?.title }}</p>
                                    <span>{{ item.content }}</span>
                                </div>
                            </RouterLink>
                        </a-col>
                    </a-row>
                    <a-pagination v-model:current="current" :total="licenseesStore.licensees?.meta?.total"
                        show-less-items @click="paginationFunc" />
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <SidebarMenu :data="breadCrumb.list" />
                </a-col>
            </a-row>
        </div>
    </section>
</template>
<style lang="scss">
.parij__olimpic {
    padding: 22.5px;

    .news-card__img {
        height: 300px;

        img {
            object-fit: inherit;
            width: 100%;
            height: 100%;
        }
    }

    .news-card__info {
        text-align: center;

        span {
            font-size: 1.8rem;
            color: var(--gray-900);
        }
    }

}

@media (max-width:991px) {
    .parij__olimpic {
        padding: 22px;
        .news-card__info {
            span {
                font-size: 1.4rem;
            }
        }

    }
}
</style>