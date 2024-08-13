<script setup>
import BreadCrump from '@/components/menu/BreadCrump.vue';
const breads = [
    { label: 'Home', url: '/:en', id: 1 },
    { label: "O'yinlar", id: 2 },
    { label: "Osiyo o'yinlari", id: 3 },
]
</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breads" />
            <h2>Osiyo o'yinlari</h2>
            <a-row :gutter="[20,20]">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <div class="committee-page__content">
                    </div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
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