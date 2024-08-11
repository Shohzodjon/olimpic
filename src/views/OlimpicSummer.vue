<script setup>
import BreadCrump from '@/components/menu/BreadCrump.vue';
import OlimpicCard from '@/components/card/OlimpicCard.vue'
import summer from '@/assets/images/summer.svg'
const breads = [
    { label: 'Home', url: '/:en', id: 1 },
    { label: "Olimpiya o'yinlari", id: 2 },
    { label: "Yozgi Olimpiya o'yinlari", id: 3 },
];

const olimpicData = [
  { title: 'Suv sporti', season: 'Yozgi', img: summer, id: 1 },
  { title: 'Suv sporti', season: 'Yozgi', img: summer, id: 2 },
  { title: 'Suv sporti', season: 'Yozgi', img: summer, id: 3 },
  { title: 'Suv sporti', season: 'Yozgi', img: summer, id: 4 },
  { title: 'Suv sporti', season: 'Yozgi', img: summer, id: 5 },
  { title: 'Suv sporti', season: 'Yozgi', img: summer, id: 6 },
  { title: 'Suv sporti', season: 'Yozgi', img: summer, id: 7 },
  { title: 'Suv sporti', season: 'Yozgi', img: summer, id: 8 },
  { title: 'Suv sporti', season: 'Yozgi', img: summer, id: 9 },
  { title: 'Suv sporti', season: 'Yozgi', img: summer, id: 10 },
  { title: 'Suv sporti', season: 'Yozgi', img: summer, id: 11 },
  { title: 'Suv sporti', season: 'Yozgi', img: summer, id: 12 },
];



</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breads" />
            <h2>Yozgi Olimpiya o'yinlari</h2>
            <a-row :gutter="24">
                <a-col :span="19">
                    <div class="committee-page__content">
                   <a-row :gutter="[20,20]">
                    <a-col :span="8" v-for="item in olimpicData" :key="item.id">
                        <OlimpicCard  :title="item.title" :season="item.season"
                        :img="item.img">
                        <template #season-icon><img src="@/assets/images/sun-icon.svg" width="24" height="24" /></template>
                      </OlimpicCard>
                    </a-col>
                   </a-row>
                    </div>
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