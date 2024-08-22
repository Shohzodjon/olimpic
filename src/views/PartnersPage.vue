<script setup>
import { ref, onMounted } from 'vue';
import { usePartnerStore } from '@/stores/partner';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import PartnerCard from '@/components/card/PartnerCard.vue';

const partnerStore=usePartnerStore();
const isLoad=ref(false);
const breads = [
    { label: 'Home', url: '/:en', id: 1 },
    { label: "Qo'mita", id: 2 },
    { label: "Hamkorlar", id: 3 },
]

onMounted(async()=>{
    await partnerStore.fetchList();
})

</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breads" />
            <h2>Hamkorlar</h2> 
            <a-row :gutter="[20,20]">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <div class="committee-page__content">
                       <a-row :gutter="[15,15]">
                        <a-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" v-for="item in partnerStore.list.data" :key="item.id">
                            <PartnerCard :img="item.images" :title="item.title" />
                        </a-col>
                       </a-row>
                    </div>
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