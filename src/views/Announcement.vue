<script setup>
import BreadCrump from '@/components/menu/BreadCrump.vue';
import NewsCard from '@/components/card/NewsCard.vue';
import announce from '@/assets/images/announce.jpg'
const breads = [
    { label: 'Home', url: '/oz', id: 1 },
    { label: "Elonlar", id: 2, },

];
const newsList = [
    { img: announce, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita earum assumenda ex quaerat sequi necessitatibus corrupti odio est repellat neque alias, veniam molestiae inventore tenetur harum rem laboriosam qui magnam ipsum, voluptatem unde. Quod delectus commodi tempore fuga voluptate asperiores placeat beatae similique magni, possimus suscipit repellat eum excepturi ipsam!', time: '15.02.2022', id: 1 },
]
</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breads" />
            <h2>Elonlar</h2>
            <a-row :gutter="24">
                <a-col :span="19">
                    <a-row :gutter="[20, 20]">
                        <a-col :span="8" v-for="item in newsList" :key="item.id">
                            <NewsCard :data="item" :url="`/oz/announce-slug/${item.id}`" />
                        </a-col>
                    </a-row>
                </a-col>
                <a-col :span="5">
                    <div class="committee-page__sidebar">
                        <div class="committee-page__sidebar-img">
                            <RouterLink to="/:en">
                                <img src="@/assets/images/olimpic.png" alt="olimpic ">
                            </RouterLink>
                        </div>
                    </div>
                </a-col>
            </a-row>
        </div>
    </section>
</template>