<script setup>
import { ref, onMounted } from 'vue';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import EmployeesCard from '@/components/card/EmployeesCard.vue';
import { useEmployeesStore } from '@/stores/employees';
import { lang } from '@/uitiles/currentLang';
const breads = [
    { label: 'Home', url: `/${lang}`, id: 1 },
    { label: "Rahbariyat va xodimlar", id: 2 },
    { label: "Rais", id: 3 },
];
const employeesStore = useEmployeesStore();
const isLoad = ref(false);
onMounted(async () => {
    await employeesStore.fetchBosList();
    isLoad.value = true;
})

</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breads" />
            <h2>Rais</h2>
            <a-row :gutter="[20, 20]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                        <EmployeesCard :img="item.images" :position="item.post" :name="item.title"
                        :reception="item.reception" v-for="item in employeesStore.bos.data"  />
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