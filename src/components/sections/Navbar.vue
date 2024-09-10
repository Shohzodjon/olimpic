<script setup>
import { ref, onMounted, watch } from 'vue';
import { useMenuStore } from '@/stores/menu';
import { lang } from '@/uitiles/currentLang';
import { RouterLink, useRoute } from 'vue-router';
import router from '@/router';
import { NotificationOutlined, PictureOutlined, SearchOutlined } from '@ant-design/icons-vue';
import { MenuOutlined } from '@ant-design/icons-vue'
import LangComp from '@/components/lang/LangComp.vue'
import MenuDrop from '../dropdown/MenuDrop.vue';
import { useSearchStore } from '@/stores/search';
import { useImageStore } from '@/stores/setGray';

const imageStore = useImageStore();
const route = useRoute();
const currentPage = ref('');
const open = ref(false);
const search = ref('');
const menuStore = useMenuStore();
const searchStore = useSearchStore();
const show = ref(false);
onMounted(async () => {
    await menuStore.fetchList();
})

watch(() => route.name, (newName) => {
    currentPage.value = newName;
});
const showModal = () => {
    open.value = !open.value;
};
const searchFunc = async () => {
    open.value = false;
    router.push(`/${lang}/search?text=${search.value}`);
    if (currentPage.value == 'search') {
        await searchStore.fetchList(search.value);
    }
    search.value = '';
}
const handleOk = (e) => {
    open.value = false;
};
const menuToggle = () => {
    menuStore.toggleFunc();
}
const setSize = (event) => {
    const btns = document.querySelectorAll('.btn');
    btns.forEach((btn) => {
        btn.style.background = 'none';
        btn.style.color = '#000';
    })
    let element = event.target;
    element.style.background = '#000';
    element.style.color = '#fff';;
    const size = element.dataset.size
    document.documentElement.style.fontSize = `${size}px`;
}


const setColor = (elem) => {
    const btns = document.querySelectorAll('.theme-btn');
    btns.forEach((btn) => {
        btn.style.transform = 'scale(1)';
    })
    const element = elem.target;
    element.style.transform = 'scale(1.13)'
    document.body.style.background = '#000'
    document.documentElement.style.setProperty('--black-900', '#fff');
    document.documentElement.style.setProperty('--black-800', '#fff');
    document.documentElement.style.setProperty('--black-600', '#fff');
    document.documentElement.style.setProperty('--gray-900', '#fff');
    document.documentElement.style.setProperty('--gray-800', '#fff');
    document.documentElement.style.setProperty('--gray-500', '#fff');
    document.documentElement.style.setProperty('--gray-700', '#fff');
    document.documentElement.style.setProperty('--white-800', '#fff');
    document.documentElement.style.setProperty('--blue-700', '#fff');
    document.documentElement.style.setProperty('--red-500', '#fff');
    document.documentElement.style.setProperty('--blue-600', '#000');
    document.documentElement.style.setProperty('--white-900', '#000');
    document.documentElement.style.setProperty('--nav-bg', '#000');
    document.documentElement.style.setProperty('--drop-bg', '#000');

}

const setGreen = (elem) => {
    const btns = document.querySelectorAll('.theme-btn');
    btns.forEach((btn) => {
        btn.style.transform = 'scale(1)';
    })
    const element = elem.target;
    element.style.transform = 'scale(1.13)'
    document.body.style.background = '#000'
    document.documentElement.style.setProperty('--black-900', '#a9e44d');
    document.documentElement.style.setProperty('--black-800', '#a9e44d');
    document.documentElement.style.setProperty('--black-600', '#a9e44d');
    document.documentElement.style.setProperty('--gray-900', '#a9e44d');
    document.documentElement.style.setProperty('--gray-800', '#a9e44d');
    document.documentElement.style.setProperty('--gray-500', '#a9e44d');
    document.documentElement.style.setProperty('--gray-700', '#a9e44d');
    document.documentElement.style.setProperty('--white-800', '#a9e44d');
    document.documentElement.style.setProperty('--blue-700', '#a9e44d');
    document.documentElement.style.setProperty('--red-500', '#a9e44d');
    document.documentElement.style.setProperty('--blue-600', '#000');
    document.documentElement.style.setProperty('--white-900', '#000');
    document.documentElement.style.setProperty('--nav-bg', '#f6f7f9');
    document.documentElement.style.setProperty('--drop-bg', '#000');
}
const setWhite = (elem) => {
    const btns = document.querySelectorAll('.theme-btn');
    btns.forEach((btn) => {
        btn.style.transform = 'scale(1)';
    })
    const element = elem.target;
    element.style.transform = 'scale(1.13)'
    document.body.style.background = '#fff'
    document.documentElement.style.setProperty('--black-900', '#000');
    document.documentElement.style.setProperty('--black-800', '#000');
    document.documentElement.style.setProperty('--black-600', '#000');
    document.documentElement.style.setProperty('--gray-900', '#000');
    document.documentElement.style.setProperty('--gray-800', '#000');
    document.documentElement.style.setProperty('--gray-500', '#000');
    document.documentElement.style.setProperty('--gray-700', '#000');
    document.documentElement.style.setProperty('--white-800', '#000');
    document.documentElement.style.setProperty('--blue-700', '#000');
    document.documentElement.style.setProperty('--red-500', '#000');
    document.documentElement.style.setProperty('--blue-600', '#fff');
    document.documentElement.style.setProperty('--white-900', '#fff');
    document.documentElement.style.setProperty('--nav-bg', '#fff');
    document.documentElement.style.setProperty('--drop-bg', '#fff');
}

