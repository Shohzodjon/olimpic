<script setup>
import { ref, onMounted } from 'vue';
import { useEmployeesStore } from '@/stores/employees';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import EmployeesCard from '@/components/card/EmployeesCard.vue';
import { lang } from '@/uitiles/currentLang';
const employeesStore = useEmployeesStore();
const isLoad = ref(false)

const breads = [
    { label: 'Home', url: `/${lang}`, id: 1 },
    { label: "Rahbariyat va xodimlar", id: 2 },
    { label: "Departament direktorlari", id: 3 },
];
onMounted(async () => {
    await employeesStore.fetchDepartmentList();
    isLoad.value = true;
})
</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breads" />
            <h2>Departament direktorlari</h2>

            <a-row :gutter="[20, 20]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <a-row :gutter="[20, 20]">
                        <a-col v-for="item in employeesStore.department.data" :key="item.id" :span="24">
                            <EmployeesCard :img="item.images" :position="item.post" :name="item.title"
                                :reception="item.reception" />
                        </a-col>
                    </a-row>

                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <div class="committee-page__sidebar">
                        <div class="committee-page__sidebar-menu">Menu</div>
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