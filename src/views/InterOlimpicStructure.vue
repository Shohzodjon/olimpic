<script setup>
import { ref, onMounted } from 'vue';
import { useGlobalArenaStore } from '@/stores/globalArena';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import AccardionFed from '@/components/dropdown/AccardionFed.vue'
const activeKey = ref('1');

const isLoad = ref(false);
const globalArenaStore = useGlobalArenaStore();
const breads = [
    { label: 'Home', url: '/oz', id: 1 },
    { label: "Federatsiyalar", id: 2 },
    { label: "XOQ tuzilmasi", id: 3 },
];

onMounted(async () => {
    await globalArenaStore.fetchStructure();
    isLoad.value=true
})
const employList = [
    {
        label: "O'zbekiston bosk federatsiyasi ", id: 1, children: "<p>Rais: Ramatov Achilboy Jumaniyozovich</p> <p>Raisning birinchi o‘rinbosari: Polatov Saken Djetibaevich</p> <p>Bosh kotib: Shohid Tillaboyev</p> <p>Tashkil topgan yili: 1992 yil</p><p>Manzil: 100066, Toshkent shahar, Turob To‘la ko‘chasi, 126-uy</p><p>     <span>     Telefon: <a href='tel:+99871-2457015'>+99871-2457015</a> </span> </p> <p>     <span>         Faks: <a href='fax:+99871-2457015'>+99871-2457015</a>     </span> </p> <p>     E-mail: <a href='mailto:boxing.uzbekistan@gmail.com'>boxing.uzbekistan@gmail.com</a> </p> <p>     <a href='http://olympicboxing.uz/uz' target='_blank' rel='noopener'>         <span>www.olympicboxing.uz</span>     </a> </p>"
    },
    {
        label: "O'zbekiston valeybol federatsiyasi ", id: 2, children: "<p>Rais: Ramatov Achilboy Jumaniyozovich</p> <p>Raisning birinchi o‘rinbosari: Polatov Saken Djetibaevich</p> <p>Bosh kotib: Shohid Tillaboyev</p> <p>Tashkil topgan yili: 1992 yil</p><p>Manzil: 100066, Toshkent shahar, Turob To‘la ko‘chasi, 126-uy</p><p>     <span>     Telefon: <a href='tel:+99871-2457015'>+99871-2457015</a> </span> </p> <p>     <span>         Faks: <a href='fax:+99871-2457015'>+99871-2457015</a>     </span> </p> <p>     E-mail: <a href='mailto:boxing.uzbekistan@gmail.com'>boxing.uzbekistan@gmail.com</a> </p> <p>     <a href='http://olympicboxing.uz/uz' target='_blank' rel='noopener'>         <span>www.olympicboxing.uz</span>     </a> </p>"
    },
    {
        label: "O'zbekiston ganbol federatsiyasi ", id: 3, children: "<p>Rais: Ramatov Achilboy Jumaniyozovich</p> <p>Raisning birinchi o‘rinbosari: Polatov Saken Djetibaevich</p> <p>Bosh kotib: Shohid Tillaboyev</p> <p>Tashkil topgan yili: 1992 yil</p><p>Manzil: 100066, Toshkent shahar, Turob To‘la ko‘chasi, 126-uy</p><p>     <span>     Telefon: <a href='tel:+99871-2457015'>+99871-2457015</a> </span> </p> <p>     <span>         Faks: <a href='fax:+99871-2457015'>+99871-2457015</a>     </span> </p> <p>     E-mail: <a href='mailto:boxing.uzbekistan@gmail.com'>boxing.uzbekistan@gmail.com</a> </p> <p>     <a href='http://olympicboxing.uz/uz' target='_blank' rel='noopener'>         <span>www.olympicboxing.uz</span>     </a> </p>"
    },
    {
        label: "O'zbekiston tennis federatsiyasi ", id: 4, children: "<p>Rais: Ramatov Achilboy Jumaniyozovich</p> <p>Raisning birinchi o‘rinbosari: Polatov Saken Djetibaevich</p> <p>Bosh kotib: Shohid Tillaboyev</p> <p>Tashkil topgan yili: 1992 yil</p><p>Manzil: 100066, Toshkent shahar, Turob To‘la ko‘chasi, 126-uy</p><p>     <span>     Telefon: <a href='tel:+99871-2457015'>+99871-2457015</a> </span> </p> <p>     <span>         Faks: <a href='fax:+99871-2457015'>+99871-2457015</a>     </span> </p> <p>     E-mail: <a href='mailto:boxing.uzbekistan@gmail.com'>boxing.uzbekistan@gmail.com</a> </p> <p>     <a href='http://olympicboxing.uz/uz' target='_blank' rel='noopener'>         <span>www.olympicboxing.uz</span>     </a> </p>"
    },
    {
        label: "O'zbekiston futbol federatsiyasi ", id: 5, children: "<p>Rais: Ramatov Achilboy Jumaniyozovich</p> <p>Raisning birinchi o‘rinbosari: Polatov Saken Djetibaevich</p> <p>Bosh kotib: Shohid Tillaboyev</p> <p>Tashkil topgan yili: 1992 yil</p><p>Manzil: 100066, Toshkent shahar, Turob To‘la ko‘chasi, 126-uy</p><p>     <span>     Telefon: <a href='tel:+99871-2457015'>+99871-2457015</a> </span> </p> <p>     <span>         Faks: <a href='fax:+99871-2457015'>+99871-2457015</a>     </span> </p> <p>     E-mail: <a href='mailto:boxing.uzbekistan@gmail.com'>boxing.uzbekistan@gmail.com</a> </p> <p>     <a href='http://olympicboxing.uz/uz' target='_blank' rel='noopener'>         <span>www.olympicboxing.uz</span>     </a> </p>"
    },
    {
        label: "O'zbekiston yengil atletika federatsiyasi ", id: 6, children: "<p>Rais: Ramatov Achilboy Jumaniyozovich</p> <p>Raisning birinchi o‘rinbosari: Polatov Saken Djetibaevich</p> <p>Bosh kotib: Shohid Tillaboyev</p> <p>Tashkil topgan yili: 1992 yil</p><p>Manzil: 100066, Toshkent shahar, Turob To‘la ko‘chasi, 126-uy</p><p>     <span>     Telefon: <a href='tel:+99871-2457015'>+99871-2457015</a> </span> </p> <p>     <span>         Faks: <a href='fax:+99871-2457015'>+99871-2457015</a>     </span> </p> <p>     E-mail: <a href='mailto:boxing.uzbekistan@gmail.com'>boxing.uzbekistan@gmail.com</a> </p> <p>     <a href='http://olympicboxing.uz/uz' target='_blank' rel='noopener'>         <span>www.olympicboxing.uz</span>     </a> </p>"
    }
]
</script>
<template>
    <section class="committee-page global-federation">
        <div class="container">
            <BreadCrump :data="breads" />
            <h2>XOQ tuzilmasi</h2>
            <a-row :gutter="[20, 20]">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <a-row :gutter="[20, 20]" v-if="isLoad">
                        <a-col :span="24">
                            <div class="global-federation__tab">
                                <a-tabs v-model:activeKey="activeKey">
                                    <a-tab-pane key="1" tab="XOQ prezidentlari" >
                                        <div v-html="globalArenaStore.structure[0].content"></div>
                                    </a-tab-pane>
                                    <a-tab-pane key="2" tab="Ijroiya qomitasi">
                                        <div v-html="globalArenaStore.structure[1].content"></div>
                                    </a-tab-pane>
                                    <a-tab-pane key="3" tab="Doimiy komissiya">
                                        <div v-html="globalArenaStore.structure[2].content"></div>
                                    </a-tab-pane>
                                </a-tabs>
                            </div>
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