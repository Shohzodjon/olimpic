<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '@/components/sections/Navbar.vue';
import Loader from '@/views/Loader.vue';
import Footer from '@/components/sections/Footer.vue';
import ResponsiveNavbar from './components/responsive/ResponsiveNavbar.vue';
import { useMenuStore } from '@/stores/menu';

const menuStore = useMenuStore();
const isLoading = ref(false);
const isLoad = ref(false);
const router = useRouter();

router.beforeEach((to, from, next) => {
  isLoading.value = true;
  next();
});

router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 500);
});

onMounted(async () => {
  await menuStore.fetchList();
  isLoad.value = true;
});
</script>

<template>
  <section>
    <Navbar />
    <Loader v-if="!isLoad || isLoading" />
    <div v-else>
      <ResponsiveNavbar :data="menuStore.list.data" />
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
      <Footer />
    </div>
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