<script setup>
import BreadCrump from '@/components/menu/BreadCrump.vue';
import PartnerCard from '@/components/card/PartnerCard.vue'
import generation from '@/assets/images/generation.png'
const breads = [
    { label: 'Home', url: '/:en', id: 1 },
    { label: "Olimpiya o'yinlari", id: 2 },
    { label: "O‘smirlar Olimpiya o'yinlari", id: 3 },
];

const olimpicData = [
    { title: 'Singapur - 2010', img: generation, id: 1 },
    { title: 'Nankin - 2014', img: generation, id: 2 },
    { title: 'Buenos-Ayres - 2018', img: generation, id: 3 },
    { title: 'Singapur - 2010', img: generation, id: 4 },
    { title: 'Nankin - 2014', img: generation, id: 5 },
    { title: 'Singapur - 2010', img: generation, id: 7 },
    { title: 'Buenos-Ayres - 2018', img: generation, id: 8 },
];



</script>
<template>
    <section class="committee-page olimpic-generation">
        <div class="container">
            <BreadCrump :data="breads" />
            <h2>O‘smirlar Olimpiya o'yinlari</h2>
            <a-row :gutter="24">
                <a-col :span="19">
                        <a-row :gutter="[20, 20]">
                            <a-col :span="8" v-for="item in olimpicData" :key="item.id">
                                <PartnerCard :img="item.img" :title="item.title" class="olimpic-generation__card" />
                            </a-col>
                        </a-row>
                </a-col>
                <a-col :span="5">
                    <div class="committee-page__sidebar">
                        <div class="committee-page__sidebar-menu">Menu</div>
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