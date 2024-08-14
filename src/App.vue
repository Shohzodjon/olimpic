<script setup>
import Navbar from '@/components/sections/Navbar.vue';
import Footer from '@/components/sections/Footer.vue';
import { RouterView } from "vue-router";

</script>

<template>
  <section>
    <Navbar />
   
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
.fade-leave-to
  {
  opacity: 0;
}
</style>
