<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { computed, onMounted, ref } from 'vue';
import { lang } from '@/uitiles/currentLang';
import { useImageStore } from '@/stores/setGray';
const imageStore=useImageStore();
const route = useRoute();
const name=route.name
const props = defineProps({
    data: {
        type: Object,
        default: () => ({})
    }
});



const mainTitle = ref('');
const menuItems = computed(() => {
    const result = [];
    if (props.data.child?.siblings) {
        result.push(...Object.values(props.data.child.siblings).map(sibling => ({
            title: sibling.title,
            link: sibling.link,
            alias: sibling.alias
        })));
    }
    if (props.data?.parent) {
        mainTitle.value = props.data?.parent[0]?.title;
    }else{
        mainTitle.value = props.data?.child?.title; 
    }
    return result;
});

const isActiveLink = (item) => {
    return item.alias === route.query.alias;
};
</script>

<template>
    <div class="sidebar-container">
        <div class="sidebar-wrapper">
            <h3>{{ mainTitle }}</h3>
            <ul class="sidebar__menu">
                <li v-for="(item, i) in menuItems" :key="i" class="sidebar__menu-item">
                    <router-link :to="{ name: item.link || 'static-page', query: { alias: item.alias } }"
                        :class="{ 'exact-active': isActiveLink(item) }">
                        {{ item.title }}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="sidebar-container__img">
            <RouterLink :to="`/${lang}`">
                <img src="@/assets/images/olimpic.png" alt="olimpic" :class="imageStore.isGray?'gray':''" >
            </RouterLink>
        </div>
        <pre></pre>
    </div>
</template>

<style scoped>
.ant-dropdown-menu-submenu {
    position: relative;
}

.exact-active {
    font-weight: 500;
    color: #335fa9;
}
</style>
