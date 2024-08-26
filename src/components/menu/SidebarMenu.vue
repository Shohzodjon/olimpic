<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { computed, ref } from 'vue';
import { lang } from '@/uitiles/currentLang';

const route = useRoute();
const props = defineProps({
    data: {
        type: Object,
        default: () => ({})
    }
});

const mainTitle = ref('');
const menuItems = computed(() => {
    const result = [];
    mainTitle.value = props.data.parent?.title;
    if (props.data.parent?.child?.siblings) {
        result.push(...Object.values(props.data.parent.child.siblings).map(sibling => ({
            title: sibling.title,
            link: sibling.link,
            alias: sibling.alias
        })));
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
                    <router-link 
                        :to="{ name: item.link || 'static-page', query: { alias: item.alias } }"
                        :class="{ 'exact-active': isActiveLink(item) }">
                        {{ item.title }}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="sidebar-container__img">
            <RouterLink :to="`/${lang}`">
                <img src="@/assets/images/olimpic.png" alt="olimpic">
            </RouterLink>
        </div>
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
