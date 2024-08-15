<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { RouterLink } from 'vue-router';
const open = ref(false);
const childrenDrawer = ref(false);
const drawerWidth = ref(520);
const childrenDrawerWidth = ref(320);

const showDrawer = () => {
    open.value = true;
};
const lang = localStorage.getItem('locale')
const showChildrenDrawer = () => {
    childrenDrawer.value = true;
};

const onClose = () => {
    open.value = false;
    childrenDrawer.value = false;
};

const updateDrawerWidth = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) { // Mobile screens
        drawerWidth.value = screenWidth * 0.8;
        childrenDrawerWidth.value = screenWidth * 0.8;
    } else if (screenWidth <= 1024) { // Tablet screens
        drawerWidth.value = screenWidth * 0.7;
        childrenDrawerWidth.value = screenWidth * 0.7;
    } else { // Desktop screens
        drawerWidth.value = 520;
        childrenDrawerWidth.value = 320;
    }
};

onMounted(() => {
    updateDrawerWidth();
    window.addEventListener('resize', updateDrawerWidth);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateDrawerWidth);
});


</script>
<template>
    <a-button type="primary" @click="showDrawer">Open</a-button>
    <a-drawer v-model:open="open" title="Multi-level drawer" :width="drawerWidth" :closable="false"
        :footer-style="{ textAlign: 'right' }" @close="onClose">
        <a-button type="primary" @click="showChildrenDrawer">Two-level drawer</a-button>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, laudantium!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, laudantium!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, laudantium!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, laudantium!</p>
        <a-drawer v-model:open="childrenDrawer" title="Two-level Drawer" :width="childrenDrawerWidth" :closable="false">
            <a-button type="primary" @click="showChildrenDrawer">This is two-level drawer</a-button>
            <RouterLink :to="`/${lang}/news`">News</RouterLink>
        </a-drawer>
    </a-drawer>
</template>
