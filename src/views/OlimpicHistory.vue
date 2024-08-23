<script setup>
import { ref, onMounted, watch } from 'vue';
import { useStaticStore } from '@/stores/staticPages';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import { useRoute } from 'vue-router';
import SidebarMenu from '@/components/menu/SidebarMenu.vue';

const staticStore = useStaticStore();
const router = useRoute();
const slug = ref(router.query.alias);
const isLoad = ref(false);
const breads = ref([
    { label: 'Home', url: '/:en', id: 1 },
    { label: "Olimpiya o'yinlari", id: 2 },
    { label: "O’yinlar tarixi", id: 3 },
]);

onMounted(async () => {
    await staticStore.fetchStatic(slug.value);
    isLoad.value = true;
});
watch(() => router.query.alias, async (newAlias) => {
    slug.value = newAlias;
    await staticStore.fetchStatic(slug.value);
});

const data = [
    {
        title: 'Home', children: [
            { title: 'About1', link: 'static-page' },
            { title: 'About2', link: 'static-page' },
            { title: 'About3', link: 'static-page' },
        ]
    },
    {
        title: 'About', children: [
            { title: 'About1', link: 'static-page' },
            { title: 'About2', link: 'static-page' },
            { title: 'About3', link: 'static-page' },
        ]
    },
    {
        title:'Contact'
    }
]
</script>
<template>
    <section class="committee-page">
        <div class="container" v-if="isLoad">
            <BreadCrump :data="breads" />
            <h2>{{ staticStore.data?.title }}</h2>
            <a-row :gutter="[20, 20]">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <div class="committee-page__content" v-html="staticStore.data?.short_content"></div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <div class="committee-page__sidebar"> 
                        <div class="committee-page__sidebar-menu">
                            <SidebarMenu :data="data" />
                        </div>
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