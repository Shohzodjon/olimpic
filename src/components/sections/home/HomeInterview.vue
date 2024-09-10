<script setup>
import { ref, onMounted } from 'vue';
import { useInterviewStore } from '@/stores/interview';
import HomeGallery from '@/components/card/HomeGallery.vue'
import { lang } from '@/uitiles/currentLang';
const isLoad = ref(false);
const interviewStore = useInterviewStore();
onMounted(async () => {
    await interviewStore.fetchInterviewLimit();
    isLoad.value = true
})

</script>
<template>
    <section class="home-interview-section">
        <div class="container">
            <div class="home-interview-section__flex">
                <h2 class="home-interview-section__title">{{ $t('interview') }}</h2>
                <RouterLink :to="`/${lang}/interview`" class="home-interview-section__btn">
                    {{ $t('interviews') }}
                </RouterLink>
            </div>
            <a-row :gutter="[20, 20]" v-if="isLoad">
                <a-col :span="24" :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
                    <HomeGallery :img="interviewStore.listLimit[0]?.images"
                        :title="interviewStore.listLimit[0]?.title" :time="interviewStore.listLimit[0]?.created_at"
                        :url="`/${lang}/interview-slug/${interviewStore.listLimit[0]?.alias}`"
                        class="main-interview-card" />
                </a-col>
                <a-col :span="24" :xs="24" :sm="24" :md="10" :lg="10" :xl="10" class="home-interview-section__right-side">
                    <span v-for="(item, i) in interviewStore.listLimit" :key="item.id" v-show="i != 0">
                        <HomeGallery :img="item?.images" :title="item?.title"
                            :url="`/${lang}/interview-slug/${item?.alias}`" :time="item?.created_at" />
                    </span>
                </a-col>
            </a-row>
        </div>
    </section>
</template>