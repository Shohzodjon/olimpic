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
    { label: "Video", id: 2, url: '/oz/video' },
];

</script>
<template>
    <section class="video-slug">
        <div class="container">
            <BreadCrump :data="breads" />
            <h2 class="video-slug__title">Videolar</h2>
            <a-row :gutter="24">
                <a-col :span="19">
                    <div class="video-slug__content">
                        <h3 class="video-slug__sub-title">Razambek Jamalov delegatsiyamiz hisobiga oltinchi oltin
                            medalni taqdim etgan finalning yorqin lahzalari</h3>
                        <div class="video-slug__card ">
                            <img :src="news1" />
                        </div>
                    </div>
                </a-col>
                <a-col :span="5">
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