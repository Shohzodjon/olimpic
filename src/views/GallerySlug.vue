<script setup>
import { ref } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox/external-css';
import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import news1 from '@/assets/images/news1.jpg'
import news2 from '@/assets/images/news2.jpg'
import news3 from '@/assets/images/news3.jpg'
const breads = [
    { label: 'Home', url: '/oz', id: 1 },
    { label: "Media galereya", id: 2, url: '/oz/gallery' },
];
const images = [news1, news2, news3];
const visibleRef = ref(false)
const indexRef = ref(0)
const showImg = (index) => {
    indexRef.value = index
    visibleRef.value = true
}
const onHide = () => visibleRef.value = false
</script>
<template>
    <section class="gallery-slug">
        <div class="container">
            <BreadCrump :data="breads" />
            <h2 class="gallery-slug__title">Media galereya</h2>
            <a-row :gutter="[20, 20]">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <div class="gallery-slug__content">
                        <h3 class="gallery-slug__sub-title">Razambek Jamalov delegatsiyamiz hisobiga oltinchi oltin
                            medalni taqdim etgan finalning yorqin lahzalari</h3>
                        <a-row :gutter="[20, 20]">
                            <a-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" v-for="(img, i) in images" :key="i">
                                <div class="gallery-slug__card pic" @click="() => showImg(i)">
                                    <div class="pic">
                                        <img :src="img" />
                                    </div>

                                </div>
                            </a-col>
                        </a-row>
                        <vue-easy-lightbox :visible="visibleRef" :imgs="images" :index="indexRef"
                            @hide="onHide"></vue-easy-lightbox>
                    </div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <div class="gallery-slug__sidebar">
                        <div class="gallery-slug__sidebar-img">
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