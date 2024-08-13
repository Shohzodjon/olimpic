<script setup>
import BreadCrump from '@/components/menu/BreadCrump.vue';
import Accardion from '@/components/dropdown/Accardion.vue'
import employ from '@/assets/images/employ.jpg';
import EmployeesCard from '@/components/card/EmployeesCard.vue';
// import Accardion from '@/components/dropdown/Accardion.vue';
const breads = [
    { label: 'Home', url: '/:en', id: 1 },
    { label: "Tibbiyot markazi", id: 2 },
    { label: "Federatsiya shifokorlari", id: 3 },
];
const employList = [
    {
        label: "Qo'mita devoni ", id: 1, children: [
            { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 11 },
            { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 12 },
            { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 13 },
            { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 14 },
            { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 15 },
            { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 16 },
        ]
    },
    {
        label: "Rais o'rinbosarlari xizmati ", id: 2, children: [
            { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 21 },
            { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 22 },
            { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 23 },
            { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 24 },
            { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 25 },
            { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 26 },
        ]
    },
    {
        label: "Rais o'rinbosarlari xizmati ", id: 3, children: [
            { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 31 },
            { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 32 },
            { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 33 },
            { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 34 },
            { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 35 },
            { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 36 },
        ]
    },
    {
        label: "Rais o'rinbosarlari xizmati ", id: 4, children: [
            { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 41 },
            { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 42 },
            { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 43 },
            { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 44 },
            { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 45 },
            { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 46 },
        ]
    },
    {
        label: "Rais o'rinbosarlari xizmati ", id: 5, children: [
            { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 51 },
            { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 52 },
            { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 53 },
            { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 54 },
            { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 55 },
            { img: employ, position: "MOQ raisining birinchi o'rinbosari, O'zbekiston futbol assotsiatsiyasi birinchi vitse-prezidenti", name: "Irmatov Ravshan Saifuddinovich", reception: 'Seshanba kuni soat 09:00 dan 13:00 gacha', id: 56 },
        ]
    }
]
</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breads" />
            <h2>Federatsiya shifokorlari</h2>
            <a-row :gutter="[20, 20]">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <a-row :gutter="[20, 20]">
                        <a-col v-for="item in employList" :key="item.id" :span="24">
                            <Accardion :data="item">
                                <template #accardion-card>

                                    <EmployeesCard v-for="child in item?.children" :key="child.id" :img="child.img"
                                        :name="child.name" :position="child.position" :reception="child.reception" />
                                </template>

                            </Accardion>
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