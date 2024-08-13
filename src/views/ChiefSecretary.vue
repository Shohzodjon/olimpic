<script setup>
import BreadCrump from '@/components/menu/BreadCrump.vue';
import EmployeesCard from '@/components/card/EmployeesCard.vue';
import employ from '@/assets/images/employ.jpg'
const breads = [
    { label: 'Home', url: '/:en', id: 1 },
    { label: "Rahbariyat va xodimlar", id: 2 },
    { label: "Bosh kotib", id: 3 },
];

</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breads" />
            <h2>Bosh kotib</h2>
            <a-row :gutter="[20,20]">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <EmployeesCard :img="employ" position="Bosh kotib" name="Kasimov Oybek Omilovich"
                        reception="Seshanba va Juma kunlari soat 14:00 dan 18:00 gacha" />
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