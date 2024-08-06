<script setup>
import HomeHeader from '@/components/header/HomeHeader.vue';
import HomeBanner from '@/components/sections/home/HomeBanner.vue'
import HomeNews from '@/components/sections/home/HomeNews.vue';
import HomeInterview from '@/components/sections/home/HomeInterview.vue'
import HomeMedia from '@/components/sections/home/HomeMedia.vue';
import PartnerCard from '@/components/card/PartnerCard.vue';
import OlimpicCard from '@/components/card/OlimpicCard.vue';
import partner1 from '@/assets/images/partner1.png';
import partner2 from '@/assets/images/partner2.png';
import partner3 from '@/assets/images/partner3.png';
import partner4 from '@/assets/images/partner4.png';
import summer from '@/assets/images/summer.svg';
import sun from '@/assets/images/sun-icon.svg';
import { RightOutlined } from '@ant-design/icons-vue'
import BreadCrump from '@/components/menu/BreadCrump.vue';
const partnerList = [
  { img: partner1, title: 'Hamkor', id: 1, url: '/:ru' },
  { img: partner2, title: 'Hamkor', id: 2, url: '/:ru' },
  { img: partner3, title: 'Hamkor', id: 3, url: '/:ru' },
  { img: partner4, title: 'Hamkor', id: 4, url: '/:ru' },
  { img: partner1, title: 'Hamkor', id: 5, url: '/:ru' },
  { img: partner2, title: 'Hamkor', id: 6, url: '/:ru' },
  { img: partner3, title: 'Hamkor', id: 7, url: '/:ru' },
  { img: partner4, title: 'Hamkor', id: 8, url: '/:ru' },
]

const olimpicData = [
  { title: 'Suv sporti', season: 'Yozgi', img: summer, id: 1 },
  { title: 'Suv sporti', season: 'Yozgi', img: summer, id: 2 },
  { title: 'Suv sporti', season: 'Yozgi', img: summer, id: 3 },
  { title: 'Suv sporti', season: 'Yozgi', img: summer, id: 4 },
  { title: 'Suv sporti', season: 'Yozgi', img: summer, id: 5 },
  { title: 'Suv sporti', season: 'Yozgi', img: summer, id: 6 },
  { title: 'Suv sporti', season: 'Yozgi', img: summer, id: 7 },
];

const breadCrumb = [
  { label: 'Home', url: '/:en', id: 1 },
  { label: 'About', id: 2 },
  { label: 'Contact', id: 3 },
]

</script>
<template>
  <section class="home-page">
    <HomeHeader />
    <HomeBanner />
    <HomeNews />
    <section class="home-page__strategy"></section>
    <HomeInterview />
    <div class="container">
      <div class="home-page__banner">
        <img src="@/assets/images/home-banner.png" alt="home banner">
      </div>
    </div>
    <HomeMedia />
    <section class="home-page__partner">
      <div class="container">
        <h2>Harakatni qo'llab-quvvatlash</h2>
        <Vue3Marquee :gradient="true" :pauseOnHover="true" :duration="35">
          <PartnerCard v-for="item in partnerList" :key="item.id" :img="item.img" :title="item.title" :url="item.url" />
        </Vue3Marquee>
      </div>
    </section>
    <section class="home-page__partner">
      <div class="container">
        <h2>XOQ hamkorlari</h2>
        <Vue3Marquee :gradient="true" :pauseOnHover="true" :duration="35" direction="reverse">
          <PartnerCard v-for="item in partnerList" :key="item.id" :img="item.img" :title="item.title" :url="item.url" />
        </Vue3Marquee>
      </div>
    </section>
    <section class="home-page__olimpic">
      <div class="container">
        <h2>Olimpiya sport turlari</h2>

        <div class="olimpic-grid">
          <OlimpicCard v-for="item in olimpicData" :key="item.id" :title="item.title" :season="item.season"
            :img="item.img">
            <template #season-icon><img src="@/assets/images/sun-icon.svg" width="24" height="24" /></template>
          </OlimpicCard>
          <RouterLink to="/:en" class="last-item">
            <h3>Barchasi
              <RightOutlined />
            </h3>
            <div class="item-flex">
              <img src="@/assets/images/sun-icon.svg" width="24" height="24" /> <span>Yozgi sport turi : 7</span>
            </div>
            <div class="item-flex">
              <img src="@/assets/images/winter.png" /> <span>Yozgi sport turi : 15</span>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>
    <section class="home-page__partner">
      <div class="container">
        <h2>O‘zbekiston Olimpiya o‘yinlarida</h2>
        <Vue3Marquee :gradient="true" :pauseOnHover="true" :duration="35">
          <PartnerCard v-for="item in partnerList" :key="item.id" :img="item.img" :title="item.title" :url="item.url" />
        </Vue3Marquee>
      </div>
    </section>
    <BreadCrump :data="breadCrumb"/>
  </section>

</template>