const setGray = (event) => {
    const btns = document.querySelectorAll('.picture');
    btns.forEach((btn) => {
        btn.style.transform = 'scale(1)';
    })
    const element = event.target;
    element.style.transform = 'scale(1.13)';

    imageStore.setGray();
}
const removeGray = (event) => {
    const btns = document.querySelectorAll('.picture');
    btns.forEach((btn) => {
        btn.style.transform = 'scale(1)';
    })
    const element = event.target;
    element.style.transform = 'scale(1.13)'
    imageStore.removeGray();
}

const fullVersion = () => {
    window.location.reload()
}

const toggleTheme = () => {
    show.value = !show.value;
}

</script>
<template>
    <nav class="navbar">

        <div class="webtheme" :class="show ? 'active' : ''">
            <ul class="webtheme__list">
                <li>
                    <span>{{ $t('shrift') }} : </span>
                    <div class="btn-group">
                        <button class="btn small-x" data-size="8" @click="setSize">A</button>
                        <button class="btn " data-size="10" @click="setSize">A</button>
                        <button class="btn small-md" data-size="12" @click="setSize">A</button>
                        <button class="btn small-l" data-size="13" @click="setSize">A</button>
                        <button class="btn small-xl" data-size="15" @click="setSize">A</button>
                    </div>
                </li>
                <li>
                    <span>{{ $t('colorSchem') }} : </span>
                    <div class="btn-group">
                        <button class="theme-btn theme-white" @click="setWhite">A</button>
                        <button class="theme-btn theme-black" @click="setColor">A</button>
                        <button class="theme-btn theme-green" @click="setGreen">A</button>
                    </div>
                </li>
                <li>
                    <span>{{ $t('images') }} : </span>
                    <div class="btn-group">
                        <img class="vi-nopart  picture active-picture"
                            src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjOTk5IiBoZWlnaHQ9IjM2IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPiAgICA8cGF0aCBkPSJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY1aDE0djE0em0tNS4wNC02LjcxbC0yLjc1IDMuNTQtMS45Ni0yLjM2TDYuNSAxN2gxMWwtMy41NC00LjcxeiIvPjwvc3ZnPg=="
                            @click="setGray">

                        <img class="vi-nopart picture unactive-picture"
                            src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjM2IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPiAgICA8cGF0aCBkPSJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY1aDE0djE0em0tNS4wNC02LjcxbC0yLjc1IDMuNTQtMS45Ni0yLjM2TDYuNSAxN2gxMWwtMy41NC00LjcxeiIvPjwvc3ZnPg=="
                            @click="removeGray">

                    </div>
                </li>
                <li>
                    <span @click="fullVersion">{{ $t('fullVersion') }}</span>
                </li>
            </ul>
        </div>

        <div class="nav-container">
            <div class="navbar-flex">
                <RouterLink :to="`/${lang}`" class="navbar-logo">
                    <div class="navbar-logo__img">
                        <img src="@/assets/images/logo.png" alt="logo" :class="imageStore.isGray ? 'gray' : ''">
                    </div>
                    <div class="navbar-logo__info">
                        <h3>{{ $t('logo') }}</h3>
                        <ul>
                            <li>citius</li>
                            <li>altius</li>
                            <li>fortius</li>
                        </ul>
                    </div>
                </RouterLink>
                <div class="navbar-right">
                    <div class="navbar-header">
                        <div class="navbar-header__left">
                            <RouterLink :to="{
                                path: `/${lang}/announce`, query: {
                                    alias: 'announcement',
                                }
                            }" class="header-child">
                                <i class="icon-audio" style="font-size: 20px;"></i><span>{{ $t('announce') }}</span>
                            </RouterLink>
                            <RouterLink :to="`/${lang}/gallery`" class="header-child">
                                <PictureOutlined />
                                <span>{{ $t('media') }}</span>
                            </RouterLink>
                            <div class="header-child glass-icon" @click="toggleTheme" v-if="!show">
                                <i class="icon-glass" style="font-size: 20px;font-weight:700"></i>
                            </div>
                            <div class="header-child" @click="showModal">
                                <SearchOutlined /> <span>{{ $t('search') }}</span>
                            </div>
                        </div>
                        <div class="lang__wrapper">
                            <RouterLink :to="`/${lang}`">Saytning eski versiyasi</RouterLink>
                            <LangComp />
                        </div>
                    </div>
                    <div class="navbar-bottom">
                        <div class="navbar-bottom__item" v-for="(item, i) in menuStore.list.data" :key="i">
                            <MenuDrop :data="item" />
                        </div>
                        <div class="navbar-menu" @click="menuToggle">
                            <MenuOutlined />
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <a-modal v-model:open="open" centered title="" @ok="handleOk">
            <label class="modal__label">
                <input type="text" :placeholder="$t('search')" v-model="search" />
                <span @click="searchFunc">
                    <SearchOutlined />
                </span>
            </label>
        </a-modal>
    </nav>
</template>
<style scoped>
.active {
    height: 100% !important;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    display: block;
}
</style>