<script setup>
import Navbar from '@/components/sections/Navbar.vue';
import Footer from '@/components/sections/Footer.vue';
import { RouterView } from "vue-router";

</script>

<template>
  <section>
    <Navbar />
    <Transition name="fade" mode="out-in">
      <router-view />
    </Transition>
    <Footer />
  </section>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to
  {
  opacity: 0;
}
</style>
