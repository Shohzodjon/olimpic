<script setup>
import { reactive, onMounted, onUnmounted } from 'vue';
import { useMenuStore } from '@/stores/menu';
import { RouterLink } from 'vue-router';
import { CloseOutlined, RightOutlined } from '@ant-design/icons-vue';
import $i18n from "@/plugins/i18n";
defineProps({
    data: {
        type: Array,
        default: []
    }
});
const menuStore = useMenuStore();
const childList = reactive({
    title: '',
    list: [],
});
const langList = reactive([
    { label: "O'z", locale: 'oz', active: true, id: 1 },
    { label: "Ўз", locale: 'uz', active: false, id: 2 },
    { label: "Ру", locale: 'ru', active: false, id: 3 },
    { label: "En", locale: 'en', active: false, id: 4 },
])
const grandChildList = reactive({
    title: '',
    list: [],
});
let locale = '';
onMounted(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    let storeLocale = localStorage.getItem('locale');
    if (storeLocale) {
        locale = storeLocale;
    } else {
        locale = 'oz'
    }
});

onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
});
const handleResize = () => {
    menuStore.show = false;
};
const handleClick = (child, title) => {
    const parentMenu = document.querySelector('.parent__menu');
    const childMenu = document.querySelector('.second__menu')
    childList.title = title;
    childList.list = child;
    parentMenu.classList.toggle('unactive-menu');
    childMenu.classList.toggle('active-menu');
};
const closeSecondMenu = () => {
    const parentMenu = document.querySelector('.parent__menu');
    const childMenu = document.querySelector('.second__menu')
    parentMenu.classList.toggle('unactive-menu');
    childMenu.classList.toggle('active-menu');
}

const thirdMenuShow = (title, data) => {
    const parentMenu = document.querySelector('.second__menu');
    const childMenu = document.querySelector('.third__menu')
    grandChildList.title = title;
    grandChildList.list = data;
    parentMenu.classList.toggle('unactive-menu');
    childMenu.classList.toggle('active-menu');
}

const closeThirdMenu = () => {
  
    const parentMenu = document.querySelector('.second__menu');
    const childMenu = document.querySelector('.third__menu')
    parentMenu.classList.toggle('unactive-menu');
    childMenu.classList.toggle('active-menu');
}
const menuToggle = () => {
    menuStore.toggleFunc();
}

const chooseLang = (event) => {
    let element = event.target;
    let chooseLocale = element.dataset.lang;
    if (chooseLocale == locale) return;
    $i18n.global.locale.value = chooseLocale;
    localStorage.setItem('locale', chooseLocale)
    window.location.reload();
}

const closeMenu=()=>{
    const parentMenu = document.querySelector('.parent__menu');
    const secondMenu = document.querySelector('.second__menu');
    const childMenu = document.querySelector('.third__menu')
    parentMenu.classList.remove('unactive-menu');
    secondMenu.classList.remove('unactive-menu');
    secondMenu.classList.remove('active-menu');
    childMenu.classList.remove('active-menu');
    menuStore.toggleFunc();
}


</script>
<template>
    <div :class="['responsive-nav', { 'active-res': menuStore.show }]">
        <div class="responsive-nav__container">
            <span class="responsive-nav__overlay" @click="menuToggle"></span>
            <ul class="responsive-nav__box">
                <li class="responsive-nav__header">
                    <div class="lang">
                        <span v-for="item in langList" :key="item.id" :data-lang="item.locale"
                            @click="(e) => chooseLang(e)">{{ item.label }}</span>
                    </div>
                    <span class="close-icon" @click="menuToggle">
                        <CloseOutlined />
                    </span>
                </li>
                <li class="responsive-nav__body">
                    <div class="responsive-nav__main">
                        <div class="parent__menu">
                            <div class="responsive-nav__body-top">
                                <span>Menu</span>
                            </div>
                            <div class="responsive-nav__list">
                                <ol class="responsive-nav__list-parent">
                                    <li class="parent-item" v-for="item in data"
                                        @click="handleClick(item.children, item.title)">
                                        <span class="parent-title">{{ item.title }}</span>
                                        <RightOutlined class="arrow-icon" v-if="item.children.length != 0" />
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <ul v-if="childList" class="child__menu second__menu ">
                            <li class="child__menu-header" @click="closeSecondMenu">
                                <RightOutlined style="transform: rotate(-180deg);" />
                                <span>{{ childList.title }}</span>
                            </li>
                            <li v-for="child in childList.list" :key="child.id" class="child__menu-item">
                                <div class="item__box" v-if="child.children.length != 0"
                                    @click="thirdMenuShow(child.title, child.children)">
                                    <span>{{ child.title }}</span>
                                    <RightOutlined class="arrow-icon" />
                                </div>
                                <div v-else>
                                    <router-link v-if="child.link"
                                        :to="{ name: child.link, query: { alias: child.alias } }"
                                        @click="closeMenu">
                                        {{ child.title }}
                                    </router-link>
                                    <router-link v-else :to="{ name: 'static-page', query: { alias: child.alias } }"
                                        @click="closeMenu">
                                        {{ child.title }}
                                    </router-link>
                                </div>
                            </li>
                        </ul>
                        <ul v-if="grandChildList" class="child__menu third__menu ">
                            <li class="child__menu-header" @click="closeThirdMenu">
                                <RightOutlined style="transform: rotate(-180deg);" />
                                <span>{{ grandChildList.title }}</span>
                            </li>
                            <li v-for="item in grandChildList.list" :key="item.id" class="child__menu-item">
                                <router-link v-if="item.link" :to="{ name: item.link, query: { alias: item.alias } }"
                                    @click="closeMenu">
                                    {{ item.title }}
                                </router-link>
                                <router-link v-else :to="{ name: 'static-page', query: { alias: item.alias } }"
                                    @click="closeMenu">
                                    {{ item.title }}
                                </router-link>
                            </li>
                        </ul>
                    </div>

                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
.active-res {
    opacity: 1;
    transform: translateX(0%);
}

.active-menu {
    transform: translateX(0%);
}

.unactive-menu {
    transform: translateX(-50%);
}
</style>
