<script setup>
import { ref } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox/external-css';
import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import news1 from '@/assets/images/news1.jpg'
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
            <a-row :gutter="[20,20]">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <div class="video-slug__content">
                        <h3 class="video-slug__sub-title">Razambek Jamalov delegatsiyamiz hisobiga oltinchi oltin
                            medalni taqdim etgan finalning yorqin lahzalari</h3>
                        <div class="video-slug__card ">
                            <img :src="news1" />
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