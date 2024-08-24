<script setup>
import { ref, onMounted } from 'vue';
import { useEmployeesStore } from '@/stores/employees';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import EmployeesCard from '@/components/card/EmployeesCard.vue';
import { useBreadCrumbsStore } from '@/stores/breadcrumbs';
import { useRoute } from 'vue-router';
import SidebarMenu from '@/components/menu/SidebarMenu.vue';
const employeesStore = useEmployeesStore();
const isLoad = ref(false);
const breadCrumb = useBreadCrumbsStore();
const router = useRoute();
const slug = router.query.alias;
onMounted(async () => {
    await Promise.all([
        employeesStore.fetchAdvisorList(),
        breadCrumb.fetchList(slug)
    ])
    isLoad.value = true;
})
</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breadCrumb.list" />
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
                    <SidebarMenu :data="breadCrumb.list" />
                </a-col>
            </a-row>
        </div>
    </section>
</template>