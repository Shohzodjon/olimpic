<script setup>
import { ref, onMounted } from 'vue';
import { useEmployeesStore } from '@/stores/employees';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import EmployeesCard from '@/components/card/EmployeesCard.vue';
import employ from '@/assets/images/employ.jpg';

const lang = localStorage.getItem('locale');
const employeesStore = useEmployeesStore();
const isLoad=ref(false)
const breads = [
    { label: 'Home', url: `/${lang}`, id: 1 },
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
];

onMounted(async () => {
    await employeesStore.fetchAdvisorList();
    isLoad.value = true;
})
</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breads" />
            <h2>Ijroiya qo‘mitasi</h2>
            <a-row :gutter="[20, 20]">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <a-row :gutter="[20, 20]">
                        <a-col v-for="item in employeesStore.advisor.data" :key="item.id" :span="24">
                            <EmployeesCard :img="item.images" :position="item.post" :name="item.title"
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