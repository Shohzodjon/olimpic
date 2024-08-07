<script setup>
import { NotificationOutlined, PictureOutlined, SearchOutlined } from '@ant-design/icons-vue';
import LangComp from '@/components/lang/LangComp.vue'
import MenuDrop from '../dropdown/MenuDrop.vue';
const menuItems = [
    {
        label: "O'zbekiston MOQ", children: [
            { label: "Qo'mita", path: 'committe', children: [{ label: 'Olimpiya shon-shuhrati muzeyi', path: 'olimpic-museum', }, { label: 'Hamkorlar', path: 'partners-page', }] },
            {
                label: 'Rahbariyat va hodimlar', path: 'leader-page',
                children: [{ label: 'Rais', path: 'bos-page', },
                { label: 'Bosh kotib', path: 'chief-secretary', },
                { label: "Rais o'rinbosari", path: 'deputy', },
                { label: 'Rais maslahatchilari', path: 'advisor', },
                { label: "Ijroiya qo'mitasi", path: 'executive', },
                { label: 'Department direktorlari', path: 'department', },
                { label: 'Xodimlar', path: 'employees', }
                ]
            },
            // { label: 'Tibbiyot markazi', path: '/:en', children: [{ label: 'Olimpiya shon-shuhrati muzeyi', path: '/:en', }, { label: 'Hamkorlar', path: '/:en', }] },
        ]
    },
    {
        label: "Yangiliklar", path: 'home', children: [
            { label: 'Sport tibbiyoti', path: 'committe', },
            { label: 'Interview', path: 'home', },
            // { label: "Ochiq ma'lumotlar", path: '/:en', },
            // { label: "Davlat dasturi ijrosi", path: '/:en', },
            // { label: "Ijtimoiy roliklar", path: '/:en', },
        ]
    },
    // {
    //     label: 'Parij-2024', path: '/:en',
    //     children: [
    //         { label: 'Parij-2024 Olimpiyada litsenziyalari', path: '/:en', },
    //     ]
    // },
    // {
    //     label: 'Federatsiyalar', path: '/:en',
    //     children: [
    //         { label: "O'zbekiston sport fedratsiyasi", path: '/:en', },
    //         { label: 'Xalqaro sport fedratsiyasi', path: '/:en', }
    //     ],
    // },
    // {
    //     label: "O'yinlar", path: '/:en',
    //     children: [
    //         {
    //             label: "Olimpiya o'yinlari", path: '/:en', children: [
    //                 { label: "O'yinlar tarixi", path: 'home', },
    //                 { label: "Zamonaviy Olimpiya o'yinlari", path: 'home', },
    //                 { label: "Yozgi Olimpiya o'yinlari", path: 'home', },
    //                 { label: "Qishki Olimpiya o'yinlari", path: 'home', },
    //                 { label: "O'smirlar Olimpiya o'yinlari", path: 'home', }]
    //         },
    //         {
    //             label: "Osiyo o'yinlari", path: '/:en', children: [{ label: "O'yinlar tarixi", path: '/:en', },
    //             { label: "Yozgi Osiyo o'yinlari", path: '/:en', },
    //             { label: "Qishki Osiyo o'yinlari", path: '/:en', },
    //             { label: "Osiyo sohilboyi o'yinlari", path: '/:en', },
    //             { label: "Jang sana'ti va yopiq inshoatlardagi Osiyo o'yinlari", path: '/:en', }]
    //         }
    //     ],
    // },
    // {
    //     label: "Jahon arenasi", path: '/:en',
    //     children: [
    //         {
    //             label: "Olimpiya o'yinlari", path: '/:en', children: [
    //                 { label: "O'yinlar tarixi", path: '/:en', },
    //                 { label: "Zamonaviy Olimpiya o'yinlari", path: '/:en', },
    //                 { label: "Yozgi Olimpiya o'yinlari", path: '/:en', },
    //                 { label: "Qishki Olimpiya o'yinlari", path: '/:en', },
    //                 { label: "O'smirlar Olimpiya o'yinlari", path: '/:en', }]
    //         },
    //         {
    //             label: "Osiyo o'yinlari", path: '/:en', children: [{ label: "O'yinlar tarixi", path: '/:en', },
    //             { label: "Yozgi Osiyo o'yinlari", path: '/:en', },
    //             { label: "Qishki Osiyo o'yinlari", path: '/:en', },
    //             { label: "Osiyo sohilboyi o'yinlari", path: '/:en', },
    //             { label: "Jang sana'ti va yopiq inshoatlardagi Osiyo o'yinlari", path: '/:en', }]
    //         }
    //     ],
    // }
];
</script>
<template>
    <nav class="navbar">
        <div class="nav-container">
            <div class="navbar-flex">
                <RouterLink to="/en" class="navbar-logo">
                    <div class="navbar-logo__img">
                        <img src="@/assets/images/logo.png" alt="logo ">
                    </div>
                    <div class="navbar-logo__info">
                        <h3>O‘zbekiston Milliy Olimpiya Qo‘mitasi</h3>
                        <ul>
                            <li>citius</li>
                            <li>altius</li>
                            <li>fortius</li>
                        </ul>
                    </div>
                </RouterLink>
                <div class="navbar-right">
                    <div class="navbar-header">
                        <RouterLink to="/:oz" class="header-child">
                            <NotificationOutlined /><span>Объявления</span>
                        </RouterLink>
                        <RouterLink to='/:oz' class="header-child">
                            <PictureOutlined />
                            <span>Медиа галерея</span>
                        </RouterLink>
                        <div class="header-child">
                            glass
                        </div>
                        <div class="header-child">
                            <SearchOutlined /> <span>Поиск</span>
                        </div>
                        <LangComp />
                    </div>
                    <div class="navbar-bottom">
                        <MenuDrop v-for="(item, i) in menuItems" :key="i" :data="item" />
                    </div>
                </div>

            </div>
        </div>
    </nav>
</template>