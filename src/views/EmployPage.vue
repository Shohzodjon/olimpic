<script setup>
import { ref, onMounted } from 'vue';
import { useEmployeesStore } from '@/stores/employees';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import Accardion from '@/components/dropdown/Accardion.vue'
import EmployeesCard from '@/components/card/EmployeesCard.vue';
import { useBreadCrumbsStore } from '@/stores/breadcrumbs';
import { useRoute } from 'vue-router';
import SidebarMenu from '@/components/menu/SidebarMenu.vue';
const employeesStore = useEmployeesStore();
const isLoad = ref(false);
const breadCrumb = useBreadCrumbsStore();
const router = useRoute();
const slug = router.name;

onMounted(async () => {
    await Promise.all([
        employeesStore.fetchEmployeeList(),
        breadCrumb.fetchList(slug)
    ])
    isLoad.value = true;
})

</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breadCrumb.list" />
            <h2 v-if="isLoad">{{ breadCrumb.list?.parent?.child?.title }}</h2>
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
                    <SidebarMenu :data="breadCrumb.list" />
                </a-col>
            </a-row>
        </div>
    </section>
</template>