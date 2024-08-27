<script setup>
import { ref, onMounted, watch } from 'vue';
import { useMenuStore } from '@/stores/menu';
import { lang } from '@/uitiles/currentLang';
import { useRoute } from 'vue-router';
import router from '@/router';
import { NotificationOutlined, PictureOutlined, SearchOutlined } from '@ant-design/icons-vue';
import { MenuOutlined } from '@ant-design/icons-vue'
import LangComp from '@/components/lang/LangComp.vue'
import MenuDrop from '../dropdown/MenuDrop.vue';
import { useSearchStore } from '@/stores/search';

const route = useRoute();
const currentPage = ref('');
const open = ref(false);
const search = ref('');
const menuStore = useMenuStore();
const searchStore = useSearchStore();
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
</script>
<template>
    <nav class="navbar">
        <div class="nav-container">
            <div class="navbar-flex">
                <RouterLink :to="`/${lang}`" class="navbar-logo">
                    <div class="navbar-logo__img">
                        <img src="@/assets/images/logo.png" alt="logo ">
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
                                <NotificationOutlined /><span>{{ $t('announce') }}</span>
                            </RouterLink>
                            <RouterLink :to="`/${lang}/gallery`" class="header-child">
                                <PictureOutlined />
                                <span>{{ $t('media') }}</span>
                            </RouterLink>
                            <!-- <div class="header-child"></div> -->
                            <div class="header-child" @click="showModal">
                                <SearchOutlined /> <span>{{ $t('search') }}</span>
                            </div>
                        </div>
                        <LangComp />
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