<script setup>
import BreadCrump from '@/components/menu/BreadCrump.vue';
import EmployeesCard from '@/components/card/EmployeesCard.vue';
import employ from '@/assets/images/employ.jpg'
const breads = [
    { label: 'Home', url: '/:en', id: 1 },
    { label: "Rahbariyat va xodimlar", id: 2 },
    { label: "Ijroiya qo‘mitasi", id: 3 },
];
const employList = [
    { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 1 },
    { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 2 },
    { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 3 },
    { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 4 },
    { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 5 },
    { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 6 },
    { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 7 },
    { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 8 },
    { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 9 },
]
</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breads" />
            <h2>Ijroiya qo‘mitasi</h2>
            <a-row :gutter="[20, 20]">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <a-row :gutter="[20, 20]">
                        <a-col v-for="item in employList" :key="item.id">
                            <EmployeesCard :img="item.img" :position="item.position" :name="item.name"
                                :reception="item.reception" />
                        </a-col>
                    </a-row>

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