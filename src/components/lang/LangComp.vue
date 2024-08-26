<script setup>
import { ref, onMounted } from 'vue';
import { GlobalOutlined } from '@ant-design/icons-vue';
import $i18n from "@/plugins/i18n";
let locale = '';
const langList = ref([
    { label: 'Русский', active: false, locale: 'ru' },
    { label: 'English', active: false, locale: 'en' },
    { label: 'Ўзбекча', active: false, locale: 'uz' },
    { label: "O'zbekcha", active: true, locale: 'oz' },
])
onMounted(() => {
    let storeLocale = localStorage.getItem('locale');
    if (storeLocale) {
        locale = storeLocale;
        langList.value.forEach(lang => {
            if (storeLocale == lang.locale) {
                lang.active = true
            } else {
                lang.active = false
            }
        })
    } else {
        locale = 'oz'
    }
})
const handleClick = (event) => {
    let element = event.target;
    let chooseLocale = element.dataset.lang;
    if (chooseLocale == locale) return;
    $i18n.global.locale.value = chooseLocale;
    localStorage.setItem('locale', chooseLocale)
    window.location.reload();
}

</script>
<template>
    <ul class="lang-comp">
        <li v-for="(item, i) in langList" :key="i">
            <GlobalOutlined v-if="i == 0" /> <button :data-lang="item.locale" @click="(e) => handleClick(e)"
                class="lang-btn" :class="item.active ? 'active-lang' : ''">{{ item.label }}</button>
        </li>
    </ul>

</template>
<style scoped>
.active-lang {
    color: #363c44;
    font-weight: 500;
}
</style>
