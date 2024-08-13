<script setup>
import Navbar from '@/components/sections/Navbar.vue';
import Footer from '@/components/sections/Footer.vue';
import { RouterView } from "vue-router";

</script>

<template>
  <section>
    <Navbar/>
    <router-view />
    <!-- <Footer /> -->
  </section>
</template>

<style lang="scss"></style>
