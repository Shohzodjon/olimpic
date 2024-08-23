<script setup>
import { CaretDownOutlined } from '@ant-design/icons-vue';
import { RouterLink } from 'vue-router';
// import { lang } from '@/uitiles/currentLang';
defineProps({
    data: {
        type: Array,
        default: []
    }
});


const toggleAction = (event) => {
    const el = event.target
    // if (el.classList.contains('sidebar__menu-item-flex')) {
    //     const sibling = el.nextSibling;
    //     sibling.classList.toggle('active');
    // }else{
    //     return
    // }
}
</script>
<template>
    <ul class="sidebar__menu">
        <li v-for="(item, i) in data " :key="i" class="sidebar__menu-item">
            <div class="sidebar__menu-item-flex" @click="toggleAction">
                <RouterLink to="/oz" active-class="active" exact-active-class="exact-active"> {{ item.title }}
                </RouterLink>
                <CaretDownOutlined v-if="item.children" />
            </div>
            <ol v-if="item.children" class="sidebar__menu-sub">
                <li v-for="(child, index) in item.children" :key="index" class="sub-item">
                    <RouterLink :to="{ name: child.link }" active-class="active" exact-active-class="exact-active">{{
                        child.title }}</RouterLink>
                </li>
            </ol>
        </li>
    </ul>

</template>
<style scoped>
.ant-dropdown-menu-submenu {
    position: relative;
}



.exact-active {
    font-weight: bold;
    color: blue;
}
</style>
