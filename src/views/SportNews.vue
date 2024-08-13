<script setup>
import BreadCrump from '@/components/menu/BreadCrump.vue';
import NewsCard from '@/components/card/NewsCard.vue';
import news1 from '@/assets/images/news1.jpg'
import news2 from '@/assets/images/news2.jpg'
import news3 from '@/assets/images/news3.jpg'
const breads = [
    { label: 'Home', url: '/:en', id: 1 },
    { label: "Yangiliklar", id: 2 },
    { label: "Sport tibbiyoti", id: 3 },
];
const newsList = [
    { url: '/oz/sport-news', img: news1, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita earum assumenda ex quaerat sequi necessitatibus corrupti odio est repellat neque alias, veniam molestiae inventore tenetur harum rem laboriosam qui magnam ipsum, voluptatem unde. Quod delectus commodi tempore fuga voluptate asperiores placeat beatae similique magni, possimus suscipit repellat eum excepturi ipsam!', time: '15.02.2022', id: 1 },
    { url: '/oz/sport-news', img: news2, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita earum assumenda ex quaerat sequi necessitatibus corrupti odio est repellat neque alias, veniam molestiae inventore tenetur harum rem laboriosam qui magnam ipsum, voluptatem unde. Quod delectus commodi tempore fuga voluptate asperiores placeat beatae similique magni, possimus suscipit repellat eum excepturi ipsam!', time: '15.02.2022', id: 2 },
    { url: '/oz/sport-news', img: news3, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita earum assumenda ex quaerat sequi necessitatibus corrupti odio est repellat neque alias, veniam molestiae inventore tenetur harum rem laboriosam qui magnam ipsum, voluptatem unde. Quod delectus commodi tempore fuga voluptate asperiores placeat beatae similique magni, possimus suscipit repellat eum excepturi ipsam!', time: '15.02.2022', id: 3 },
    { url: '/oz/sport-news', img: news1, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita earum assumenda ex quaerat sequi necessitatibus corrupti odio est repellat neque alias, veniam molestiae inventore tenetur harum rem laboriosam qui magnam ipsum, voluptatem unde. Quod delectus commodi tempore fuga voluptate asperiores placeat beatae similique magni, possimus suscipit repellat eum excepturi ipsam!', time: '15.02.2022', id: 4 },
    { url: '/oz/sport-news', img: news2, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita earum assumenda ex quaerat sequi necessitatibus corrupti odio est repellat neque alias, veniam molestiae inventore tenetur harum rem laboriosam qui magnam ipsum, voluptatem unde. Quod delectus commodi tempore fuga voluptate asperiores placeat beatae similique magni, possimus suscipit repellat eum excepturi ipsam!', time: '15.02.2022', id: 5 },
    { url: '/oz/sport-news', img: news3, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita earum assumenda ex quaerat sequi necessitatibus corrupti odio est repellat neque alias, veniam molestiae inventore tenetur harum rem laboriosam qui magnam ipsum, voluptatem unde. Quod delectus commodi tempore fuga voluptate asperiores placeat beatae similique magni, possimus suscipit repellat eum excepturi ipsam!', time: '15.02.2022', id: 6 },
    { url: '/oz/sport-news', img: news1, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita earum assumenda ex quaerat sequi necessitatibus corrupti odio est repellat neque alias, veniam molestiae inventore tenetur harum rem laboriosam qui magnam ipsum, voluptatem unde. Quod delectus commodi tempore fuga voluptate asperiores placeat beatae similique magni, possimus suscipit repellat eum excepturi ipsam!', time: '15.02.2022', id: 7 },
    { url: '/oz/sport-news', img: news2, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita earum assumenda ex quaerat sequi necessitatibus corrupti odio est repellat neque alias, veniam molestiae inventore tenetur harum rem laboriosam qui magnam ipsum, voluptatem unde. Quod delectus commodi tempore fuga voluptate asperiores placeat beatae similique magni, possimus suscipit repellat eum excepturi ipsam!', time: '15.02.2022', id: 8 },
    { url: '/oz/sport-news', img: news3, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita earum assumenda ex quaerat sequi necessitatibus corrupti odio est repellat neque alias, veniam molestiae inventore tenetur harum rem laboriosam qui magnam ipsum, voluptatem unde. Quod delectus commodi tempore fuga voluptate asperiores placeat beatae similique magni, possimus suscipit repellat eum excepturi ipsam!', time: '15.02.2022', id: 9 },
    { url: '/oz/sport-news', img: news1, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita earum assumenda ex quaerat sequi necessitatibus corrupti odio est repellat neque alias, veniam molestiae inventore tenetur harum rem laboriosam qui magnam ipsum, voluptatem unde. Quod delectus commodi tempore fuga voluptate asperiores placeat beatae similique magni, possimus suscipit repellat eum excepturi ipsam!', time: '15.02.2022', id: 10 },
    { url: '/oz/sport-news', img: news2, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita earum assumenda ex quaerat sequi necessitatibus corrupti odio est repellat neque alias, veniam molestiae inventore tenetur harum rem laboriosam qui magnam ipsum, voluptatem unde. Quod delectus commodi tempore fuga voluptate asperiores placeat beatae similique magni, possimus suscipit repellat eum excepturi ipsam!', time: '15.02.2022', id: 11 },
]
</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breads" />
            <h2>Sport tibbiyoti</h2>
            <a-row :gutter="[20,20]">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <a-row :gutter="[20, 20]">
                        <a-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" v-for="item in newsList" :key="item.id">
                            <NewsCard :data="item" :url="`/oz/news-slug/${item.id}`" />
                        </a-col>
                    </a-row>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <div class="committee-page__sidebar">
                        <div class="committee-page__sidebar-menu">Menu</div>
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