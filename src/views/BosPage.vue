<script setup>
import { ref, onMounted } from 'vue';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import EmployeesCard from '@/components/card/EmployeesCard.vue';
import { useEmployeesStore } from '@/stores/employees';
import { useBreadCrumbsStore } from '@/stores/breadcrumbs';
import { useRoute } from 'vue-router';
import SidebarMenu from '@/components/menu/SidebarMenu.vue';


const breadCrumb = useBreadCrumbsStore();
const router = useRoute();
const slug = router.name;
const employeesStore = useEmployeesStore();
const isLoad = ref(false);
onMounted(async () => {
    await Promise.all([
        employeesStore.fetchBosList(),
        breadCrumb.fetchList(slug)
    ])
    isLoad.value = true;
})

</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breadCrumb.list" />
            <h2>Rais</h2>
            <a-row :gutter="[20, 20]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <EmployeesCard :img="item.images" :position="item.post" :name="item.title"
                        :reception="item.reception" v-for="item in employeesStore.bos.data" />
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <SidebarMenu :data="breadCrumb.list" />
                </a-col>
            </a-row>
        </div>
    </section>
</template>