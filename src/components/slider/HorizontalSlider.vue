<script setup>
import { reactive } from 'vue';

const items = reactive([
    { title: 'Muzaffarbek To’raboyev — Parij-2024 yozgi Olimpiya o’yinlari sovrindori!', id: 1 },
    { title: 'Diyora Keldiyorovaning kimоnosi XOQ muzeyidan joy oldi! asdasd', id: 2 },
    { title: 'Diyora Keldiyorovaning kimоnosi XOQ muzeyidan joy oldi 832484234', id: 3 },
    { title: 'Diyora Keldiyorovaning kimоnosi XOQ muzeyidan joy oldi udcsd fsdhsdfhsddfsasdasd', id: 4 },
])

</script>
<template>
    <a-carousel autoplay :autoplaySpeed="2000" dot-position="left"   :slidesToShow="1">
        <div v-for="item in items" :key="item.id">
            <h3>{{ item.title }}</h3>
        </div>
    </a-carousel>
</template>