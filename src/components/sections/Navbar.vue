<script setup>
import { NotificationOutlined, PictureOutlined, SearchOutlined } from '@ant-design/icons-vue';
import LangComp from '@/components/lang/LangComp.vue'
import MenuDrop from '../dropdown/MenuDrop.vue';
const menuItems = [
    {
        label: "O'zbekiston MOQ", children: [
            { label: 'Rahbariyat', children: [{ label: 'Olimpiya shon-shuhrati muzeyi' }, { label: 'Hamkorlar' }] },
            { label: 'Rahbariyat va hodimlar', children: [{ label: 'Olimpiya shon-shuhrati muzeyi' }, { label: 'Hamkorlar' }] },
            { label: 'Tibbiyot markazi', children: [{ label: 'Olimpiya shon-shuhrati muzeyi' }, { label: 'Hamkorlar' }] },
        ]
    },
    {
        label: "Yangiliklar", children: [
            { label: 'Sport tibbiyoti', },
            { label: 'Interview', },
            { label: "Ochiq ma'lumotlar", },
            { label: "Davlat dasturi ijrosi", },
            { label: "Ijtimoiy roliklar", },
        ]
    },
    {
        label: 'Parij-2024',
        children: [
            { label: 'Parij-2024 Olimpiyada litsenziyalari' },
        ]
    },
    {
        label: 'Federatsiyalar',
        children: [
            { label: "O'zbekiston sport fedratsiyasi" },
            { label: 'Xalqaro sport fedratsiyasi' }
        ],
    },
    {
        label: "O'yinlar",
        children: [
            {
                label: "Olimpiya o'yinlari", children: [
                    { label: "O'yinlar tarixi" },
                    { label: "Zamonaviy Olimpiya o'yinlari" },
                    { label: "Yozgi Olimpiya o'yinlari" },
                    { label: "Qishki Olimpiya o'yinlari" },
                    { label: "O'smirlar Olimpiya o'yinlari" }]
            },
            {
                label: "Osiyo o'yinlari", children: [{ label: "O'yinlar tarixi" },
                { label: "Yozgi Osiyo o'yinlari" },
                { label: "Qishki Osiyo o'yinlari" },
                { label: "Osiyo sohilboyi o'yinlari" },
                { label: "Jang sana'ti va yopiq inshoatlardagi Osiyo o'yinlari" }]
            }
        ],
    },
    {
        label: "Jahon arenasi",
        children: [
            {
                label: "Olimpiya o'yinlari", children: [
                    { label: "O'yinlar tarixi" },
                    { label: "Zamonaviy Olimpiya o'yinlari" },
                    { label: "Yozgi Olimpiya o'yinlari" },
                    { label: "Qishki Olimpiya o'yinlari" },
                    { label: "O'smirlar Olimpiya o'yinlari" }]
            },
            {
                label: "Osiyo o'yinlari", children: [{ label: "O'yinlar tarixi" },
                { label: "Yozgi Osiyo o'yinlari" },
                { label: "Qishki Osiyo o'yinlari" },
                { label: "Osiyo sohilboyi o'yinlari" },
                { label: "Jang sana'ti va yopiq inshoatlardagi Osiyo o'yinlari" }]
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