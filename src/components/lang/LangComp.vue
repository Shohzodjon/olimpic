<script setup>
import { ref, onMounted } from 'vue';
import { GlobalOutlined } from '@ant-design/icons-vue';
import $i18n from "@/plugins/i18n";
let locale = '';
onMounted(() => {
    let storeLocale = localStorage.getItem('locale');
    if (storeLocale) {
        locale = storeLocale;
    } else {
        locale = 'oz'
    }
})
const handleClick = (event) => {
    let element = event.target;
    const btns = document.querySelectorAll('.lang-btn');
    let chooseLocale = element.dataset.lang;
    if (chooseLocale == locale) return;
    $i18n.global.locale.value = chooseLocale;
    localStorage.setItem('locale', chooseLocale)
    window.location.reload();
}

</script>
<template>
    <ul class="lang-comp">
        <li>
            <GlobalOutlined /> <button data-lang="ru" @click="(e) => handleClick(e)" class="lang-btn">Русский</button>
        </li>
        <li><button data-lang="en" class="lang-btn" @click="(e) => handleClick(e)">English</button></li>
        <li><button data-lang="uz" class="lang-btn" @click="(e) => handleClick(e)">Ўзбекча</button></li>
        <li><button data-lang="oz" class="lang-btn" @click="(e) => handleClick(e)">O'zbekcha</button></li>
    </ul>

</template>
