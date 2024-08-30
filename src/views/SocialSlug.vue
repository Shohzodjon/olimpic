<script setup>
import { ref, onMounted } from 'vue';
import { useSocialStore } from '@/stores/social';
import { useRoute } from 'vue-router';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import { ClockCircleOutlined, EyeOutlined } from '@ant-design/icons-vue';
import { useBreadCrumbsStore } from '@/stores/breadcrumbs';
import SidebarMenu from '@/components/menu/SidebarMenu.vue';
import SocialShare from '@/components/social/SocialShare.vue';

const socialStore = useSocialStore();
const breadCrumb = useBreadCrumbsStore();
const router = useRoute();
const isLoad = ref(false);
const alias = localStorage.getItem('last-alias');
const slug = router.params.id;
const currentUrl = ref('')
onMounted(async () => {
    await Promise.all([
        socialStore.fetchDetail(slug),
        breadCrumb.fetchList(alias)
    ])
    isLoad.value = true;
    currentUrl.value = window.location.href
})
</script>
<template>
    <section class="news-slug">
        <div class="container">
            <BreadCrump :data="breadCrumb.list" />
            <h2 v-if="isLoad">{{ socialStore.detail?.title }}</h2>
            <a-row :gutter="[24, 24]" v-if="isLoad" :style="{ marginTop: '20px' }">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <div class="news-slug__content">
                        <div class="news-slug__flex">
                            <div class="news-slug__time">
                                <ClockCircleOutlined /> <span>{{ socialStore.detail.created_at }}</span>
                            </div>

                            <SocialShare :url="currentUrl" :title="socialStore.detail.title"
                                :description="socialStore.detail.title" />
                            <div class="news-slug__statistic">
                                <EyeOutlined /> <span>{{ socialStore.detail.views }}</span>
                            </div>

                        </div>
                        <div v-html="socialStore.detail.content"></div>
                    </div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <SidebarMenu :data="breadCrumb.list" />
                </a-col>
            </a-row>
        </div>
    </section>
</template>