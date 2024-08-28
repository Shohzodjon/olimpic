<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { usePartnerStore } from '@/stores/partner';
import { useHomeStore } from '@/stores/home';
import { lang } from '@/uitiles/currentLang';
import HomeHeader from '@/components/header/HomeHeader.vue';
import HomeBanner from '@/components/sections/home/HomeBanner.vue'
import HomeNews from '@/components/sections/home/HomeNews.vue';
import HomeInterview from '@/components/sections/home/HomeInterview.vue'
import HomeMedia from '@/components/sections/home/HomeMedia.vue';
import PartnerCard from '@/components/card/PartnerCard.vue';
import OlimpicCard from '@/components/card/OlimpicCard.vue';
import { RightOutlined } from '@ant-design/icons-vue';

const windowWidth = ref(window.innerWidth);
const partnerStore = usePartnerStore();
const homeStore = useHomeStore();
const isLoad = ref(false);
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWindowWidth);
});
onMounted(async () => {
  window.addEventListener('resize', updateWindowWidth);
  await Promise.all([
    partnerStore.fetchList(),
    partnerStore.fetchSupport(),
    homeStore.fetchOlimpicType(),
    homeStore.fetchOlimpicGames()
  ])
  isLoad.value = true;

})
function updateWindowWidth() {
  windowWidth.value = window.innerWidth;
};

const isGradient = computed(() => windowWidth.value > 800);
</script>
<template>
  <section class="home-page" v-if="isLoad">
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
        <h2>{{ $t('support') }}</h2>
        <Vue3Marquee :gradient="isGradient" :pauseOnHover="true" :duration="35">
          <div v-for="item in partnerStore.support.data" :key="item.id">
            <PartnerCard :img="item.images" :title="item.title" :url="`/${lang}`"
              style="margin:  1rem;min-width:320px" />
          </div>

        </Vue3Marquee>
      </div>
    </section>
    <section class="home-page__partner">
      <div class="container">
        <h2>{{ $t('globalPartner') }}</h2>
        <Vue3Marquee :gradient="isGradient" :pauseOnHover="true" :duration="35" direction="reverse">
          <div v-for="item in partnerStore.list.data" :key="item.id">
            <PartnerCard :img="item.images" :title="item.title" :url="`/${lang}`" class="global__partner" />
          </div>

        </Vue3Marquee>
      </div>
    </section>
    <section class="home-page__olimpic">
      <div class="container">
        <h2 style="margin-bottom: 2.5rem;">{{ $t('olimpicSport') }}</h2>
        <div class="olimpic-grid">
          <OlimpicCard v-for="item in homeStore.olimpicType.data" :key="item.id" :title="item.title"
            season="summerSeason" :img="item.images" style="">
            <template #season-icon><img src="@/assets/images/sun-icon.svg" width="24" height="24" /></template>
          </OlimpicCard>
          <RouterLink :to="`/${lang}/olimpic-summer`" class="last-item">
            <h3 style="font-size:16px">{{ $t('all') }}
              <RightOutlined />
            </h3>
            <div class="item-flex">
              <img src="@/assets/images/sun-icon.svg" width="24" height="24" /> <span>{{ $t('summer') }} : 7</span>
            </div>
            <div class="item-flex">
              <img src="@/assets/images/winter.png" /> <span>{{ $t('winter') }} : 15</span>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>
    <section class="home-page__partner">
      <div class="container">
        <h2 style="margin-bottom: 2.5rem;">{{ $t('uzOlimpic') }}</h2>
        <Vue3Marquee :gradient="isGradient" :pauseOnHover="true" :duration="35">
          <div v-for="item in homeStore.olimpicGame.data" :key="item.id">
            <PartnerCard :img="item.images" :title="item.title" :url="`/${lang}/uz-olimpic/${item.id}`"
              class="global__partner" />
          </div>
        </Vue3Marquee>
      </div>

    </section>
  </section>

</template>