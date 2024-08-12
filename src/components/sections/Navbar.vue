<script setup>
import { NotificationOutlined, PictureOutlined, SearchOutlined } from '@ant-design/icons-vue';
import LangComp from '@/components/lang/LangComp.vue'
import MenuDrop from '../dropdown/MenuDrop.vue';
const menuItems = [
    {
        label: "O'zbekiston MOQ", children: [
            {
                label: "Qo'mita", path: 'committe',
                children: [
                    { label: 'Olimpiya shon-shuhrati muzeyi', path: 'olimpic-museum', },
                    { label: 'Hamkorlar', path: 'partners-page', }]
            },
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
            {
                label: 'Tibbiyot markazi', path: 'medical-center',
                children: [
                    { label: 'RSTIAM faoliyati', path: 'rstiam-activity', },
                    { label: 'Federatsiya shifokorlari', path: 'federation-doctors', }]
            },
        ]
    },
    {
        label: "Yangiliklar", path: 'home', children: [
            { label: 'Sport tibbiyoti', path: 'sport-news', },
            { label: 'Interview', path: 'interview', },
            { label: "Ochiq ma'lumotlar", path: 'open-data', },
            { label: "Davlat dasturi ijrosi", path: 'state-execution', },
            { label: "Ijtimoiy roliklar", path: 'social-roller', },
        ]
    },
    {
        label: 'Parij-2024', path: 'home',
        children: [
            { label: 'Parij-2024 Olimpiyada litsenziyalari', path: 'parij-olimpy', },
        ]
    },
    {
        label: 'Federatsiyalar', path: 'home',
        children: [
            { label: "O'zbekiston sport fedratsiyasi", path: 'local-federation', },
            { label: 'Xalqaro sport fedratsiyasi', path: 'global-federation', }
        ],
    },
    {
        label: "O'yinlar", path: 'home',
        children: [
            {
                label: "Olimpiya o'yinlari", path: 'olimpic-game', children: [
                    { label: "O'yinlar tarixi", path: 'olimpic-history', },
                    { label: "Zamonaviy Olimpiya o'yinlari", path: 'olimpic-modern', },
                    { label: "Yozgi Olimpiya o'yinlari", path: 'olimpic-summer', },
                    { label: "Qishki Olimpiya o'yinlari", path: 'olimpic-winter', },
                    { label: "O'smirlar Olimpiya o'yinlari", path: 'olimpic-generation', }]
            },
            {
                label: "Osiyo o'yinlari", path: 'asia-game', children: [
                    { label: "O'yinlar tarixi", path: 'asia-history', },
                    { label: "Yozgi Osiyo o'yinlari", path: 'asia-summer', },
                    { label: "Qishki Osiyo o'yinlari", path: 'asia-winter', },
                    { label: "Osiyo sohilboyi o'yinlari", path: 'asia-beach', },
                    { label: "Jang sana'ti va yopiq inshoatlardagi Osiyo o'yinlari", path: 'asia-battle', }]
            }
        ],
    },
    {
        label: "Jahon arenasi", path: 'home',
        children: [
            {
                label: "Xalqaro Olimpiya qomitasi", path: 'international-olimpic', children: [
                    { label: "XOQ tuzilmasi", path: 'international-structure', },
                    { label: "XOQ sesiyasi", path: 'international-session', },
                    { label: "XOQ hamkorlari", path: 'international-partner', },
                    { label: "Olimpiya harakati", path: 'international-action', },
                    { label: "Olimpiya xartiya", path: 'international-charter', }]
            },
            {
                label: "Osiyo olimpiya kengashi", path: 'asia-council', children: [
                    { label: "OOK tuzilmasi", path: 'asia-structure', },
                    { label: "OOK prezidenti", path: 'asia-prezident', },
                ]
            },
            {
                label: "Xalqaro munosabatlar", path: 'home', children: [
                    { label: "Milliy olimpiya qo’mitalari", path: 'home', },
                    { label: "Yangiliklar va foydali materiallar", path: 'home', },
                    { label: "Xalqaro tadbirlar", path: 'home', },
                ]
            }
        ],
    }
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
                        <RouterLink to='/oz/gallery' class="header-child">
                            <PictureOutlined />
                            <span>Медиа галерея</span>
                        </RouterLink>
                        <!-- <div class="header-child">
                            glass
                        </div> -->
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