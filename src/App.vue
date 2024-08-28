<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '@/components/sections/Navbar.vue';
import Loader from '@/views/Loader.vue';
import Footer from '@/components/sections/Footer.vue';
import ResponsiveNavbar from './components/responsive/ResponsiveNavbar.vue';
import { useMenuStore } from '@/stores/menu';

const menuStore = useMenuStore();
const isLoading = ref(true);
const isLoad = ref(false);
const router = useRouter();
router.beforeEach((to, from, next) => {
  isLoading.value = true;
  next();
});

router.afterEach(() => {

  setTimeout(() => {
    isLoading.value = false;
  }, 600);

});

onMounted(async () => {
  await menuStore.fetchList();
  isLoad.value = true;
});

watch(isLoading, (loading) => {
  document.body.style.overflow = loading ? 'hidden' : 'auto'
})

</script>

<template>
  <section>
    <Loader :class="isLoading ? 'active__loader' : ''" />
    <Navbar />
    <ResponsiveNavbar :data="menuStore.list.data" v-if="isLoad" />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <Footer v-if="!isLoading" />
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

.active__loader {
  opacity: 1;
  display: block;
}
</style>