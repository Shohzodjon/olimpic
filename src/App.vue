<script setup>
import { onMounted, ref } from 'vue';
import Navbar from '@/components/sections/Navbar.vue';
import Footer from '@/components/sections/Footer.vue';
import { RouterView } from "vue-router";
import ResponsiveNavbar from './components/responsive/ResponsiveNavbar.vue';
import { useMenuStore } from '@/stores/menu';
const menuStore = useMenuStore();
const isLoad = ref(false);

onMounted(async () => {
  await menuStore.fetchList();
  isLoad.value = true;
})
</script>

<template>
  <section>
    <Navbar />
    <div v-if="isLoad">
      <!-- menuStore.list.data -->
      <ResponsiveNavbar :data="menuStore.list.data"/>
    </div>

    <router-view v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>

    <Footer />
  </section>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
