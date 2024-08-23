<script setup>
import { ref, onMounted } from 'vue';
import { useEmployeesStore } from '@/stores/employees';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import Accardion from '@/components/dropdown/Accardion.vue'
import EmployeesCard from '@/components/card/EmployeesCard.vue';
import { lang } from '@/uitiles/currentLang';
const employeesStore = useEmployeesStore();
const isLoad = ref(false)
const breads = [
    { label: 'Home', url: `/${lang}`, id: 1 },
    { label: "Rahbariyat va xodimlar", id: 2 },
    { label: "Hodimlar", id: 3 },
];

onMounted(async () => {
    await employeesStore.fetchEmployeeList();
    isLoad.value = true;
})

</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breads" />
            <h2>Hodimlar</h2>
            <a-row :gutter="[20, 20]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <a-row :gutter="[20, 20]">
                        <a-col v-for="item in employeesStore.employees.data" :key="item.id" :span="24">
                            <Accardion :data="item">
                                <template #accardion-card>
                                    <EmployeesCard v-for="child in item?.children" :key="child.id" :img="child.images"
                                        :name="child.title" :position="child.post" :reception="child.reception" />
                                </template>

                            </Accardion>
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