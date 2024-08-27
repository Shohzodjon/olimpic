<script setup>
import { ref, onMounted } from 'vue';
import { useMediaStore } from '@/stores/gallery';
import { useRoute } from 'vue-router';
import BreadCrump from '@/components/menu/BreadCrump.vue';
const breads = [
    { label: 'Home', url: '/oz', id: 1 },
    { label: "Video", id: 2, url: '/oz/video' },
];

const router = useRoute();
const slug = router.params.id;
const galleryStore = useMediaStore();
const isLoad = ref(false);
onMounted(async () => {
    await galleryStore.fetchVideoDetail(slug);
    isLoad.value = true;
})
</script>
<template>
    <section class="video-slug">
        <div class="container">
            <BreadCrump :data="breads" />
            <h2 class="video-slug__title">{{ $t('videos') }}</h2>
            <a-row :gutter="[20, 20]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <div class="video-slug__content">
                        <h3 class="video-slug__sub-title">{{ galleryStore.videoDetail.title }}</h3>
                        <div class="video-slug__card " v-html="galleryStore.videoDetail.content">
                        </div>
                    </div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <div class="video-slug__sidebar">
                        <div class="video-slug__sidebar-img">
                            <RouterLink to="/en">
                                <img src="@/assets/images/olimpic.png" alt="olimpic ">
                            </RouterLink>

                        </div>
                    </div>
                </a-col>
            </a-row>
        </div>
    </section>
</template>