<script setup>
import BreadCrump from '@/components/menu/BreadCrump.vue';
const breads = [
    { label: 'Home', url: '/:en', id: 1 },
    { label: "O'zbekiston MOQ", id: 2 },
    { label: "Rahbariyat va xodimlar", id: 3 },
]
</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breads" />
            <h2>Rahbariyat va xodimlar</h2>
            <a-row :gutter="24">
                <a-col :span="19">
                    <div class="committee-page__content">
                 
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