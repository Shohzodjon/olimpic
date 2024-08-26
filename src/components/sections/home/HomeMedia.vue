<script setup>
import { ref, onMounted } from 'vue';
import { useMediaStore } from '@/stores/gallery';
import HomeGallery from '@/components/card/HomeGallery.vue'
import { lang } from '@/uitiles/currentLang';

const currentTab = ref('photo');
const isLoad = ref(false)
const mediaStore = useMediaStore();
onMounted(async () => {
    await Promise.all([
        mediaStore.galleryList(),
        mediaStore.videoList()
    ]);
    isLoad.value = true
})


const tabClick = (tab) => {
    currentTab.value = tab;
}
</script>
<template>
    <section class="home-media">
        <div class="container">
            <div class="home-media__flex">
                <h2 class="home-media__title">Mediafayl</h2>
                <div class="custom-tab">
                    <button @click="tabClick('photo')"
                        :class="[currentTab == 'photo' ? 'active-tab' : '']">Fotogalareya</button>
                    <button @click="tabClick('video')"
                        :class="[currentTab != 'photo' ? 'active-tab' : '']">Videogalareya</button>
                </div>
            </div>
            <div v-if="isLoad">
                <a-row :gutter="[20, 20]" v-if="currentTab == 'photo'">
                    <a-col :sm="24" :md="12" :lg="12" :xl="12">
                        <HomeGallery :img="mediaStore.gallery[0]?.images[0]" :title="mediaStore.gallery[0]?.title"
                            :time="mediaStore.gallery[0]?.created_at" class="main-interview-card" :url="`/${lang}/gallery`" />
                    </a-col>
                    <a-col :sm="24" :md="12" :lg="12" :xl="12" class="home-media__right-side">
                        <HomeGallery v-for="(item, i) in mediaStore.gallery" v-show="i != 0" :key="item.id"
                            :img="item.images[0]" :title="item.title" :time="item.created_at" :url="`/${lang}/gallery`" />
                    </a-col>
                </a-row>
                
                <a-row :gutter="[20, 20]" v-if="currentTab == 'video'">
                    <a-col :sm="24" :md="12" :lg="12" :xl="12">
                        <HomeGallery :img="mediaStore.video[0]?.images" :title="mediaStore.video[0]?.title"
                            :time="mediaStore.video[0]?.created_at" :url="`/${lang}/video`" class="main-interview-card"  />
                    </a-col>
                    <a-col :sm="24" :md="12" :lg="12" :xl="12" class="home-media__right-side">
                        <HomeGallery v-for="(item, i) in mediaStore.video" v-show="i != 0" :key="item.id"
                            :img="item.images" :title="item?.title" :time="item?.created_at" :url="`/${lang}/video`" />
                    </a-col>
                </a-row>
            </div>

        </div>
    </section>

</template>