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
            <a-row :gutter="24">
                <a-col :span="19">
                    <EmployeesCard :img="employ" position="Bosh kotib" name="Kasimov Oybek Omilovich"
                        reception="Seshanba va Juma kunlari soat 14:00 dan 18:00 gacha" />
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