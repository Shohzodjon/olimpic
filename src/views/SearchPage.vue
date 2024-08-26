<script setup>
import StaticBreadcrumb from '@/components/menu/StaticBreadcrumb.vue';
import { lang } from '@/uitiles/currentLang';
const breads = [
    { label: 'Home', url: `/${lang}`, id: 1 },
    { label: "Qidiruv natijasi", id: 2 },
]
</script>
<template>
    <section class="committee-page">
        <div class="container">
            <StaticBreadcrumb :data="breads" />
            <h2>Qidiruv natijasi</h2>
            <a-row :gutter="[20,20]">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <div class="committee-page__content">
                        <p>Hechnarsa topilmadi</p>
                    </div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <div class="committee-page__sidebar">
                        <div class="committee-page__sidebar-img">
                            <RouterLink :to="`/${lang}`">
                                <img src="@/assets/images/olimpic.png" alt="olimpic ">
                            </RouterLink>
                        </div>
                    </div>
                </a-col>
            </a-row>
        </div>
    </section>
</template>